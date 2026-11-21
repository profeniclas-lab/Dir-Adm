import { runIntegrationReport, formatIntegrationReport, downloadIntegrationReport } from './core/integration-report.js';
import { runPedagogicalFlowTests, formatPedagogicalFlowTests } from './core/pedagogical-flow-tests.js';
import { runStorageRoundtripTests, formatStorageRoundtripTests } from './core/storage-roundtrip-tests.js';
import { renderUnifiedReviewList } from './features/unified-review-ui.js';
import { loadState, saveState } from "./core/storage.js";
import { runRestoreConflictTests, formatRestoreConflictTests } from './core/restore-conflict-tests.js';
import { isSaveBlocked, reportSaveFailure } from './core/save-failure-ui.js';
import { runPersistenceDiagnostics, formatPersistenceDiagnostics } from "./core/persistence-diagnostics.js";
import { exportRecoveryCopy, releaseRecoveryCopy } from "./core/recovery-manager.js";
import { inspectStoredProgress, showStorageSafetyWarning } from "./core/storage-safety.js";
import { runBackupIntegrityChecks, formatBackupIntegrityReport } from "./core/backup-integrity-tests.js";
import { exportProgressBackup } from "./core/progress-backup.js";
import { inspectProgressBackupFile } from "./core/progress-backup-validator.js";
import { prepareProgressRestore, restoreProgressBackup } from "./core/progress-restore.js";
import { refreshUnifiedReviewQueue } from "./core/spaced-review.js";
import { setupNavigation, setActiveNavigation, getRouteTitle } from "./core/navigation.js";
import { renderDashboard } from "./features/dashboard.js";
import { renderModules } from "./features/modules.js";
import { renderModuleDetail } from "./features/module-detail.js";
import { renderDiagnostic, renderDiagnosticEdit, saveDiagnosticAnswer, resetDiagnostic } from "./features/diagnostic.js";
import { renderLesson, saveLessonProgress } from "./features/lessons.js";
import { renderExercises, createExerciseSession, answerExercise, assessExercise, nextExercise } from "./features/exercises.js";
import { validateCatalog } from "./data/modules.js";
import { renderStatistics } from "./features/estatisticas.js";
import { renderFlashcards, changeFlashFilter, startFlashStudy, flipFlashStudy, rateFlashStudy, restartFlashStudy } from "./features/flashcards.js";
import { renderQuestionBank, updateBankFilter, startBankSession, answerBankQuestion, nextBankQuestion, closeBankSession } from "./features/banco-questoes.js";
import { renderSimulados, startSimulado, answerSimulado, moveSimulado, finishSimulado, closeSimulado, cancelSimulado } from "./features/simulados.js";
import { jumpSimulado, simuladoNavigationSummary } from "./core/simulado-navigation.js";
import { renderReviewList, renderReviewQuestion, beginReview, answerReview, assessReview, removeError } from "./features/review-errors.js";

const storageSafety = inspectStoredProgress();
const state = loadState();
if (storageSafety.ok) refreshUnifiedReviewQueue(state);
else showStorageSafetyWarning(storageSafety);
const mainElement = document.getElementById("main");
const catalogErrors = validateCatalog();
if (catalogErrors.length) console.error("[ADM-ESTUDO] Catálogo inválido:", catalogErrors);
let activeView = 'module';
let lessonSubtopicId = null;
let lessonAnswerShown = false;
let editSubtopicId = null;
let cardFlipped = false;
let reviewQuestionId = null;

function renderCurrentPage() {
  if (!mainElement) return;
  document.title = `ADM-ESTUDO v2.0 — ${getRouteTitle(state.navigation.currentRoute)}`;
  setActiveNavigation(state.navigation.currentRoute);
  if (catalogErrors.length) {
    mainElement.textContent = "Erro de validação no catálogo. Consulte o console do navegador.";
    return;
  }
  switch (state.navigation.currentRoute) {
    case "dashboard": renderDashboard(mainElement, state); break;
    case "estatisticas": renderStatistics(mainElement,state); break;
    case "flashcards": renderFlashcards(mainElement,state); break;
    case "banco-questoes": renderQuestionBank(mainElement,state); break;
    case "simulados": renderSimulados(mainElement,state); break;
    case "revisao":
    case "erros":
      if(reviewQuestionId)renderReviewQuestion(mainElement,state,state.navigation.currentRoute,reviewQuestionId);
      else if(state.navigation.currentRoute==='revisao')renderUnifiedReviewList(mainElement,state);
      else renderReviewList(mainElement,state,state.navigation.currentRoute);
      break;
    case "modulos":
      if (state.navigation.selectedModuleId) {
        if (activeView === 'exercises') renderExercises(mainElement,state.navigation.selectedModuleId,state);
        else if (activeView === 'lesson') renderLesson(mainElement, state.navigation.selectedModuleId, lessonSubtopicId, state, {showAnswer:lessonAnswerShown});
        else if (activeView === 'diagnostic') renderDiagnostic(mainElement, state.navigation.selectedModuleId, state, { editSubtopicId, flipped: cardFlipped });
        else renderModuleDetail(mainElement, state.navigation.selectedModuleId, state);
      } else renderModules(mainElement,state);
      break;
    default:
      mainElement.innerHTML = `<section><h1 class="page-title">${getRouteTitle(state.navigation.currentRoute)}</h1><p class="page-subtitle">Esta área será implementada nas próximas etapas.</p><div class="notice">A funcionalidade ainda não foi ativada na nova arquitetura.</div></section>`;
  }
}
function commitAndRender() {
  if (isSaveBlocked()) return;
  if (!storageSafety.ok) {
    reportSaveFailure({ message: storageSafety.message || 'Progresso protegido; gravação bloqueada.' }, state);
    return;
  }
  refreshUnifiedReviewQueue(state);
  const result = saveState(state);
  if (!result.ok) {
    reportSaveFailure(result, state);
    return;
  }
  renderCurrentPage();
}
function resetCardView() { editSubtopicId = null; cardFlipped = false; }
function navigateTo(route) {
  state.navigation.currentRoute = route;
  activeView = 'module'; lessonSubtopicId=null;lessonAnswerShown=false; resetCardView();reviewQuestionId=null;
  if (route === 'modulos') state.navigation.selectedModuleId = null;
  commitAndRender();
}

document.addEventListener('change', event => {
  if(state.navigation.currentRoute!=='banco-questoes')return;
  const select=event.target.closest('[data-bank-filter]');
  if(select&&updateBankFilter(state,select.dataset.bankFilter,select.value))commitAndRender();
});
document.addEventListener('change', event => {
  if(state.navigation.currentRoute!=='flashcards')return;
  const control=event.target.closest('[data-flash-filter]');
  if(control&&changeFlashFilter(state,control.dataset.flashFilter,control.value))commitAndRender();
});
document.addEventListener('click', event => {
  const exportButton = event.target.closest('[data-recovery-export]');
  const releaseButton = event.target.closest('[data-recovery-release]');
  if (!exportButton && !releaseButton) return;
  const status = document.getElementById('recovery-manager-result');
  if (exportButton) {
    const result = exportRecoveryCopy();
    if (status) status.textContent = result.message;
    return;
  }
  const first = window.confirm('Você já baixou a cópia de recuperação e confirmou que o arquivo JSON foi salvo em local externo? A próxima etapa remove a cópia local anterior, não o progresso atual.');
  if (!first) return;
  const second = window.confirm('CONFIRMAÇÃO FINAL: liberar a cópia local de recuperação? Esta ação não pode ser desfeita sem o arquivo externo.');
  if (!second) return;
  const result = releaseRecoveryCopy(true);
  window.alert(result.message);
  if (result.ok) renderCurrentPage();
  else if (status) status.textContent = result.message;
});
document.addEventListener('click', event => {
  if (!event.target.closest('[data-restore-conflict-tests]')) return;
  window.alert(formatRestoreConflictTests(runRestoreConflictTests()));
});
document.addEventListener('click', event => {
  if (!event.target.closest('[data-persistence-diagnostics]')) return;
  const report = runPersistenceDiagnostics();
  window.alert(formatPersistenceDiagnostics(report));
});
document.addEventListener('click', event => {
  if (!event.target.closest('[data-backup-integrity]')) return;
  const report = runBackupIntegrityChecks();
  window.alert(formatBackupIntegrityReport(report));
});
document.addEventListener('click', event => {
  if (event.target.closest('[data-backup-inspect]')) { document.getElementById('backup-file-input')?.click(); return; }
  if (event.target.closest('[data-backup-export]')) { const result=exportProgressBackup(); window.alert(result.message); return; }
  if(state.navigation.currentRoute==='estatisticas'){
    const btn=event.target.closest('[data-stats-module]');
    if(btn){state.navigation.selectedModuleId=btn.dataset.statsModule;state.navigation.currentRoute='modulos';activeView='module';commitAndRender();return;}
  }
  if(state.navigation.currentRoute==='flashcards'){
    if(event.target.closest('[data-flash-start]')){if(startFlashStudy(state))commitAndRender();return;}
    if(event.target.closest('[data-flash-flip]')){if(flipFlashStudy(state))commitAndRender();return;}
    const rating=event.target.closest('[data-flash-rate]');
    if(rating){if(rateFlashStudy(state,rating.dataset.flashRate))commitAndRender();return;}
    if(event.target.closest('[data-flash-close]')){navigateTo('modulos');return;}
    if(event.target.closest('[data-flash-restart]')){if(window.confirm('Recomeçar a seleção de cartões? As avaliações já salvas serão mantidas.')&&restartFlashStudy(state))commitAndRender();return;}
  }
  if(state.navigation.currentRoute==='banco-questoes'){
    const action=event.target.closest('[data-action]')?.dataset.action;
    if(action==='bank-start'){if(startBankSession(state))commitAndRender();return;}
    if(action==='bank-close'){if(window.confirm('Encerrar esta sessão de questões? As respostas desta sessão não serão mantidas.')&&closeBankSession(state))commitAndRender();return;}
    if(action==='bank-next'){if(nextBankQuestion(state))commitAndRender();return;}
    const choice=event.target.closest('[data-bank-choice]');
    if(choice){const session=state.progress?.questionBank?.session;const id=session?.ids?.[session.cursor];if(id&&answerBankQuestion(state,id,Number(choice.dataset.bankChoice)))commitAndRender();return;}
  }
  if(state.navigation.currentRoute==='simulados'){
    const start=event.target.closest('[data-sim-start]');
    if(start){const area=document.getElementById('sim-area')?.value||'todas';const count=document.getElementById('sim-count')?.value||'20';const result=startSimulado(state,area,count);if(result.ok)commitAndRender();else window.alert(result.message);return;}
    const choice=event.target.closest('[data-sim-choice]');
    if(choice){const session=state.progress?.simulados?.active;const id=session?.ids?.[session.cursor];if(id&&answerSimulado(state,id,Number(choice.dataset.simChoice)))commitAndRender();return;}
    const jump=event.target.closest('[data-sim-jump]');
    if(jump){if(jumpSimulado(state,Number(jump.dataset.simJump)))commitAndRender();return;}
    const move=event.target.closest('[data-sim-move]');
    if(move){if(moveSimulado(state,Number(move.dataset.simMove)))commitAndRender();return;}
    if(event.target.closest('[data-sim-finish]')){const summary=simuladoNavigationSummary(state.progress?.simulados?.active);if(!summary.complete){window.alert('Responda às '+summary.pending+' questão(ões) pendente(s) antes de finalizar.');return;}if(window.confirm('Finalizar este simulado e ver a correção? Após finalizar, não será possível alterar as respostas.')&&finishSimulado(state))commitAndRender();return;}
    if(event.target.closest('[data-sim-close]')){if(closeSimulado(state))commitAndRender();return;}
    if(event.target.closest('[data-sim-cancel]')){if(window.confirm('Cancelar este simulado? As respostas desta tentativa serão descartadas.')&&cancelSimulado(state))commitAndRender();return;}
  }
  if(state.navigation.currentRoute==='revisao'){
    const flash=event.target.closest('[data-unified-flash-open]');
    if(flash){
      const id=flash.dataset.unifiedFlashOpen;
      state.progress.flashcardStudy??={filters:{area:'todas',module:'todos',mode:'todos'},session:null};
      if(state.progress.flashcardStudy.session){window.alert('Existe uma sessão de flashcards em andamento. Conclua-a antes de abrir uma revisão específica.');return;}
      state.progress.flashcardStudy.session={ids:[id],cursor:0,flipped:false,startedAt:new Date().toISOString()};
      state.navigation.currentRoute='flashcards';reviewQuestionId=null;commitAndRender();return;
    }
  }
  if(state.navigation.currentRoute==='revisao'||state.navigation.currentRoute==='erros'){
    const open=event.target.closest('[data-review-open]');
    if(open){if(beginReview(state,open.dataset.reviewOpen)){reviewQuestionId=open.dataset.reviewOpen;commitAndRender();}return;}
    const back=event.target.closest('[data-review-back]');
    if(back){reviewQuestionId=null;renderCurrentPage();return;}
    const choice=event.target.closest('[data-review-choice]');
    if(choice&&reviewQuestionId){if(answerReview(state,reviewQuestionId,Number(choice.dataset.reviewChoice)))commitAndRender();return;}
    const assess=event.target.closest('[data-review-assess]');
    if(assess&&reviewQuestionId){if(assessReview(state,reviewQuestionId,assess.dataset.reviewAssess))commitAndRender();return;}
    const remove=event.target.closest('[data-review-remove]');
    if(remove){if(window.confirm('Remover esta questão do banco de erros? O histórico de respostas será mantido.')&&removeError(state,remove.dataset.reviewRemove))commitAndRender();return;}
  }
  const moduleButton = event.target.closest('[data-module-id]');
  if (moduleButton) {
    state.navigation.currentRoute = 'modulos';
    state.navigation.selectedModuleId = moduleButton.dataset.moduleId;
    activeView = 'module'; lessonSubtopicId=null;lessonAnswerShown=false; resetCardView();
    commitAndRender(); return;
  }
  const openLesson=event.target.closest('[data-lesson-open]');
  if(openLesson && state.navigation.selectedModuleId){lessonSubtopicId=openLesson.dataset.lessonOpen;lessonAnswerShown=false;activeView='lesson';renderCurrentPage();return;}
  const rating=event.target.closest('[data-lesson-rating]');
  if(rating && activeView==='lesson' && lessonSubtopicId){if(saveLessonProgress(state,lessonSubtopicId,'rating',rating.dataset.lessonRating))commitAndRender();return;}
  const exerciseChoice=event.target.closest('[data-exercise-choice]');
  if(exerciseChoice && activeView==='exercises'){const session=state.progress.exercises?.[state.navigation.selectedModuleId];const id=session?.ids?.[session.cursor];if(id&&answerExercise(state,state.navigation.selectedModuleId,id,Number(exerciseChoice.dataset.exerciseChoice)))commitAndRender();return;}
  const assess=event.target.closest('[data-exercise-assess]');
  if(assess && activeView==='exercises'){const mid=state.navigation.selectedModuleId;const session=state.progress.exercises?.[mid];const id=session?.ids?.[session.cursor];if(id&&assessExercise(state,mid,id,assess.dataset.exerciseAssess))commitAndRender();return;}
  const action = event.target.closest('[data-action]')?.dataset.action;
  if(action==='exercise-open'){activeView='exercises';renderCurrentPage();return;}
  if(action==='exercise-back'){activeView='module';renderCurrentPage();return;}
  if(action==='exercise-start'||action==='exercise-restart'){if(action==='exercise-restart'&&!window.confirm('Iniciar outra tentativa? A tentativa atual será substituída.'))return;if(createExerciseSession(state,state.navigation.selectedModuleId))commitAndRender();return;}
  if(action==='exercise-next'){if(nextExercise(state,state.navigation.selectedModuleId))commitAndRender();return;}
  if(action==='lesson-back'){activeView='module';lessonSubtopicId=null;lessonAnswerShown=false;renderCurrentPage();return;}
  if(action==='lesson-toggle-answer' && activeView==='lesson'){lessonAnswerShown=!lessonAnswerShown;renderCurrentPage();return;}
  if(action==='lesson-complete' && activeView==='lesson' && lessonSubtopicId){if(saveLessonProgress(state,lessonSubtopicId,'complete'))commitAndRender();return;}
  if (action === 'modules-back') {
    state.navigation.selectedModuleId = null; activeView = 'module'; lessonSubtopicId=null;lessonAnswerShown=false; resetCardView(); commitAndRender(); return;
  }
  if (action === 'diagnostic-open') {
    activeView = 'diagnostic'; resetCardView(); renderCurrentPage(); return;
  }
  if (action === 'diagnostic-back') {
    activeView = 'module'; lessonSubtopicId=null;lessonAnswerShown=false; resetCardView(); renderCurrentPage(); return;
  }
  if (action === 'diag-flip' && activeView === 'diagnostic') { cardFlipped = !cardFlipped; renderCurrentPage(); return; }
  const choiceButton = event.target.closest('[data-diag-choice]');
  if (choiceButton && state.navigation.selectedModuleId && activeView === 'diagnostic') {
    if (cardFlipped && saveDiagnosticAnswer(state, state.navigation.selectedModuleId, choiceButton.dataset.diagSubtopic, choiceButton.dataset.diagChoice)) { resetCardView(); commitAndRender(); }
    return;
  }
  const editButton = event.target.closest('[data-diag-edit]');
  if (editButton && state.navigation.selectedModuleId && activeView === 'diagnostic') {
    editSubtopicId = editButton.dataset.diagEdit; cardFlipped = false; renderDiagnosticEdit(mainElement, state.navigation.selectedModuleId, editSubtopicId, state); return;
  }
  if (action === 'diagnostic-reset' && activeView === 'diagnostic' && state.navigation.selectedModuleId) {
    if (window.confirm('Deseja apagar as respostas deste diagnóstico e começar novamente?')) {
      resetDiagnostic(state, state.navigation.selectedModuleId); resetCardView(); commitAndRender();
    }
  }
});
setupNavigation({ onNavigate: navigateTo });
renderCurrentPage();
console.info('[ADM-ESTUDO] Aplicação v2.0: flashcards diagnósticos habilitados apenas no ADM-01.');

document.addEventListener('change', async event => {
  if (event.target?.id !== 'backup-file-input') return;
  const input = event.target;
  const result = await inspectProgressBackupFile(input.files?.[0]);
  const status = document.getElementById('backup-validation-result');
  if (status) {
    const lines = [result.valid ? 'Arquivo estruturalmente compatível para a próxima etapa.' : 'Arquivo não aprovado para restauração.', ...result.errors, ...result.warnings.map(x=>'Aviso: '+x)];
    if (result.summary) lines.push('Resumo: '+result.summary.modules+' módulos registrados; '+result.summary.lessons+' registros de aulas; '+result.summary.errors+' erros; '+result.summary.simulations+' simulados.');
    status.textContent = lines.join('\n');
  }
  input.value = '';
});

// Fase 18 — Lote 3: restauração explícita, sem importação automática.
document.addEventListener('click', event => {
  if (event.target.closest('[data-backup-restore]')) { document.getElementById('backup-restore-input')?.click(); }
});
document.addEventListener('change', async event => {
  if (event.target?.id !== 'backup-restore-input') return;
  const input=event.target, file=input.files?.[0]; input.value='';
  const status=document.getElementById('backup-restore-result');
  if (!status || !file) return;
  status.textContent='Validando arquivo...';
  const prepared=await prepareProgressRestore(file);
  if (!prepared.ok) { status.textContent='Restauração bloqueada: '+prepared.message; return; }
  const s=prepared.validation.summary;
  status.textContent='Arquivo válido. Aguardando confirmação do usuário.';
  const ok=window.confirm('ATENÇÃO: isto substituirá TODO o progresso atual deste navegador pelo conteúdo do arquivo '+file.name+'\n\nResumo: '+s.modules+' módulos, '+s.lessons+' aulas, '+s.errors+' erros e '+s.simulations+' simulados.\n\nAntes de continuar, salve seu backup atual em local seguro. O navegador também solicitará o download de uma cópia de recuperação.\n\nDeseja realmente substituir o progresso?');
  if (!ok) { status.textContent='Restauração cancelada. Nada foi alterado.'; return; }
  const result=restoreProgressBackup(prepared,true);
  status.textContent=result.message;
  if (result.ok) { window.alert('Restauração gravada. Verifique se o arquivo de recuperação foi baixado. A página será recarregada.'); window.location.reload(); }
});

document.addEventListener('click', event => {
  if (!event.target.closest('[data-storage-roundtrip-tests]')) return;
  window.alert(formatStorageRoundtripTests(runStorageRoundtripTests()));
});

document.addEventListener('click', event => {
  if (!event.target.closest('[data-pedagogical-flow-tests]')) return;
  const report = runPedagogicalFlowTests();
  window.alert(formatPedagogicalFlowTests(report));
});

// Fase 20 — Lote 5: consolidação não destrutiva.
document.addEventListener('click', event => {
  if (!event.target.closest('[data-integration-report]')) return;
  const report = runIntegrationReport();
  window.alert(formatIntegrationReport(report));
  downloadIntegrationReport(report);
});
