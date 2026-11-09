/* ============================================================
   MOTOR GENÉRICO — App de Estudos
   Não contém conteúdo de matéria. Lê window.APP_CONFIG (config.js)
   e mescla os arquivos de content/ com base em contentSuffixes.

   v1.1 — adiciona filtro de STATUS nas telas de Questões e Simulados
          (todos / não respondidas / já respondidas / acertos / erros)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Configuração ---------- */
  var CFG = window.APP_CONFIG || {};
  var APP_NAME       = CFG.appName       || 'ESTUDO';
  var APP_SUBTITLE   = CFG.appSubtitle   || '';
  var APP_VERSION    = CFG.appVersion    || '1.0';
  var SCHEMA_VERSION = CFG.schemaVersion || 1;
  var STORAGE_KEY    = CFG.storageKey    || 'appState.state';
  var AREA_LABELS    = CFG.areaLabels    || { GERAL: 'Geral' };
  var PRIORITY_LABELS= CFG.priorityLabels|| { alta: 'Alta', media: 'Média', baixa: 'Baixa' };
  var PRIORITY_ORDER = CFG.priorityOrder || ['alta', 'media', 'baixa'];
  var CONTENT_SUFFIXES = CFG.contentSuffixes || ['alta', 'media', 'complementar'];
  var SOBRE = CFG.sobre || {};

  /* ---------- Merge dinâmico dos arquivos de conteúdo ---------- */
  var LESSONS = {};
  var DIAGNOSTICS = {};
  for (var _s = 0; _s < CONTENT_SUFFIXES.length; _s++) {
    var _suffix = CONTENT_SUFFIXES[_s];
    var _lk = 'LESSONS_' + _suffix.toUpperCase();
    var _dk = 'DIAGNOSTICS_' + _suffix.toUpperCase();
    if (window[_lk] && typeof window[_lk] === 'object') Object.assign(LESSONS, window[_lk]);
    if (window[_dk] && typeof window[_dk] === 'object') Object.assign(DIAGNOSTICS, window[_dk]);
  }

  var MODULES    = Array.isArray(window.MODULES)    ? window.MODULES    : [];
  var QUESTIONS  = Array.isArray(window.QUESTIONS)  ? window.QUESTIONS  : [];
  var FLASHCARDS = Array.isArray(window.FLASHCARDS) ? window.FLASHCARDS : [];

  /* ---------- Constantes de UI ---------- */
  var STATUS_LABELS = { 'conhecido': 'Conhecido', 'duvida': 'Em dúvida', 'desconhecido': 'Desconhecido' };
  var DIAG_TYPE_LABELS = { 'multipla_escolha': 'Múltipla escolha', 'verdadeiro_falso': 'Verdadeiro ou falso', 'situacao': 'Situação prática', 'autoavaliacao': 'Autoavaliação' };
  var DIFFICULTY_LABELS = { 1: 'Fácil', 2: 'Médio', 3: 'Difícil' };
  var DIFFICULTY_CLASS  = { 1: 'badge-facil', 2: 'badge-medio', 3: 'badge-dificil' };
  var FC_ANSWER_LABELS  = { 'sabia': 'Eu sabia', 'duvida': 'Tive dúvida', 'nao_sabia': 'Não sabia' };
  var FC_ANSWER_CLASS   = { 'sabia': 'sabia', 'duvida': 'duvida', 'nao_sabia': 'nao' };
  var FC_INTERVALS = [0, 1, 3, 7, 15, 30];
  var Q_INTERVALS  = [1, 3, 7, 15, 30, 60];

  /* ---------- Estado da aplicação ---------- */
  var AppState = null;
  var currentScreen = 'dashboard';
  var currentModuleId = null;
  var currentLessonId = null;
  var moduleFilter = 'todas';
  var professorAnswerOpen = null;
  var diagRunning = { moduleId: null, answers: {}, itemIndex: 0, revealed: {} };
  var questionFilter = { area: 'todas', moduloId: 'todos', dificuldade: 'todas', tipo: 'TODAS', status: 'todas' };
  var questionRunning = null;
  var importReport = null;
  var flashcardFilter = { area: 'todas', moduloId: 'todos' };
  var flashcardRunning = null;
  var simuladoConfig = { modo: 'SIMULADO', quantidade: 10, customQty: '', area: 'todas', moduloId: 'todos', dificuldade: 'todas', tipo: 'TODAS', status: 'todas' };
  var simuladoRunning = null;
  var currentSimuladoId = null;

  /* ============================================================
     ESTADO PERSISTIDO
  ============================================================ */
  function createDefaultState() {
    var now = new Date().toISOString();
    return {
      schemaVersion: SCHEMA_VERSION, appVersion: APP_VERSION,
      createdAt: now, updatedAt: now,
      settings: { theme: 'light' },
      modules: {}, questions: {}, flashcards: {}, simulados: [],
      stats: { questoesRespondidas: 0, acertos: 0, erros: 0, flashcardsEstudados: 0, simuladosRealizados: 0, tempoEstudoMin: 0 },
      lastScreen: 'dashboard'
    };
  }
  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createDefaultState();
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return createDefaultState();
      var base = createDefaultState();
      return {
        schemaVersion: SCHEMA_VERSION, appVersion: APP_VERSION,
        createdAt: parsed.createdAt || base.createdAt,
        updatedAt: parsed.updatedAt || base.updatedAt,
        settings: Object.assign({}, base.settings, parsed.settings || {}),
        modules: parsed.modules || {},
        questions: parsed.questions || {},
        flashcards: parsed.flashcards || {},
        simulados: Array.isArray(parsed.simulados) ? parsed.simulados : [],
        stats: Object.assign({}, base.stats, parsed.stats || {}),
        lastScreen: parsed.lastScreen || 'dashboard'
      };
    } catch (e) { console.error('Falha ao ler estado:', e); return createDefaultState(); }
  }
  function saveState() {
    AppState.updatedAt = new Date().toISOString();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState)); }
    catch (e) { console.error('Falha ao salvar estado:', e); }
  }
  function getModuleUserState(modId) {
    if (!AppState.modules[modId]) AppState.modules[modId] = { status: 'nao_iniciado', aulasLidas: [], diagnostico: null, dominioEstimado: 0, ultimaAtividade: null };
    if (!Array.isArray(AppState.modules[modId].aulasLidas)) AppState.modules[modId].aulasLidas = [];
    if (AppState.modules[modId].diagnostico === undefined) AppState.modules[modId].diagnostico = null;
    return AppState.modules[modId];
  }

  function isModuleConcluido(modId) {
    var st = getModuleUserState(modId);
    if (st.status === 'concluido') return true;
    var lesson = getLessonByModuleId(modId);
    var aulaLida = !lesson || (st.aulasLidas || []).indexOf(lesson.id) !== -1;
    var dominio100 = (st.dominioEstimado || 0) >= 1;
    return aulaLida && dominio100;
  }
  function checkModuleCompletion(modId) {
    var st = getModuleUserState(modId);
    var lesson = getLessonByModuleId(modId);
    var aulaLida = !lesson || (st.aulasLidas || []).indexOf(lesson.id) !== -1;
    var dominio100 = (st.dominioEstimado || 0) >= 1;
    if (aulaLida && dominio100) st.status = 'concluido';
    else if (st.status === 'concluido') st.status = 'em_estudo';
    else if (st.status === 'nao_iniciado') {
      if ((st.aulasLidas && st.aulasLidas.length > 0) || st.diagnostico) st.status = 'em_estudo';
    }
  }

  function getQuestionUserState(qid) {
    if (!AppState.questions[qid]) {
      AppState.questions[qid] = { tentativas: 0, acertos: 0, erros: 0, ultimaResposta: null, ultimaCorreta: null, ultimaTentativa: null, status: 'nao_respondida', historico: [], intervaloAtual: -1, proximaRevisao: null };
    }
    if (AppState.questions[qid].intervaloAtual === undefined) AppState.questions[qid].intervaloAtual = -1;
    if (AppState.questions[qid].proximaRevisao === undefined) AppState.questions[qid].proximaRevisao = null;
    return AppState.questions[qid];
  }
  function getFlashcardUserState(fid) {
    if (!AppState.flashcards[fid]) {
      AppState.flashcards[fid] = { ultimaResposta: null, ultimaVez: null, repeticoes: 0, acertos: 0, duvidas: 0, erros: 0, intervaloAtual: 0, proximaRevisao: null, historico: [] };
    }
    return AppState.flashcards[fid];
  }
  function getSimulado(id) {
    for (var i = 0; i < AppState.simulados.length; i++) if (AppState.simulados[i].id === id) return AppState.simulados[i];
    return null;
  }

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
  function getModule(modId) { for (var i = 0; i < MODULES.length; i++) if (MODULES[i].id === modId) return MODULES[i]; return null; }
  function getLessonByModuleId(modId) { return LESSONS[modId] || null; }
  function getLessonById(lessonId) { for (var k in LESSONS) if (LESSONS.hasOwnProperty(k) && LESSONS[k].id === lessonId) return LESSONS[k]; return null; }
  function getDiagnosticByModuleId(modId) { return DIAGNOSTICS[modId] || null; }
  function getQuestion(qid) { for (var i = 0; i < QUESTIONS.length; i++) if (QUESTIONS[i].id === qid) return QUESTIONS[i]; return null; }
  function getFlashcard(fid) { for (var i = 0; i < FLASHCARDS.length; i++) if (FLASHCARDS[i].id === fid) return FLASHCARDS[i]; return null; }
  function formatDate(iso) { if (!iso) return '—'; try { return new Date(iso).toLocaleString('pt-BR'); } catch (e) { return iso; } }
  function formatDateShort(iso) { if (!iso) return '—'; try { return new Date(iso).toLocaleDateString('pt-BR'); } catch (e) { return iso; } }
  function isObjective(item) { return item.tipo === 'multipla_escolha' || item.tipo === 'verdadeiro_falso' || item.tipo === 'situacao'; }
  function difficultyLabel(d) { return DIFFICULTY_LABELS[d] || ('Nível ' + d); }
  function typeLabel(t) { return t === 'REAL' ? 'Real' : 'Didática'; }
  function typeBadgeClass(t) { return t === 'REAL' ? 'badge-real' : 'badge-did'; }
  function qRealCount() { var n = 0; for (var i = 0; i < QUESTIONS.length; i++) if (QUESTIONS[i].tipo === 'REAL') n++; return n; }
  function qDidCount()  { var n = 0; for (var i = 0; i < QUESTIONS.length; i++) if (QUESTIONS[i].tipo === 'DIDATICA') n++; return n; }
  function fcByModule(modId) { var arr = []; for (var i = 0; i < FLASHCARDS.length; i++) if (FLASHCARDS[i].moduloId === modId) arr.push(FLASHCARDS[i]); return arr; }
  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function addDaysIso(days) { var d = new Date(); d.setDate(d.getDate() + days); return d.toISOString(); }
  function isDue(iso) { if (!iso) return false; var t = new Date(iso).getTime(); return isFinite(t) && t <= Date.now(); }
  function isToday(iso) { if (!iso) return false; var d = new Date(iso); var now = new Date(); return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate(); }

  function getDueQuestions() { var out = []; for (var i = 0; i < QUESTIONS.length; i++) { var qs = AppState.questions[QUESTIONS[i].id]; if (!qs || !qs.proximaRevisao) continue; if (isDue(qs.proximaRevisao)) out.push(QUESTIONS[i]); } return out; }
  function getTodayQuestions() { var out = []; for (var i = 0; i < QUESTIONS.length; i++) { var qs = AppState.questions[QUESTIONS[i].id]; if (!qs || !qs.proximaRevisao) continue; if (!isDue(qs.proximaRevisao) && isToday(qs.proximaRevisao)) out.push(QUESTIONS[i]); } return out; }
  function getFutureQuestions() { var out = []; for (var i = 0; i < QUESTIONS.length; i++) { var qs = AppState.questions[QUESTIONS[i].id]; if (!qs || !qs.proximaRevisao) continue; if (!isDue(qs.proximaRevisao) && !isToday(qs.proximaRevisao)) out.push({ q: QUESTIONS[i], iso: qs.proximaRevisao }); } out.sort(function (a, b) { return new Date(a.iso) - new Date(b.iso); }); return out; }
  function getDueFlashcards() { var out = []; for (var i = 0; i < FLASHCARDS.length; i++) { var fs = AppState.flashcards[FLASHCARDS[i].id]; if (!fs || !fs.proximaRevisao) continue; if (isDue(fs.proximaRevisao)) out.push(FLASHCARDS[i]); } return out; }
  function getTodayFlashcards() { var out = []; for (var i = 0; i < FLASHCARDS.length; i++) { var fs = AppState.flashcards[FLASHCARDS[i].id]; if (!fs || !fs.proximaRevisao) continue; if (!isDue(fs.proximaRevisao) && isToday(fs.proximaRevisao)) out.push(FLASHCARDS[i]); } return out; }
  function getFutureFlashcards() { var out = []; for (var i = 0; i < FLASHCARDS.length; i++) { var fs = AppState.flashcards[FLASHCARDS[i].id]; if (!fs || !fs.proximaRevisao) continue; if (!isDue(fs.proximaRevisao) && !isToday(fs.proximaRevisao)) out.push({ fc: FLASHCARDS[i], iso: fs.proximaRevisao }); } out.sort(function (a, b) { return new Date(a.iso) - new Date(b.iso); }); return out; }
  function getErrorQuestions() { var out = []; for (var i = 0; i < QUESTIONS.length; i++) { var qs = AppState.questions[QUESTIONS[i].id]; if (!qs) continue; if (qs.erros > 0 && qs.ultimaCorreta !== true) out.push(QUESTIONS[i]); } return out; }
  function countDueAll() { return getDueQuestions().length + getDueFlashcards().length; }
  function countErrorsAll() { return getErrorQuestions().length; }

  function computeDiagnosticResult(moduleId, answers) {
    var diag = getDiagnosticByModuleId(moduleId);
    if (!diag) return null;
    var bySubtopic = {}, totalPontos = 0, totalSinais = 0;
    for (var i = 0; i < diag.itens.length; i++) {
      var item = diag.itens[i];
      var sub = item.subtopico;
      if (!bySubtopic[sub]) bySubtopic[sub] = { acertos: 0, erros: 0, sabia: 0, nao_sabia: 0, total: 0 };
      var resp = answers[item.id];
      bySubtopic[sub].total += 1;
      if (isObjective(item)) {
        if (resp === item.gabarito) { bySubtopic[sub].acertos += 1; totalPontos += 1; } else bySubtopic[sub].erros += 1;
        totalSinais += 1;
      } else if (item.tipo === 'autoavaliacao') {
        if (resp === 'sabia') { bySubtopic[sub].sabia += 1; totalPontos += 1; } else if (resp === 'nao_sabia') bySubtopic[sub].nao_sabia += 1;
        totalSinais += 1;
      }
    }
    var result = { bySubtopic: {} };
    for (var subName in bySubtopic) {
      if (!bySubtopic.hasOwnProperty(subName)) continue;
      var s = bySubtopic[subName];
      var positivos = s.acertos + s.sabia, negativos = s.erros + s.nao_sabia;
      var status;
      if (s.erros === 0 && s.nao_sabia === 0 && positivos >= 1) status = 'conhecido';
      else if (positivos === 0 && negativos >= 1) status = 'desconhecido';
      else status = 'duvida';
      var rec;
      if (status === 'conhecido') rec = 'Você demonstra bom domínio neste subtópico. Siga para a aula (revisão) e mantenha revisões periódicas.';
      else if (status === 'duvida') rec = 'Há base, mas o domínio é parcial. Estude a aula com atenção, foque nos exemplos e nas comparações, e refaça este diagnóstico depois de revisar.';
      else rec = 'Trate este subtópico como prioridade. Estude a aula desde o início, sem pular a explicação simples. Refaça o diagnóstico em seguida.';
      result.bySubtopic[subName] = { status: status, acertos: s.acertos, erros: s.erros, sabia: s.sabia, nao_sabia: s.nao_sabia, total: s.total, recommendation: rec };
    }
    var dominio = 0;
    if (totalSinais > 0) {
      dominio = totalPontos / totalSinais;
      if (negativosNoTotal(bySubtopic) > 0) dominio = dominio * 0.9;
      dominio = Math.max(0, Math.min(1, dominio));
    }
    result.dominioEstimado = Math.round(dominio * 100) / 100;
    result.completedAt = new Date().toISOString();
    return result;
  }
  function negativosNoTotal(bySubtopic) { var n = 0; for (var k in bySubtopic) if (bySubtopic.hasOwnProperty(k)) n += bySubtopic[k].erros + bySubtopic[k].nao_sabia; return n; }

  /* ---------- Filtros de Questões ---------- */
  function filterQuestions() {
    return QUESTIONS.filter(function (q) {
      if (questionFilter.area !== 'todas' && q.area !== questionFilter.area) return false;
      if (questionFilter.moduloId !== 'todos' && q.moduloId !== questionFilter.moduloId) return false;
      if (questionFilter.dificuldade !== 'todas' && q.dificuldade !== Number(questionFilter.dificuldade)) return false;
      if (questionFilter.tipo !== 'TODAS' && q.tipo !== questionFilter.tipo) return false;
      if (questionFilter.status && questionFilter.status !== 'todas') {
        var qs = AppState.questions[q.id];
        var tentativas = qs ? qs.tentativas : 0;
        if (questionFilter.status === 'nao_respondidas' && tentativas > 0) return false;
        if (questionFilter.status === 'respondidas' && tentativas === 0) return false;
        if (questionFilter.status === 'acertos' && (!qs || qs.ultimaCorreta !== true)) return false;
        if (questionFilter.status === 'erros' && (!qs || qs.ultimaCorreta !== false)) return false;
      }
      return true;
    });
  }
  function countUnanswered(qsArr) {
    var n = 0;
    for (var i = 0; i < qsArr.length; i++) {
      var s = AppState.questions[qsArr[i].id];
      if (!s || s.tentativas === 0) n++;
    }
    return n;
  }
  function startQuestionSession(ids, modo) {
    var list;
    if (ids && ids.length) list = ids.map(getQuestion).filter(Boolean);
    else list = filterQuestions();
    if (list.length === 0) { window.alert('Nenhuma questão disponível para esta sessão.'); return; }
    var idsArr = shuffleArray(list.map(function (q) { return q.id; }));
    questionRunning = { ids: idsArr, index: 0, respostas: {}, revealed: {}, startedAt: new Date().toISOString(), modo: modo || 'livre' };
    navigate('questao-run');
  }
  function commitQuestionAnswer(qid, altId) {
    var q = getQuestion(qid); if (!q) return;
    var qs = getQuestionUserState(qid);
    var correta = altId === q.gabarito;
    qs.tentativas += 1;
    if (correta) qs.acertos += 1; else qs.erros += 1;
    qs.ultimaResposta = altId; qs.ultimaCorreta = correta; qs.ultimaTentativa = new Date().toISOString();
    qs.status = correta ? 'acerto' : 'erro';
    qs.historico.push({ data: qs.ultimaTentativa, resposta: altId, correta: correta });
    if (qs.historico.length > 30) qs.historico = qs.historico.slice(-30);
    if (correta) {
      if (qs.intervaloAtual < 0) qs.intervaloAtual = 0;
      else if (qs.intervaloAtual < Q_INTERVALS.length - 1) qs.intervaloAtual += 1;
      qs.proximaRevisao = addDaysIso(Q_INTERVALS[qs.intervaloAtual]);
    } else { qs.intervaloAtual = 0; qs.proximaRevisao = addDaysIso(Q_INTERVALS[0]); }
    AppState.stats.questoesRespondidas += 1;
    if (correta) AppState.stats.acertos += 1; else AppState.stats.erros += 1;
    var st = getModuleUserState(q.moduloId);
    if (st.status === 'nao_iniciado') st.status = 'em_estudo';
    st.ultimaAtividade = new Date().toISOString();
    saveState();
  }
  function answerQuestion(altId) {
    if (!questionRunning) return;
    var qid = questionRunning.ids[questionRunning.index];
    if (Object.prototype.hasOwnProperty.call(questionRunning.respostas, qid)) return;
    questionRunning.respostas[qid] = altId;
    questionRunning.revealed[qid] = true;
    commitQuestionAnswer(qid, altId);
    render(); renderNavBadges();
  }
  function nextQuestion() { if (questionRunning && questionRunning.index < questionRunning.ids.length - 1) { questionRunning.index += 1; render(); var main = document.getElementById('main'); if (main) main.scrollTop = 0; } }
  function prevQuestion() { if (questionRunning && questionRunning.index > 0) { questionRunning.index -= 1; render(); var main = document.getElementById('main'); if (main) main.scrollTop = 0; } }
  function cancelQuestionSession() { if (!window.confirm('Cancelar a sessão? As respostas já registradas serão mantidas no histórico.')) return; questionRunning = null; navigate('questoes'); }
  function finishQuestionSession() { if (!questionRunning) return; var sess = questionRunning; questionRunning = null; window.__lastSession = sess; navigate('questao-result'); }

  function startFlashcardSession(ids, modo) {
    if (!ids || ids.length === 0) { window.alert('Nenhum flashcard para estudar com esses filtros.'); return; }
    flashcardRunning = { ids: shuffleArray(ids), index: 0, respostas: {}, revelado: false, startedAt: new Date().toISOString(), modo: modo || 'livre' };
    navigate('flashcard-run');
  }
  function revealFlashcard() { if (!flashcardRunning) return; flashcardRunning.revelado = true; render(); }
  function answerFlashcard(level) {
    if (!flashcardRunning) return;
    var fid = flashcardRunning.ids[flashcardRunning.index];
    if (Object.prototype.hasOwnProperty.call(flashcardRunning.respostas, fid)) return;
    flashcardRunning.respostas[fid] = level;
    var fs = getFlashcardUserState(fid);
    fs.ultimaResposta = level; fs.ultimaVez = new Date().toISOString();
    if (level === 'sabia') { fs.acertos += 1; fs.repeticoes += 1; if (fs.intervaloAtual < FC_INTERVALS.length - 1) fs.intervaloAtual += 1; }
    else if (level === 'duvida') fs.duvidas += 1;
    else { fs.erros += 1; fs.intervaloAtual = 0; }
    fs.proximaRevisao = addDaysIso(FC_INTERVALS[fs.intervaloAtual] || 0);
    fs.historico.push({ data: fs.ultimaVez, resposta: level });
    if (fs.historico.length > 40) fs.historico = fs.historico.slice(-40);
    AppState.stats.flashcardsEstudados += 1;
    var m = getModule(getFlashcard(fid).moduloId);
    if (m) { var ms = getModuleUserState(m.id); if (ms.status === 'nao_iniciado') ms.status = 'em_estudo'; ms.ultimaAtividade = new Date().toISOString(); }
    saveState(); nextFlashcardAuto();
  }
  function nextFlashcardAuto() {
    if (!flashcardRunning) return;
    if (flashcardRunning.index < flashcardRunning.ids.length - 1) {
      flashcardRunning.index += 1; flashcardRunning.revelado = false;
      render(); var main = document.getElementById('main'); if (main) main.scrollTop = 0;
    } else {
      var sess = flashcardRunning; flashcardRunning = null;
      window.__lastFlashSession = sess; navigate('flashcard-result');
    }
  }
  function cancelFlashcardSession() { if (!window.confirm('Cancelar a sessão de flashcards? As respostas já registradas serão mantidas.')) return; flashcardRunning = null; navigate('flashcards'); }

  /* ---------- Filtros de Simulados ---------- */
  function filterForSimulado() {
    var cfg = simuladoConfig;
    return QUESTIONS.filter(function (q) {
      if (cfg.area !== 'todas' && q.area !== cfg.area) return false;
      if (cfg.moduloId !== 'todos' && q.moduloId !== cfg.moduloId) return false;
      if (cfg.dificuldade !== 'todas' && q.dificuldade !== Number(cfg.dificuldade)) return false;
      if (cfg.tipo !== 'TODAS' && q.tipo !== cfg.tipo) return false;
      if (cfg.status && cfg.status !== 'todas') {
        var qs = AppState.questions[q.id];
        var tentativas = qs ? qs.tentativas : 0;
        if (cfg.status === 'nao_respondidas' && tentativas > 0) return false;
        if (cfg.status === 'respondidas' && tentativas === 0) return false;
        if (cfg.status === 'acertos' && (!qs || qs.ultimaCorreta !== true)) return false;
        if (cfg.status === 'erros' && (!qs || qs.ultimaCorreta !== false)) return false;
      }
      return true;
    });
  }
  function quantidadeAlvo() {
    if (simuladoConfig.quantidade === 'custom') {
      var n = parseInt(simuladoConfig.customQty, 10);
      if (!isFinite(n) || n < 1) return 0;
      return Math.min(n, 200);
    }
    return simuladoConfig.quantidade;
  }
  function startSimulado(modoForcado) {
    var modo = modoForcado || simuladoConfig.modo;
    var pool;
    if (modo === 'PROVA_CONCURSO') {
      pool = filterForSimulado().filter(function (q) { return q.tipo === 'REAL'; });
      if (pool.length === 0) {
        if (!window.confirm('Não há questões REAIS no banco atual.\n\nDeseja rodar um Simulado personalizado no lugar?')) return;
        simuladoConfig.modo = 'SIMULADO'; simuladoConfig.tipo = 'TODAS'; pool = filterForSimulado();
      }
    } else {
      pool = filterForSimulado();
      if (pool.length === 0) {
        if (!window.confirm('Nenhuma questão corresponde aos filtros atuais.\n\nDeseja limpar os filtros e usar todas as questões?')) return;
        simuladoConfig.area = 'todas'; simuladoConfig.moduloId = 'todos';
        simuladoConfig.dificuldade = 'todas'; simuladoConfig.tipo = 'TODAS'; simuladoConfig.status = 'todas';
        pool = filterForSimulado();
      }
    }
    if (pool.length === 0) { window.alert('Ainda não há questões disponíveis. Importe questões no Banco de Questões.'); return; }
    var qtd = quantidadeAlvo();
    if (qtd === 0) { simuladoConfig.quantidade = 10; simuladoConfig.customQty = ''; qtd = 10; }
    var ids = shuffleArray(pool.map(function (q) { return q.id; })).slice(0, Math.min(qtd, pool.length));
    if (ids.length === 0) { window.alert('Não há questões suficientes.'); return; }
    simuladoRunning = { ids: ids, index: 0, respostas: {}, startedAt: new Date().toISOString(), config: { modo: (modo === 'PROVA_CONCURSO' && simuladoConfig.modo === 'PROVA_CONCURSO') ? 'PROVA_CONCURSO' : 'SIMULADO', quantidade: qtd, area: simuladoConfig.area, moduloId: simuladoConfig.moduloId, dificuldade: simuladoConfig.dificuldade, tipo: simuladoConfig.tipo, status: simuladoConfig.status } };
    navigate('simulado-run');
  }
  function answerSimulado(altId) { if (!simuladoRunning) return; var qid = simuladoRunning.ids[simuladoRunning.index]; simuladoRunning.respostas[qid] = altId; render(); }
  function clearSimuladoAnswer() { if (!simuladoRunning) return; var qid = simuladoRunning.ids[simuladoRunning.index]; delete simuladoRunning.respostas[qid]; render(); }
  function nextSimulado() { if (simuladoRunning && simuladoRunning.index < simuladoRunning.ids.length - 1) { simuladoRunning.index += 1; render(); var m = document.getElementById('main'); if (m) m.scrollTop = 0; } }
  function prevSimulado() { if (simuladoRunning && simuladoRunning.index > 0) { simuladoRunning.index -= 1; render(); var m = document.getElementById('main'); if (m) m.scrollTop = 0; } }
  function gotoSimuladoIndex(i) { if (!simuladoRunning) return; var n = parseInt(i, 10); if (!isFinite(n) || n < 0 || n >= simuladoRunning.ids.length) return; simuladoRunning.index = n; render(); var main = document.getElementById('main'); if (main) main.scrollTop = 0; }
  function cancelSimulado() { if (!window.confirm('Cancelar o simulado? Nenhuma resposta será registrada.')) return; simuladoRunning = null; navigate('simulados'); }
  function finishSimulado() {
    if (!simuladoRunning) return;
    var total = simuladoRunning.ids.length, respondidas = 0;
    for (var i = 0; i < total; i++) if (simuladoRunning.respostas[simuladoRunning.ids[i]] != null) respondidas++;
    if (respondidas < total) {
      if (!window.confirm('Você respondeu ' + respondidas + ' de ' + total + ' questões.\n\nDeseja finalizar mesmo assim? As não respondidas serão consideradas em branco.')) return;
    }
    var ids = simuladoRunning.ids, respostas = simuladoRunning.respostas;
    var acertos = 0, porModulo = {}, porDificuldade = {}, porTipo = {};
    for (var j = 0; j < ids.length; j++) {
      var q = getQuestion(ids[j]); if (!q) continue;
      var resp = respostas[q.id], correta = resp === q.gabarito;
      if (correta) acertos++;
      if (resp != null) commitQuestionAnswer(q.id, resp);
      if (!porModulo[q.moduloId]) porModulo[q.moduloId] = { total: 0, acertos: 0, respondidas: 0 };
      porModulo[q.moduloId].total++; if (correta) porModulo[q.moduloId].acertos++; if (resp != null) porModulo[q.moduloId].respondidas++;
      var dl = difficultyLabel(q.dificuldade);
      if (!porDificuldade[dl]) porDificuldade[dl] = { total: 0, acertos: 0, respondidas: 0 };
      porDificuldade[dl].total++; if (correta) porDificuldade[dl].acertos++; if (resp != null) porDificuldade[dl].respondidas++;
      if (!porTipo[q.tipo]) porTipo[q.tipo] = { total: 0, acertos: 0, respondidas: 0 };
      porTipo[q.tipo].total++; if (correta) porTipo[q.tipo].acertos++; if (resp != null) porTipo[q.tipo].respondidas++;
    }
    var naoRespondidas = total - respondidas;
    var erros = respondidas - acertos;
    var pct = total > 0 ? Math.round((acertos / total) * 100) : 0;
    var sim = {
      id: 'SIM-' + Date.now().toString(36).toUpperCase(),
      tipo: simuladoRunning.config.modo,
      quantidade: total, respondidas: respondidas, naoRespondidas: naoRespondidas,
      filtros: { area: simuladoRunning.config.area, moduloId: simuladoRunning.config.moduloId, dificuldade: simuladoRunning.config.dificuldade, tipo: simuladoRunning.config.tipo, status: simuladoRunning.config.status },
      questoesIds: ids.slice(), respostas: Object.assign({}, respostas),
      iniciadoEm: simuladoRunning.startedAt, finalizadoEm: new Date().toISOString(),
      resultado: { acertos: acertos, erros: erros, naoRespondidas: naoRespondidas, respondidas: respondidas, percentual: pct, porModulo: porModulo, porDificuldade: porDificuldade, porTipo: porTipo }
    };
    AppState.simulados.push(sim);
    AppState.stats.simuladosRealizados = (AppState.stats.simuladosRealizados || 0) + 1;
    saveState(); currentSimuladoId = sim.id; simuladoRunning = null;
    navigate('simulado-result'); renderNavBadges();
  }
  function deleteSimulado(id) {
    if (!window.confirm('Excluir este simulado do histórico? Essa ação não pode ser desfeita.')) return;
    var arr = []; for (var i = 0; i < AppState.simulados.length; i++) if (AppState.simulados[i].id !== id) arr.push(AppState.simulados[i]);
    AppState.simulados = arr; saveState(); render();
  }
  function openSimuladoDetail(id) { if (!getSimulado(id)) return; currentSimuladoId = id; navigate('simulado-result'); }

  /* ============================================================
     NAVEGAÇÃO / RENDER BASE
  ============================================================ */
  var VALID_SCREENS = ['dashboard','modulos','modulo-detalhe','licao','diagnostico','diag-resultado','questoes','questao-run','questao-result','banco-questoes','flashcards','flashcard-run','flashcard-result','revisao','erros','simulados','simulado-run','simulado-result','estatisticas','configuracoes','sobre'];

  function navigate(screen, opts) {
    opts = opts || {};
    if (VALID_SCREENS.indexOf(screen) === -1) screen = 'dashboard';
    currentScreen = screen;
    if (screen === 'modulo-detalhe') currentModuleId = opts.moduleId || currentModuleId;
    if (screen === 'licao') {
      currentLessonId = opts.lessonId || currentLessonId;
      if (currentLessonId) { var lesson = getLessonById(currentLessonId); if (lesson) currentModuleId = lesson.moduloId; }
    }
    if (screen === 'diagnostico' || screen === 'diag-resultado') { if (opts.moduleId) currentModuleId = opts.moduleId; }
    AppState.lastScreen = screen; saveState();
    document.body.classList.remove('sidebar-open');
    professorAnswerOpen = null;
    render();
    var main = document.getElementById('main'); if (main) main.scrollTop = 0;
  }

  function applyTheme(theme) {
    var t = (theme === 'dark') ? 'dark' : 'light';
    document.body.classList.toggle('dark', t === 'dark');
    if (!AppState) return;
    if (!AppState.settings) AppState.settings = {};
    AppState.settings.theme = t;
  }
  function toggleTheme() {
    var atual = (AppState && AppState.settings && AppState.settings.theme) || 'light';
    applyTheme(atual === 'dark' ? 'light' : 'dark');
    saveState(); render();
  }

  function render() {
    renderSidebarActive(); renderMain(); renderNavBadges();
    var badge = document.getElementById('appVersionBadge'); if (badge) badge.textContent = 'v' + APP_VERSION;
    var brand = document.getElementById('brandName'); if (brand) brand.textContent = APP_NAME;
    var sub = document.getElementById('brandSubtitle'); if (sub) sub.textContent = APP_SUBTITLE;
    document.title = APP_NAME + ' v' + APP_VERSION + (APP_SUBTITLE ? ' — ' + APP_SUBTITLE : '');
  }
  function renderNavBadges() {
    var dueN = countDueAll(), errN = countErrorsAll();
    var bRev = document.getElementById('navBadgeRevisao'), bErr = document.getElementById('navBadgeErros');
    if (bRev) { if (dueN > 0) { bRev.textContent = dueN; bRev.style.display = 'inline-block'; } else bRev.style.display = 'none'; }
    if (bErr) { if (errN > 0) { bErr.textContent = errN; bErr.style.display = 'inline-block'; } else bErr.style.display = 'none'; }
  }
  function renderSidebarActive() {
    var items = document.querySelectorAll('.nav-item');
    for (var i = 0; i < items.length; i++) {
      var target = items[i].getAttribute('data-nav');
      var active = (target === currentScreen) ||
        (currentScreen === 'modulo-detalhe' && target === 'modulos') ||
        (currentScreen === 'licao' && target === 'modulos') ||
        (currentScreen === 'diagnostico' && target === 'modulos') ||
        (currentScreen === 'diag-resultado' && target === 'modulos') ||
        (currentScreen === 'questao-run' && target === 'questoes') ||
        (currentScreen === 'questao-result' && target === 'questoes') ||
        (currentScreen === 'flashcard-run' && target === 'flashcards') ||
        (currentScreen === 'flashcard-result' && target === 'flashcards') ||
        (currentScreen === 'simulado-run' && target === 'simulados') ||
        (currentScreen === 'simulado-result' && target === 'simulados');
      items[i].classList.toggle('active', active);
    }
  }
  function renderMain() {
    var main = document.getElementById('main'); if (!main) return;
    var html = '';
    switch (currentScreen) {
      case 'dashboard': html = renderDashboard(); break;
      case 'modulos': html = renderModules(); break;
      case 'modulo-detalhe': html = renderModuleDetail(); break;
      case 'licao': html = renderLesson(); break;
      case 'diagnostico': html = renderDiagnosticRunning(); break;
      case 'diag-resultado': html = renderDiagnosticResult(); break;
      case 'questoes': html = renderQuestions(); break;
      case 'questao-run': html = renderQuestionRun(); break;
      case 'questao-result': html = renderQuestionResult(); break;
      case 'banco-questoes': html = renderQuestionBank(); break;
      case 'flashcards': html = renderFlashcards(); break;
      case 'flashcard-run': html = renderFlashcardRun(); break;
      case 'flashcard-result': html = renderFlashcardResult(); break;
      case 'revisao': html = renderRevision(); break;
      case 'erros': html = renderErrors(); break;
      case 'simulados': html = renderSimulados(); break;
      case 'simulado-run': html = renderSimuladoRun(); break;
      case 'simulado-result': html = renderSimuladoResult(); break;
      case 'estatisticas': html = renderEstatisticas(); break;
      case 'configuracoes': html = renderSettings(); break;
      case 'sobre': html = renderAbout(); break;
      default: html = renderDashboard();
    }
    main.innerHTML = html;
  }

  /* ============================================================
     DASHBOARD
  ============================================================ */
  function renderDashboard() {
    var stats = AppState.stats;
    var taxa = stats.questoesRespondidas > 0 ? Math.round((stats.acertos / stats.questoesRespondidas) * 100) : 0;
    var qReal = qRealCount(), qDid = qDidCount();
    var dueN = countDueAll(), errN = countErrorsAll();
    var simCount = AppState.simulados.length;
    var bestSim = null;
    for (var s = 0; s < AppState.simulados.length; s++) { var r = AppState.simulados[s].resultado; if (bestSim == null || r.percentual > bestSim) bestSim = r.percentual; }

    var sugestoes = [];
    var dueQ = getDueQuestions(), dueF = getDueFlashcards();
    if (dueQ.length > 0 || dueF.length > 0) sugestoes.push({ tipo: 'revisao', titulo: 'Revisão pendente', descricao: dueQ.length + ' questão(ões) e ' + dueF.length + ' flashcard(s) para revisar hoje.' });
    if (errN > 0) sugestoes.push({ tipo: 'erros', titulo: 'Erros em aberto', descricao: errN + ' questão(ões) com erro aguardando revisão dedicada.' });
    for (var os = 0; os < PRIORITY_ORDER.length && sugestoes.length < 4; os++) {
      for (var j = 0; j < MODULES.length && sugestoes.length < 4; j++) {
        var m = MODULES[j];
        if (m.prioridade !== PRIORITY_ORDER[os]) continue;
        if (!getDiagnosticByModuleId(m.id) && !getLessonByModuleId(m.id)) continue;
        if (isModuleConcluido(m.id)) continue;
        sugestoes.push({ tipo: 'modulo', modulo: m });
      }
    }

    var html = '';
    html += '<h1 class="page-title">Dashboard</h1>';
    html += '<p class="page-subtitle">Visão geral do seu progresso em ' + esc(APP_SUBTITLE || APP_NAME) + '. Dados salvos localmente no navegador.</p>';
    html += '<div class="cards-grid">';
    html += statCard('Questões respondidas', stats.questoesRespondidas, qReal + ' reais · ' + qDid + ' didáticas');
    html += statCard('Taxa de acerto', taxa + '%', stats.acertos + ' acertos / ' + stats.erros + ' erros');
    html += statCard('Simulados realizados', simCount, bestSim != null ? 'Melhor aproveitamento: ' + bestSim + '%' : 'Nenhum ainda');
    html += statCard('Revisões pendentes', dueN, dueN === 0 ? 'Nada vencido agora' : 'Vencidas ou para hoje');
    html += '</div>';
    html += '<div style="margin:6px 0 14px;display:flex;gap:8px;flex-wrap:wrap;">';
    html += '<button class="btn btn-primary" data-nav="estatisticas">📊 Ver estatísticas</button>';
    html += '</div>';
    html += '<h2 class="section-title">O que estudar hoje?</h2>';
    if (sugestoes.length === 0) {
      var totalConcluidos = 0;
      for (var mc = 0; mc < MODULES.length; mc++) if (isModuleConcluido(MODULES[mc].id)) totalConcluidos++;
      if (totalConcluidos === MODULES.length && MODULES.length > 0) html += '<div class="notice"><strong>🎉 Parabéns!</strong> Todos os ' + MODULES.length + ' módulos foram concluídos (aula lida + diagnóstico 100%). Mantenha as revisões e pratique simulados.</div>';
      else html += '<div class="notice"><strong>Sem sugestões ainda.</strong> Comece pela aba <strong>Módulos</strong>.</div>';
    } else {
      html += '<div class="module-list">';
      for (var sg_i = 0; sg_i < sugestoes.length; sg_i++) {
        var sg = sugestoes[sg_i];
        if (sg.tipo === 'revisao') {
          html += '<button class="module-card" data-nav="revisao"><span class="mod-id">REV</span><span class="mod-info"><span class="mod-title">🔁 ' + esc(sg.titulo) + '</span><span class="mod-area">' + esc(sg.descricao) + '</span></span><span class="mod-badges"><span class="badge-pill badge-rev">Revisar</span></span></button>';
        } else if (sg.tipo === 'erros') {
          html += '<button class="module-card" data-nav="erros"><span class="mod-id">ERR</span><span class="mod-info"><span class="mod-title">❌ ' + esc(sg.titulo) + '</span><span class="mod-area">' + esc(sg.descricao) + '</span></span><span class="mod-badges"><span class="badge-pill badge-err">Erros</span></span></button>';
        } else if (sg.modulo) { html += moduleCardHtml(sg.modulo); }
      }
      html += '</div>';
    }
    html += '<h2 class="section-title">Regra de conclusão</h2>';
    html += '<div class="notice"><strong>' + esc(APP_NAME) + ' v' + esc(APP_VERSION) + '.</strong> Um módulo é considerado <strong>concluído</strong> quando a <strong>aula está marcada como lida</strong> E o <strong>diagnóstico atinge 100% de domínio</strong>. Módulos concluídos saem automaticamente das sugestões acima.</div>';
    html += footerHtml();
    return html;
  }
  function statCard(label, value, hint) {
    return '<div class="stat-card"><div class="stat-label">' + esc(label) + '</div><div class="stat-value">' + esc(value) + '</div>' + (hint ? '<div class="stat-hint">' + esc(hint) + '</div>' : '') + '</div>';
  }
  function footerHtml() { return '<div class="app-footer"><span>' + esc(APP_NAME) + ' v' + esc(APP_VERSION) + '</span><span>Offline · dados salvos neste navegador</span></div>'; }
  function infoRow(key, value) { return '<div class="info-row"><span class="info-key">' + esc(key) + '</span><span class="info-val">' + esc(value) + '</span></div>'; }
  function statusLabel(s) { var map = { 'nao_iniciado': 'Não iniciado', 'em_estudo': 'Em estudo', 'concluido': 'Concluído' }; return map[s] || s || 'Não iniciado'; }

  /* ============================================================
     MODULES
  ============================================================ */
  function renderModules() {
    var areas = ['todas'].concat(Object.keys(AREA_LABELS));
    var pills = '';
    for (var i = 0; i < areas.length; i++) {
      var a = areas[i];
      var label = a === 'todas' ? 'Todos' : (AREA_LABELS[a] || a);
      var active = (moduleFilter === a) ? ' active' : '';
      pills += '<button class="filter-pill' + active + '" data-filter="' + esc(a) + '">' + esc(label) + '</button>';
    }
    var filtered = MODULES.filter(function (m) { return moduleFilter === 'todas' || m.area === moduleFilter; });
    var html = '';
    html += '<h1 class="page-title">Módulos</h1>';
    html += '<p class="page-subtitle">' + filtered.length + ' módulo(s) listado(s).</p>';
    html += '<div class="filters">' + pills + '</div>';
    if (filtered.length === 0) html += '<div class="notice">Nenhum módulo nesta área.</div>';
    else { html += '<div class="module-list">'; for (var j = 0; j < filtered.length; j++) html += moduleCardHtml(filtered[j]); html += '</div>'; }
    html += footerHtml();
    return html;
  }
  function moduleCardHtml(m) {
    var areaLabel = AREA_LABELS[m.area] || m.area;
    var pLabel = PRIORITY_LABELS[m.prioridade] || m.prioridade;
    var hasLesson = !!getLessonByModuleId(m.id);
    var hasDiag = !!getDiagnosticByModuleId(m.id);
    var qCount = 0; for (var i = 0; i < QUESTIONS.length; i++) if (QUESTIONS[i].moduloId === m.id) qCount++;
    var fcCount = fcByModule(m.id).length;
    var badges = '';
    if (isModuleConcluido(m.id)) badges += '<span class="badge-pill badge-ok">✓ Dominado</span>';
    if (hasLesson) badges += '<span class="badge-pill badge-aula">Aula</span>';
    if (hasDiag) badges += '<span class="badge-pill badge-diag">Diagnóstico</span>';
    if (qCount > 0) badges += '<span class="badge-pill badge-real">' + qCount + ' q.</span>';
    if (fcCount > 0) badges += '<span class="badge-pill badge-flash">' + fcCount + ' fc.</span>';
    return '<button class="module-card" data-action="open-module" data-module-id="' + esc(m.id) + '">' +
      '<span class="mod-id">' + esc(m.id) + '</span>' +
      '<span class="mod-info"><span class="mod-title">' + esc(m.titulo) + '</span><span class="mod-area">' + esc(areaLabel) + '</span></span>' +
      '<span class="mod-badges">' + badges + '<span class="mod-priority priority-' + esc(m.prioridade) + '">' + esc(pLabel) + '</span></span>' +
    '</button>';
  }

  /* ============================================================
     MODULE DETAIL
  ============================================================ */
  function renderModuleDetail() {
    var m = getModule(currentModuleId);
    if (!m) return '<h1 class="page-title">Módulo não encontrado</h1><button class="btn" data-nav="modulos">← Voltar</button>';
    var st = getModuleUserState(m.id);
    var areaLabel = AREA_LABELS[m.area] || m.area;
    var pLabel = PRIORITY_LABELS[m.prioridade] || m.prioridade;
    var lesson = getLessonByModuleId(m.id);
    var diag = getDiagnosticByModuleId(m.id);
    var lessonRead = lesson && (st.aulasLidas || []).indexOf(lesson.id) !== -1;
    var diagDone = !!st.diagnostico;
    var moduleQuestions = QUESTIONS.filter(function (q) { return q.moduloId === m.id; });
    var moduleFlashcards = fcByModule(m.id);
    var qDone = 0;
    for (var qi = 0; qi < moduleQuestions.length; qi++) { var qs = AppState.questions[moduleQuestions[qi].id]; if (qs && qs.tentativas > 0) qDone++; }
    var fcVistos = 0;
    for (var fi = 0; fi < moduleFlashcards.length; fi++) if (AppState.flashcards[moduleFlashcards[fi].id]) fcVistos++;
    var chips = '';
    for (var i = 0; i < m.subtopicos.length; i++) chips += '<span class="subtopic-chip">' + esc(m.subtopicos[i]) + '</span>';
    var concluido = isModuleConcluido(m.id);

    var html = '';
    html += '<button class="btn" data-nav="modulos" style="margin-bottom:16px;">← Voltar aos módulos</button>';
    html += '<h1 class="page-title">' + esc(m.id) + ' — ' + esc(m.titulo) + '</h1>';
    html += '<p class="page-subtitle">' + esc(areaLabel) + ' · Prioridade: ' + esc(pLabel) + '</p>';
    html += '<div class="info-list">';
    html += infoRow('Status', statusLabel(st.status));
    html += infoRow('Domínio estimado', Math.round((st.dominioEstimado || 0) * 100) + '%');
    html += infoRow('Última atividade', st.ultimaAtividade ? formatDate(st.ultimaAtividade) : '—');
    html += infoRow('Aulas lidas', (st.aulasLidas || []).length + (lesson ? ' / 1' : ' / 0'));
    if (diagDone) html += infoRow('Diagnóstico', 'Feito em ' + formatDate(st.diagnostico.completedAt));
    else if (diag) html += infoRow('Diagnóstico', 'Disponível');
    else html += infoRow('Diagnóstico', '—');
    html += infoRow('Questões', moduleQuestions.length + ' cadastrada(s) · ' + qDone + ' vista(s)');
    html += infoRow('Flashcards', moduleFlashcards.length + ' cartão(ões) · ' + fcVistos + ' visto(s)');
    if (concluido) html += '<div class="info-row" style="background:var(--success-soft);border-radius:6px;padding:10px 12px;margin-top:6px;border-bottom:none;"><span class="info-key" style="color:var(--success);font-weight:700;">✓ Módulo concluído</span><span class="info-val" style="color:var(--success);font-size:12px;">Aula lida + diagnóstico 100%</span></div>';
    html += '</div>';
    html += '<h2 class="section-title">Subtópicos</h2><div class="subtopic-list">' + chips + '</div>';
    html += '<h2 class="section-title">Conteúdo pedagógico</h2>';
    if (lesson) {
      html += '<div class="lesson-block"><h3><span class="lb-icon">📘</span> Aula: ' + esc(lesson.id) + '</h3>';
      html += '<p>' + esc(lesson.objetivo) + '</p>';
      html += '<div style="margin-top:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;">';
      html += '<button class="btn btn-primary" data-action="open-lesson" data-lesson-id="' + esc(lesson.id) + '">Estudar aula →</button>';
      html += lessonRead ? '<span class="lesson-read-indicator">✓ Lida</span>' : '<span class="lesson-read-indicator pending">Não lida</span>';
      html += '</div></div>';
    } else html += '<div class="notice"><strong>Aula ainda não cadastrada.</strong></div>';
    html += '<h2 class="section-title">Diagnóstico</h2>';
    if (diag) {
      html += '<div class="lesson-block" style="border-left:4px solid var(--purple);"><h3><span class="lb-icon">🧪</span> Diagnóstico ' + esc(diag.id) + '</h3>';
      html += '<p>' + diag.itens.length + ' itens.</p>';
      if (diagDone) {
        var resumo = summarizeResult(st.diagnostico.result || {});
        html += '<p style="margin-top:6px;font-size:13px;color:var(--text-muted);">Conhecidos: ' + resumo.conhecido + ' · Em dúvida: ' + resumo.duvida + ' · Desconhecidos: ' + resumo.desconhecido + '</p>';
        html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">';
        html += '<button class="btn btn-purple" data-action="open-diag-result" data-module-id="' + esc(m.id) + '">Ver resultado</button>';
        html += '<button class="btn" data-action="refazer-diag" data-module-id="' + esc(m.id) + '">Refazer</button></div>';
      } else html += '<div style="margin-top:12px;"><button class="btn btn-purple" data-action="start-diag" data-module-id="' + esc(m.id) + '">Fazer diagnóstico →</button></div>';
      html += '</div>';
    } else html += '<div class="notice"><strong>Diagnóstico ainda não cadastrado.</strong></div>';
    html += '<h2 class="section-title">Praticar</h2>';
    if (moduleQuestions.length > 0) {
      html += '<div class="lesson-block"><h3><span class="lb-icon">📝</span> Questões deste módulo</h3>';
      html += '<p>' + moduleQuestions.length + ' questão(ões) disponíveis.</p>';
      html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">';
      html += '<button class="btn btn-primary" data-action="questions-by-module" data-module-id="' + esc(m.id) + '">Praticar questões →</button>';
      html += '<button class="btn" data-action="simulado-by-module" data-module-id="' + esc(m.id) + '">Simulado deste módulo</button>';
      html += '</div></div>';
    } else html += '<div class="notice">Nenhuma questão cadastrada para este módulo ainda.</div>';
    if (moduleFlashcards.length > 0) {
      html += '<div class="lesson-block"><h3><span class="lb-icon">🗂️</span> Flashcards deste módulo</h3>';
      html += '<p>' + moduleFlashcards.length + ' cartão(ões) · ' + fcVistos + ' visto(s).</p>';
      html += '<div style="margin-top:12px;"><button class="btn btn-primary" data-action="flashcards-by-module" data-module-id="' + esc(m.id) + '">Estudar flashcards →</button></div></div>';
    }
    html += footerHtml();
    return html;
  }
  function summarizeResult(result) {
    var c = 0, d = 0, x = 0;
    var bs = result.bySubtopic || {};
    for (var k in bs) { if (!bs.hasOwnProperty(k)) continue; if (bs[k].status === 'conhecido') c++; else if (bs[k].status === 'duvida') d++; else if (bs[k].status === 'desconhecido') x++; }
    return { conhecido: c, duvida: d, desconhecido: x };
  }

  /* ============================================================
     LESSON
  ============================================================ */
  function renderLesson() {
    var lesson = currentLessonId ? getLessonById(currentLessonId) : null;
    if (!lesson) return '<h1 class="page-title">Aula não encontrada</h1><button class="btn" data-nav="modulos">← Voltar</button>';
    var m = getModule(lesson.moduloId);
    var st = m ? getModuleUserState(m.id) : null;
    var wasRead = st && (st.aulasLidas || []).indexOf(lesson.id) !== -1;
    var html = '';
    html += '<div class="lesson-toolbar"><div class="lt-left">';
    html += '<button class="btn" data-action="open-module" data-module-id="' + esc(lesson.moduloId) + '">← Módulo ' + esc(lesson.moduloId) + '</button>';
    html += '<button class="btn" data-nav="modulos">📚 Módulos</button>';
    html += '</div><div class="lt-right">';
    html += wasRead ? '<span class="lesson-read-indicator">✓ Aula lida</span>' : '<button class="btn btn-primary" data-action="mark-lesson-read" data-lesson-id="' + esc(lesson.id) + '">Marcar como lida</button>';
    html += '</div></div>';
    html += '<h1 class="page-title">' + esc(m ? m.titulo : lesson.moduloId) + '</h1>';
    html += '<p class="page-subtitle">Aula ' + esc(lesson.id) + ' · Módulo ' + esc(lesson.moduloId) + '</p>';
    html += '<div class="lesson-block block-objetivo"><h3><span class="lb-icon">🎯</span> Objetivo</h3><p>' + esc(lesson.objetivo) + '</p>';
    if (lesson.prerequisitos && lesson.prerequisitos.length) {
      var ptags = ''; for (var i = 0; i < lesson.prerequisitos.length; i++) ptags += '<span class="prereq-tag">' + esc(lesson.prerequisitos[i]) + '</span>';
      html += '<p style="margin-top:8px;font-size:13px;color:var(--text-muted);">Pré-requisitos:</p><div class="prereq-list">' + ptags + '</div>';
    }
    html += '</div>';
    html += '<div class="lesson-block"><h3><span class="lb-icon">📖</span> Introdução</h3><p>' + esc(lesson.introducao) + '</p></div>';
    html += '<div class="lesson-block"><h3><span class="lb-icon">💡</span> Explicação simples</h3><p>' + esc(lesson.explicacaoSimples) + '</p></div>';
    html += '<div class="lesson-block"><h3><span class="lb-icon">📐</span> Explicação técnica</h3><p>' + esc(lesson.explicacaoTecnica) + '</p></div>';
    if (lesson.exemplos && lesson.exemplos.length) {
      html += '<div class="lesson-block"><h3><span class="lb-icon">🔎</span> Exemplos</h3><ul>';
      for (var e = 0; e < lesson.exemplos.length; e++) html += '<li>' + esc(lesson.exemplos[e]) + '</li>';
      html += '</ul></div>';
    }
    if (lesson.comparacoes && lesson.comparacoes.length) {
      html += '<div class="lesson-block"><h3><span class="lb-icon">⚖️</span> Comparações</h3><table class="compare-table"><thead><tr><th>Conceito A</th><th>Conceito B</th><th>Diferença-chave</th></tr></thead><tbody>';
      for (var c = 0; c < lesson.comparacoes.length; c++) { var cp = lesson.comparacoes[c]; html += '<tr><td>' + esc(cp.termoA) + '</td><td>' + esc(cp.termoB) + '</td><td>' + esc(cp.diferenca) + '</td></tr>'; }
      html += '</tbody></table></div>';
    }
    if (lesson.aplicacaoEmConcurso) html += '<div class="lesson-block block-aplicacao"><h3><span class="lb-icon">⚖️</span> Aplicação em concurso</h3><p>' + esc(lesson.aplicacaoEmConcurso) + '</p></div>';
    if (lesson.pegadinhas && lesson.pegadinhas.length) {
      html += '<div class="lesson-block block-pegadinha"><h3><span class="lb-icon">⚠️</span> Pegadinhas de concurso</h3><ul>';
      for (var p = 0; p < lesson.pegadinhas.length; p++) html += '<li>' + esc(lesson.pegadinhas[p]) + '</li>';
      html += '</ul></div>';
    }
    if (lesson.errosComuns && lesson.errosComuns.length) {
      html += '<div class="lesson-block block-erros"><h3><span class="lb-icon">🚫</span> Erros comuns</h3><ul>';
      for (var er = 0; er < lesson.errosComuns.length; er++) html += '<li>' + esc(lesson.errosComuns[er]) + '</li>';
      html += '</ul></div>';
    }
    if (lesson.resumo && lesson.resumo.length) {
      html += '<div class="lesson-block block-resumo"><h3><span class="lb-icon">✅</span> Resumo</h3><ul>';
      for (var r = 0; r < lesson.resumo.length; r++) html += '<li>' + esc(lesson.resumo[r]) + '</li>';
      html += '</ul></div>';
    }
    html += renderProfessorBlock(lesson);
    html += footerHtml();
    return html;
  }
  function renderProfessorBlock(lesson) {
    var mp = lesson.modoProfessor || {};
    var actions = [
      { key: 'explicarMaisSimples', label: 'Explique de forma mais simples' },
      { key: 'outroExemplo', label: 'Mostre outro exemplo' },
      { key: 'compararConceitos', label: 'Compare os conceitos' },
      { key: 'mostrarPegadinha', label: 'Mostre uma pegadinha' },
      { key: 'comoApareceEmConcurso', label: 'Como aparece em concurso' },
      { key: 'fazerPergunta', label: 'Faça uma pergunta sobre isso' }
    ];
    var html = '<div class="lesson-block"><h3><span class="lb-icon">🧑‍🏫</span> Modo professor (conteúdo programado)</h3>';
    html += '<p style="font-size:13px;color:var(--text-muted);">Escolha uma das ações abaixo. Este app não usa IA externa.</p>';
    html += '<div class="professor-actions">';
    for (var i = 0; i < actions.length; i++) {
      var a = actions[i]; var disabled = !mp[a.key];
      html += '<button class="btn btn-ghost" data-action="professor-answer" data-lesson-id="' + esc(lesson.id) + '" data-key="' + esc(a.key) + '"' + (disabled ? ' disabled' : '') + '>' + esc(a.label) + '</button>';
    }
    html += '</div>';
    if (professorAnswerOpen && professorAnswerOpen.lessonId === lesson.id) {
      var key = professorAnswerOpen.key, content = '';
      if (key === 'fazerPergunta' && mp.fazerPergunta) content = 'Pergunta: ' + mp.fazerPergunta.pergunta + '\n\nResposta: ' + mp.fazerPergunta.resposta;
      else content = mp[key] || '';
      html += '<div class="professor-answer"><strong>Resposta programada</strong>' + esc(content) + '</div>';
    }
    html += '</div>';
    return html;
  }

  /* ============================================================
     DIAGNOSTIC
  ============================================================ */
  function renderDiagnosticRunning() {
    var moduleId = diagRunning.moduleId;
    var diag = getDiagnosticByModuleId(moduleId);
    if (!diag) return '<h1 class="page-title">Diagnóstico não encontrado</h1><button class="btn" data-nav="modulos">← Voltar</button>';
    var m = getModule(moduleId);
    var idx = diagRunning.itemIndex, total = diag.itens.length;
    if (idx < 0) idx = 0; if (idx >= total) idx = total - 1;
    var item = diag.itens[idx];
    var answered = Object.prototype.hasOwnProperty.call(diagRunning.answers, item.id);
    var userAnswer = diagRunning.answers[item.id];
    var percent = Math.round((idx / total) * 100);
    var html = '';
    html += '<div class="diag-progress"><div class="diag-progress-bar"><div class="diag-progress-fill" style="width:' + percent + '%"></div></div><div class="diag-progress-label">Item ' + (idx + 1) + ' / ' + total + '</div></div>';
    html += '<h1 class="page-title">Diagnóstico — ' + esc(m ? m.titulo : moduleId) + '</h1>';
    html += '<p class="page-subtitle">Módulo ' + esc(moduleId) + ' · ' + esc(DIAG_TYPE_LABELS[item.tipo] || item.tipo) + '</p>';
    html += '<div class="diag-meta"><span class="tag">Subtópico: ' + esc(item.subtopico) + '</span><span class="tag">' + esc(DIAG_TYPE_LABELS[item.tipo] || item.tipo) + '</span></div>';
    html += '<div class="diag-question"><h2>' + esc(item.pergunta) + '</h2>';
    if (isObjective(item)) {
      html += '<div class="diag-options">';
      for (var a = 0; a < item.alternativas.length; a++) {
        var alt = item.alternativas[a]; var cls = 'diag-option';
        if (answered) { if (alt.id === item.gabarito) cls += ' correct'; else if (alt.id === userAnswer) cls += ' wrong'; }
        else if (alt.id === userAnswer) cls += ' selected';
        html += '<button class="' + cls + '" data-action="diag-answer" data-alt="' + esc(alt.id) + '"' + (answered ? ' disabled' : '') + '><span class="opt-letter">' + esc(alt.id) + '</span><span>' + esc(alt.texto) + '</span></button>';
      }
      html += '</div>';
      if (answered) { var acertou = userAnswer === item.gabarito; html += '<div class="diag-feedback ' + (acertou ? 'ok' : 'no') + '"><strong>' + (acertou ? '✓ Correto' : '✗ Incorreto') + '</strong>' + esc(item.explicacao) + '</div>'; }
    } else if (item.tipo === 'autoavaliacao') {
      html += '<p style="color:var(--text-muted);font-size:14px;margin-bottom:8px;">Marque com sinceridade.</p>';
      if (answered) html += '<div class="diag-feedback ' + (userAnswer === 'sabia' ? 'ok' : 'no') + '"><strong>' + (userAnswer === 'sabia' ? 'Você marcou: Eu sabia' : 'Você marcou: Eu não sabia') + '</strong>Gabarito conceitual: ' + esc(item.resposta) + '</div>';
      else html += '<div class="self-assess"><button class="btn btn-primary" data-action="diag-answer" data-alt="sabia">Eu sabia</button><button class="btn" data-action="diag-answer" data-alt="nao_sabia">Eu não sabia</button></div>';
    }
    html += '<div class="diag-actions"><div>';
    html += idx > 0 ? '<button class="btn" data-action="diag-prev">← Item anterior</button>' : '<button class="btn" data-action="diag-cancel">Cancelar</button>';
    html += '</div><div>';
    if (answered && idx < total - 1) html += '<button class="btn btn-primary" data-action="diag-next">Próximo →</button>';
    else if (answered && idx === total - 1) html += '<button class="btn btn-purple" data-action="diag-finish">Finalizar diagnóstico →</button>';
    html += '</div></div></div>';
    html += footerHtml();
    return html;
  }
  function renderDiagnosticResult() {
    var moduleId = currentModuleId;
    var m = getModule(moduleId);
    if (!m) return '<h1 class="page-title">Módulo não encontrado</h1><button class="btn" data-nav="modulos">← Voltar</button>';
    var st = getModuleUserState(moduleId);
    if (!st.diagnostico || !st.diagnostico.result) return '<h1 class="page-title">Nenhum diagnóstico registrado</h1><button class="btn btn-primary" data-action="start-diag" data-module-id="' + esc(moduleId) + '">Fazer diagnóstico</button>';
    var r = st.diagnostico.result, bs = r.bySubtopic || {};
    var subtopicos = [];
    for (var k in bs) if (bs.hasOwnProperty(k)) subtopicos.push(k);
    subtopicos.sort(function (a, b) { var order = { 'desconhecido': 0, 'duvida': 1, 'conhecido': 2 }; return (order[bs[a].status] || 9) - (order[bs[b].status] || 9); });
    var resumo = summarizeResult(r);
    var totalSub = subtopicos.length;
    var html = '';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px;">';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn" data-action="open-module" data-module-id="' + esc(moduleId) + '">← Módulo ' + esc(moduleId) + '</button><button class="btn" data-nav="modulos">📚 Módulos</button></div>';
    html += '<div><button class="btn btn-purple" data-action="refazer-diag" data-module-id="' + esc(moduleId) + '">Refazer diagnóstico</button></div></div>';
    html += '<h1 class="page-title">Resultado do diagnóstico</h1>';
    html += '<p class="page-subtitle">' + esc(m.id) + ' — ' + esc(m.titulo) + ' · Concluído em ' + esc(formatDate(r.completedAt)) + '</p>';
    html += '<div class="result-summary">';
    html += resultStat('Subtópicos avaliados', totalSub);
    html += resultStat('Conhecidos', resumo.conhecido);
    html += resultStat('Em dúvida', resumo.duvida);
    html += resultStat('Desconhecidos', resumo.desconhecido);
    html += resultStat('Domínio estimado', Math.round((r.dominioEstimado || 0) * 100) + '%');
    html += '</div>';
    html += '<h2 class="section-title">Análise por subtópico</h2>';
    html += '<p style="font-size:13px;color:var(--text-muted);margin-bottom:12px;">O status é calculado cruzando acertos, erros e autoavaliação.</p>';
    for (var i = 0; i < subtopicos.length; i++) {
      var sub = subtopicos[i], d = bs[sub];
      html += '<div class="subtopic-result status-' + esc(d.status) + '">';
      html += '<h3>' + esc(sub) + '<span class="status-badge status-' + esc(d.status) + '">' + esc(STATUS_LABELS[d.status]) + '</span></h3>';
      html += '<div class="signals"><span>Acertos: <strong>' + d.acertos + '</strong></span><span>Erros: <strong>' + d.erros + '</strong></span>';
      if (d.sabia > 0 || d.nao_sabia > 0) html += '<span>Autoavaliação — sabia: <strong>' + d.sabia + '</strong> / não sabia: <strong>' + d.nao_sabia + '</strong></span>';
      html += '</div><div class="recommendation">' + esc(d.recommendation) + '</div></div>';
    }
    html += '<h2 class="section-title">Próximos passos</h2><div class="notice">';
    if (resumo.desconhecido > 0) html += '<strong>Prioridade alta.</strong> Você tem ' + resumo.desconhecido + ' subtópico(s) desconhecido(s). Estude a aula desde o início e refaça o diagnóstico.';
    else if (resumo.duvida > 0) html += '<strong>Reforço recomendado.</strong> ' + resumo.duvida + ' subtópico(s) em dúvida. Releia a aula e refaça este diagnóstico.';
    else html += '<strong>Bom desempenho.</strong> Todos os subtópicos foram classificados como conhecidos.';
    if (isModuleConcluido(moduleId)) html += ' <strong>Este módulo está concluído</strong> (aula lida + diagnóstico 100%).';
    else if ((r.dominioEstimado || 0) >= 1 && getLessonByModuleId(moduleId) && !(st.aulasLidas || []).length) html += ' <strong>Falta marcar a aula como lida</strong> para o módulo ser concluído.';
    html += '</div>';
    html += '<div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;">';
    var lesson = getLessonByModuleId(moduleId);
    if (lesson) html += '<button class="btn btn-primary" data-action="open-lesson" data-lesson-id="' + esc(lesson.id) + '">Estudar aula →</button>';
    html += '<button class="btn" data-action="start-diag" data-module-id="' + esc(moduleId) + '">Refazer agora</button>';
    html += '</div>';
    html += footerHtml();
    return html;
  }
  function resultStat(label, value) { return '<div class="result-stat"><div class="rs-label">' + esc(label) + '</div><div class="rs-value">' + esc(value) + '</div></div>'; }

  /* ============================================================
     QUESTIONS
  ============================================================ */
  function renderQuestions() {
    var areas = ['todas'].concat(Object.keys(AREA_LABELS));
    var areaPills = '';
    for (var i = 0; i < areas.length; i++) {
      var a = areas[i]; var label = a === 'todas' ? 'Todas as áreas' : (AREA_LABELS[a] || a);
      var active = (questionFilter.area === a) ? ' active' : '';
      areaPills += '<button class="filter-pill' + active + '" data-qf-area="' + esc(a) + '">' + esc(label) + '</button>';
    }
    var moduleOptions = '<option value="todos">Todos os módulos</option>';
    for (var j = 0; j < MODULES.length; j++) {
      var mo = MODULES[j];
      var hasQ = QUESTIONS.some(function (q) { return q.moduloId === mo.id; });
      if (!hasQ && questionFilter.moduloId !== mo.id) continue;
      var sel = questionFilter.moduloId === mo.id ? ' selected' : '';
      moduleOptions += '<option value="' + esc(mo.id) + '"' + sel + '>' + esc(mo.id + ' — ' + mo.titulo) + '</option>';
    }
    var diffOptions = '';
    var diffs = [['todas','Todas as dificuldades'], ['1','Fácil'], ['2','Médio'], ['3','Difícil']];
    for (var d = 0; d < diffs.length; d++) { var sel2 = questionFilter.dificuldade === diffs[d][0] ? ' selected' : ''; diffOptions += '<option value="' + diffs[d][0] + '"' + sel2 + '>' + esc(diffs[d][1]) + '</option>'; }
    var tipoOptions = '';
    var tipos = [['TODAS','Todas'], ['DIDATICA','Somente didáticas'], ['REAL','Somente reais']];
    for (var t = 0; t < tipos.length; t++) { var sel3 = questionFilter.tipo === tipos[t][0] ? ' selected' : ''; tipoOptions += '<option value="' + tipos[t][0] + '"' + sel3 + '>' + esc(tipos[t][1]) + '</option>'; }
    var statusOptions = '';
    var statusList = [['todas','Todos os status'], ['nao_respondidas','Somente não respondidas'], ['respondidas','Somente já respondidas'], ['acertos','Somente acertos'], ['erros','Somente erros']];
    for (var s = 0; s < statusList.length; s++) { var sel4 = questionFilter.status === statusList[s][0] ? ' selected' : ''; statusOptions += '<option value="' + statusList[s][0] + '"' + sel4 + '>' + esc(statusList[s][1]) + '</option>'; }

    var filtered = filterQuestions();
    var total = QUESTIONS.length;
    var naoResp = countUnanswered(QUESTIONS);

    var html = '';
    html += '<h1 class="page-title">Questões</h1>';
    html += '<p class="page-subtitle">' + total + ' questão(ões) no banco · <strong>' + naoResp + '</strong> ainda não respondida(s) · <strong>' + (total - naoResp) + '</strong> já respondida(s).</p>';
    html += '<div class="type-banner"><span class="badge-pill badge-did">DIDÁTICA</span><span>Use os filtros abaixo para montar a sessão. O filtro <strong>Status</strong> permite focar apenas nas questões que você ainda não respondeu.</span></div>';
    html += '<h2 class="section-title">Filtros</h2>';
    html += '<div class="filters">' + areaPills + '</div>';
    html += '<div class="filter-row">';
    html += '<label>Módulo</label><select id="qFilterModulo">' + moduleOptions + '</select>';
    html += '<label>Dificuldade</label><select id="qFilterDificuldade">' + diffOptions + '</select>';
    html += '<label>Tipo</label><select id="qFilterTipo">' + tipoOptions + '</select>';
    html += '<label>Status</label><select id="qFilterStatus">' + statusOptions + '</select>';
    html += '</div>';
    html += '<div style="margin:14px 0;display:flex;gap:8px;flex-wrap:wrap;">';
    html += '<button class="btn btn-primary" data-action="start-question-session"' + (filtered.length === 0 ? ' disabled' : '') + '>▶ Iniciar sessão (' + filtered.length + ' questão(ões)' + (questionFilter.status === 'nao_respondidas' ? ' não respondida(s)' : '') + ')</button>';
    html += '<button class="btn" data-action="simulado-com-filtros" data-target="questoes"' + (filtered.length === 0 ? ' disabled' : '') + '>🎯 Gerar simulado com estes filtros</button>';
    html += '</div>';
    html += '<h2 class="section-title">Prévia das questões (' + filtered.length + ')</h2>';
    if (filtered.length === 0) {
      html += '<div class="notice">Nenhuma questão corresponde aos filtros escolhidos.';
      if (questionFilter.status === 'nao_respondidas' && naoResp === 0) html += ' <strong>Você já respondeu todas as questões do banco!</strong> Altere o status para "Todos os status" para revisar.';
      html += '</div>';
    } else {
      for (var p = 0; p < filtered.length; p++) {
        var q = filtered[p]; var qs = AppState.questions[q.id];
        var statusClass = 'qs-nova', statusText = 'Nova';
        if (qs && qs.tentativas > 0) { if (qs.status === 'acerto') { statusClass = 'qs-acerto'; statusText = 'Acerto · ' + qs.acertos + '/' + qs.tentativas; } else if (qs.status === 'erro') { statusClass = 'qs-erro'; statusText = 'Erro · ' + qs.acertos + '/' + qs.tentativas; } }
        var revInfo = ''; if (qs && qs.proximaRevisao) revInfo = ' · próxima revisão: ' + formatDateShort(qs.proximaRevisao);
        html += '<div class="question-preview">';
        html += '<div class="qp-header"><span class="qp-id">' + esc(q.id) + '</span>';
        html += '<span class="badge-pill ' + typeBadgeClass(q.tipo) + '">' + esc(typeLabel(q.tipo)) + '</span>';
        html += '<span class="badge-pill ' + (DIFFICULTY_CLASS[q.dificuldade] || '') + '">' + esc(difficultyLabel(q.dificuldade)) + '</span>';
        html += '<span class="qp-status ' + statusClass + '">' + esc(statusText) + '</span></div>';
        html += '<div class="qp-text">' + esc(q.enunciado) + '</div>';
        html += '<div class="qp-meta">' + esc(q.moduloId + ' · ' + (getModule(q.moduloId) ? getModule(q.moduloId).titulo : '') + ' · ' + q.subtema + revInfo) + '</div>';
        html += '</div>';
      }
    }
    html += footerHtml();
    return html;
  }
  function renderQuestionRun() {
    if (!questionRunning) return '<h1 class="page-title">Sessão não iniciada</h1><button class="btn btn-primary" data-nav="questoes">Ir para Questões</button>';
    var total = questionRunning.ids.length, idx = questionRunning.index;
    var qid = questionRunning.ids[idx]; var q = getQuestion(qid);
    if (!q) return '<h1 class="page-title">Questão não encontrada</h1><button class="btn" data-nav="questoes">← Questões</button>';
    var answered = Object.prototype.hasOwnProperty.call(questionRunning.respostas, qid);
    var userAnswer = questionRunning.respostas[qid];
    var percent = Math.round(((idx + (answered ? 1 : 0)) / total) * 100);
    var modoLabel = ''; if (questionRunning.modo === 'revisao') modoLabel = 'Revisão'; else if (questionRunning.modo === 'erros') modoLabel = 'Caderno de Erros';
    var html = '';
    html += '<div class="run-toolbar"><div class="rt-info">';
    if (modoLabel) html += '<span class="badge-pill badge-rev">' + esc(modoLabel) + '</span>';
    html += '<span>Sessão · Questão ' + (idx + 1) + ' de ' + total + '</span><span class="badge-pill ' + typeBadgeClass(q.tipo) + '">' + esc(typeLabel(q.tipo)) + '</span><span class="badge-pill ' + (DIFFICULTY_CLASS[q.dificuldade] || '') + '">' + esc(difficultyLabel(q.dificuldade)) + '</span></div>';
    html += '<button class="btn" data-action="cancel-question-session">Cancelar sessão</button></div>';
    html += '<div class="diag-progress"><div class="diag-progress-bar"><div class="diag-progress-fill" style="width:' + percent + '%"></div></div><div class="diag-progress-label">' + (idx + 1) + ' / ' + total + '</div></div>';
    html += '<div class="q-card">';
    html += '<div class="q-head"><span class="q-id">' + esc(q.id) + '</span>';
    html += '<span class="badge-pill ' + typeBadgeClass(q.tipo) + '">' + esc(typeLabel(q.tipo)) + '</span>';
    if (q.tipo === 'REAL') html += '<span style="font-size:12px;color:var(--text-muted);">' + esc((q.banca || '') + ' · ' + (q.orgao || '') + ' · ' + (q.ano || '')) + '</span>';
    else html += '<span style="font-size:12px;color:var(--text-muted);">' + esc(q.moduloId + ' · ' + q.subtema) + '</span>';
    html += '</div>';
    html += '<div class="q-statement">' + esc(q.enunciado) + '</div>';
    html += '<div class="q-options">';
    for (var a = 0; a < q.alternativas.length; a++) {
      var alt = q.alternativas[a]; var cls = 'q-option';
      if (answered) { if (alt.id === q.gabarito) cls += ' correct'; else if (alt.id === userAnswer) cls += ' wrong'; }
      else if (alt.id === userAnswer) cls += ' selected';
      html += '<button class="' + cls + '" data-action="answer-question" data-alt="' + esc(alt.id) + '"' + (answered ? ' disabled' : '') + '><span class="opt-letter">' + esc(alt.id) + '</span><span>' + esc(alt.texto) + '</span></button>';
    }
    html += '</div>';
    if (answered) {
      var acertou = userAnswer === q.gabarito;
      html += '<div class="q-feedback ' + (acertou ? 'ok' : 'no') + '"><strong>' + (acertou ? '✓ Você acertou' : '✗ Você errou') + '</strong>Resposta correta: <strong>' + esc(q.gabarito) + '</strong>. Sua resposta: <strong>' + esc(userAnswer) + '</strong>.';
      var fsInfo = AppState.questions[qid]; if (fsInfo && fsInfo.proximaRevisao) html += ' Próxima revisão: <strong>' + esc(formatDateShort(fsInfo.proximaRevisao)) + '</strong>.';
      html += '</div>';
      var ex = q.explicacao || {};
      html += '<div class="explain-block"><h4>Por que a correta está correta</h4><p>' + esc(ex.correta || '') + '</p></div>';
      html += '<div class="explain-block"><h4>Por que as demais estão erradas</h4>';
      var inc = ex.incorretas || {};
      for (var key in inc) { if (!inc.hasOwnProperty(key)) continue; html += '<div class="distractor"><span class="d-letter">' + esc(key) + '</span><span>' + esc(inc[key]) + '</span></div>'; }
      html += '</div>';
      html += '<div class="explain-block"><h4>Conceito cobrado</h4><p>' + esc(ex.conceitoCobrado || '') + '</p></div>';
      html += '<div class="explain-block"><h4>Pegadinha</h4><p>' + esc(ex.pegadinha || '') + '</p></div>';
      html += '<div class="explain-block"><h4>Como aparece em concurso</h4><p>' + esc(ex.comoApareceEmConcurso || '') + '</p></div>';
    }
    html += '<div class="q-actions"><div>';
    if (idx > 0) html += '<button class="btn" data-action="prev-question">← Questão anterior</button>';
    html += '</div><div>';
    if (answered && idx < total - 1) html += '<button class="btn btn-primary" data-action="next-question">Próxima →</button>';
    else if (answered && idx === total - 1) html += '<button class="btn btn-purple" data-action="finish-question-session">Finalizar sessão →</button>';
    html += '</div></div>';
    html += '</div>';
    html += footerHtml();
    return html;
  }
  function renderQuestionResult() {
    var sess = window.__lastSession;
    if (!sess) return '<h1 class="page-title">Nenhum resultado disponível</h1><button class="btn btn-primary" data-nav="questoes">Ir para Questões</button>';
    var ids = sess.ids, total = ids.length, acertos = 0, erros = 0;
    var porModulo = {}, porDificuldade = {}, porTipo = {};
    for (var i = 0; i < ids.length; i++) {
      var q = getQuestion(ids[i]); if (!q) continue;
      var resp = sess.respostas[ids[i]]; var acertou = resp === q.gabarito;
      if (acertou) acertos++; else erros++;
      if (!porModulo[q.moduloId]) porModulo[q.moduloId] = { total: 0, acertos: 0 };
      porModulo[q.moduloId].total++; if (acertou) porModulo[q.moduloId].acertos++;
      var dl = difficultyLabel(q.dificuldade);
      if (!porDificuldade[dl]) porDificuldade[dl] = { total: 0, acertos: 0 };
      porDificuldade[dl].total++; if (acertou) porDificuldade[dl].acertos++;
      if (!porTipo[q.tipo]) porTipo[q.tipo] = { total: 0, acertos: 0 };
      porTipo[q.tipo].total++; if (acertou) porTipo[q.tipo].acertos++;
    }
    var pct = total > 0 ? Math.round((acertos / total) * 100) : 0;
    var modoLabel = ''; if (sess.modo === 'revisao') modoLabel = 'Revisão'; else if (sess.modo === 'erros') modoLabel = 'Caderno de Erros';
    var html = '';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px;"><div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn" data-nav="questoes">← Questões</button>';
    if (modoLabel === 'Revisão') html += '<button class="btn" data-nav="revisao">🔁 Revisão</button>';
    if (modoLabel === 'Caderno de Erros') html += '<button class="btn" data-nav="erros">❌ Meus Erros</button>';
    html += '</div></div>';
    html += '<h1 class="page-title">Resultado da sessão' + (modoLabel ? ' — ' + esc(modoLabel) : '') + '</h1>';
    html += '<p class="page-subtitle">Sessão iniciada em ' + esc(formatDate(sess.startedAt)) + '</p>';
    html += '<div class="result-summary">';
    html += resultStat('Questões', total);
    html += resultStat('Acertos', acertos);
    html += resultStat('Erros', erros);
    html += resultStat('Aproveitamento', pct + '%');
    html += '</div>';
    html += '<h2 class="section-title">Desempenho por módulo</h2>' + renderBreakdown(porModulo, function (k) { var m = getModule(k); return k + (m ? ' — ' + m.titulo : ''); });
    html += '<h2 class="section-title">Desempenho por dificuldade</h2>' + renderBreakdown(porDificuldade, function (k) { return k; });
    html += '<h2 class="section-title">Desempenho por tipo de questão</h2>' + renderBreakdown(porTipo, function (k) { return typeLabel(k); });
    html += '<h2 class="section-title">Detalhe por questão</h2>';
    for (var j = 0; j < ids.length; j++) {
      var qq = getQuestion(ids[j]); if (!qq) continue;
      var rr = sess.respostas[ids[j]]; var ok = rr === qq.gabarito;
      html += '<div class="question-preview"><div class="qp-header"><span class="qp-id">' + esc(qq.id) + '</span>';
      html += '<span class="badge-pill ' + typeBadgeClass(qq.tipo) + '">' + esc(typeLabel(qq.tipo)) + '</span>';
      html += '<span class="qp-status ' + (ok ? 'qs-acerto' : 'qs-erro') + '">' + (ok ? '✓ Acerto' : '✗ Erro') + '</span></div>';
      html += '<div class="qp-text">' + esc(qq.enunciado) + '</div>';
      html += '<div class="qp-meta">Sua resposta: <strong>' + esc(rr || '—') + '</strong> · Gabarito: <strong>' + esc(qq.gabarito) + '</strong></div></div>';
    }
    html += '<div style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-primary" data-nav="questoes">Nova sessão →</button></div>';
    html += footerHtml();
    return html;
  }
  function renderBreakdown(map, labelFn) {
    var html = '', hasAny = false;
    for (var k in map) { if (map.hasOwnProperty(k)) { hasAny = true; break; } }
    if (!hasAny) return '<div class="notice">Sem dados.</div>';
    for (var k2 in map) {
      if (!map.hasOwnProperty(k2)) continue;
      var d = map[k2];
      var pct = d.total > 0 ? Math.round((d.acertos / d.total) * 100) : 0;
      var status = pct >= 70 ? 'status-conhecido' : (pct >= 40 ? 'status-duvida' : 'status-desconhecido');
      html += '<div class="subtopic-result ' + status + '"><h3>' + esc(labelFn(k2)) + '<span class="status-badge ' + status + '">' + pct + '%</span></h3>';
      html += '<div class="signals"><span>Acertos: <strong>' + d.acertos + '</strong> / ' + d.total + '</span></div></div>';
    }
    return html;
  }

  /* ============================================================
     QUESTION BANK (import/export)
  ============================================================ */
  function renderQuestionBank() {
    var totalReal = qRealCount(), totalDid = qDidCount();
    var respondidas = 0, acertos = 0;
    for (var qid in AppState.questions) { if (!AppState.questions.hasOwnProperty(qid)) continue; var qs = AppState.questions[qid]; respondidas += qs.tentativas; acertos += qs.acertos; }
    var html = '';
    html += '<h1 class="page-title">Banco de Questões</h1>';
    html += '<p class="page-subtitle">Gestão do banco. Exporte, importe e audite o conteúdo.</p>';
    html += '<div class="db-summary">';
    html += '<div class="db-stat dbs-total"><div class="dbs-label">Total</div><div class="dbs-value">' + QUESTIONS.length + '</div></div>';
    html += '<div class="db-stat dbs-real"><div class="dbs-label">Reais verificáveis</div><div class="dbs-value">' + totalReal + '</div></div>';
    html += '<div class="db-stat dbs-did"><div class="dbs-label">Didáticas</div><div class="dbs-value">' + totalDid + '</div></div>';
    html += '<div class="db-stat"><div class="dbs-label">Tentativas registradas</div><div class="dbs-value">' + respondidas + '</div></div>';
    html += '</div>';
    html += '<div class="notice" style="margin-bottom:14px;"><strong>Sobre questões reais.</strong> Este app <em>nunca</em> inventa banca, órgão, ano ou prova. Atualmente há <strong>' + totalReal + ' reais</strong> e ' + totalDid + ' didáticas. Use o importador abaixo para adicionar questões reais com origem confirmada.</div>';
    html += '<div class="io-box"><h3><span>📤</span> Exportar</h3><p>Gera JSON com todas as questões ou com o progresso completo.</p>';
    html += '<div class="io-actions"><button class="btn btn-primary" data-action="export-questions">Baixar JSON de questões</button><button class="btn" data-action="export-progress">Baixar JSON de progresso</button></div></div>';
    html += '<div class="io-box"><h3><span>📥</span> Importar questões</h3>';
    html += '<p>Cole um JSON. Aceita <strong>DIDÁTICAS</strong> e <strong>REAIS</strong>. REAIS sem banca, órgão, ano, prova e fonte são <em>rejeitadas</em>.</p>';
    html += '<textarea id="importTextarea" placeholder=\'[{"id":"Q-REAL-XX-0001","tipo":"REAL","banca":"...","orgao":"...","ano":2024,"prova":"...","fonte":{"descricao":"..."},"area":"DA","moduloId":"DA-19","subtema":"...","dificuldade":2,"enunciado":"...","alternativas":[...],"gabarito":"B","explicacao":{"correta":"...","incorretas":{...},"conceitoCobrado":"...","pegadinha":"...","comoApareceEmConcurso":"..."}}]\'></textarea>';
    html += '<div class="io-actions"><button class="btn btn-primary" data-action="import-questions">Validar e importar</button><button class="btn" data-action="clear-import">Limpar relatório</button><button class="btn" data-action="load-sample">Carregar exemplo</button></div>';
    if (importReport) {
      var cls = importReport.status === 'ok' ? 'ok' : (importReport.status === 'warn' ? 'warn' : 'err');
      html += '<div class="import-report ' + cls + '"><strong>' + esc(importReport.title) + '</strong>';
      if (importReport.messages && importReport.messages.length) {
        html += '<ul>'; for (var m = 0; m < importReport.messages.length; m++) html += '<li>' + esc(importReport.messages[m]) + '</li>'; html += '</ul>';
      }
      html += '</div>';
    }
    html += '</div>';
    html += '<div class="io-box"><h3><span>🔒</span> Regras do validador</h3><ul style="font-size:14px;line-height:1.6;padding-left:22px;">';
    html += '<li>ID único. IDs existentes são rejeitados.</li>';
    html += '<li>DIDÁTICA: enunciado, alternativas, gabarito e explicação obrigatórios.</li>';
    html += '<li>REAL: além disso, exige banca, órgão, ano, prova e fonte.</li>';
    html += '<li>Inconsistências rejeitam a questão e aparecem no relatório.</li>';
    html += '</ul></div>';
    html += footerHtml();
    return html;
  }
  function validateIncomingQuestion(q, existingIds) {
    var errors = [];
    if (!q || typeof q !== 'object') return ['Item não é objeto.'];
    if (!q.id) errors.push('Sem ID.');
    if (q.id && existingIds.indexOf(q.id) !== -1) errors.push('ID já existe (' + q.id + ').');
    if (q.tipo !== 'REAL' && q.tipo !== 'DIDATICA') errors.push('tipo deve ser REAL ou DIDATICA.');
    if (!q.enunciado) errors.push('Sem enunciado.');
    if (!Array.isArray(q.alternativas) || q.alternativas.length < 2) errors.push('Alternativas insuficientes.');
    else { var altIds = q.alternativas.map(function (a) { return a.id; }); if (altIds.indexOf(q.gabarito) === -1) errors.push('Gabarito não corresponde a nenhuma alternativa.'); }
    if (!q.explicacao || !q.explicacao.correta) errors.push('Explicação estruturada ausente (campo "correta").');
    if (!q.moduloId || !getModule(q.moduloId)) errors.push('moduloId inválido.');
    if (q.tipo === 'REAL') {
      if (!q.banca) errors.push('REAL sem banca.');
      if (!q.orgao) errors.push('REAL sem órgão.');
      if (!q.ano) errors.push('REAL sem ano.');
      if (!q.prova) errors.push('REAL sem prova.');
      if (!q.fonte || !q.fonte.descricao) errors.push('REAL sem fonte verificável.');
    }
    return errors;
  }
  function importQuestionsFromText(text) {
    var incoming;
    try { incoming = JSON.parse(text); }
    catch (e) { importReport = { status: 'err', title: 'JSON inválido', messages: [String(e.message)] }; render(); return; }
    if (!Array.isArray(incoming)) { importReport = { status: 'err', title: 'Esperado um array JSON', messages: [] }; render(); return; }
    var existingIds = QUESTIONS.map(function (q) { return q.id; });
    var aceitas = 0, rejeitadas = 0, messages = [];
    for (var i = 0; i < incoming.length; i++) {
      var q = incoming[i]; var errs = validateIncomingQuestion(q, existingIds);
      if (errs.length > 0) { rejeitadas++; messages.push('Item ' + (i + 1) + ' (' + (q && q.id ? q.id : 'sem id') + '): ' + errs.join(' · ')); }
      else {
        if (!q.area && q.moduloId) { var mm = getModule(q.moduloId); if (mm) q.area = mm.area; }
        if (!q.subtema) q.subtema = '';
        if (!q.dificuldade) q.dificuldade = 2;
        if (!q.prioridade) q.prioridade = 'alta';
        if (!q.tags) q.tags = [];
        if (q.tipo === 'DIDATICA') { q.banca = undefined; q.orgao = undefined; q.ano = undefined; q.prova = undefined; q.fonte = undefined; }
        QUESTIONS.push(q); existingIds.push(q.id); aceitas++;
      }
    }
    if (aceitas > 0) importReport = { status: rejeitadas === 0 ? 'ok' : 'warn', title: aceitas + ' importada(s); ' + rejeitadas + ' rejeitada(s).', messages: messages };
    else importReport = { status: 'err', title: 'Nenhuma questão importada.', messages: messages };
    render();
  }
  function clearImport() { importReport = null; render(); }
  function loadImportSample() {
    var sample = [{ id: 'Q-REAL-XX-0001', tipo: 'REAL', banca: 'BANCA-DE-EXEMPLO', orgao: 'ORGAO-DE-EXEMPLO', ano: 2024, prova: 'PROVA-DE-EXEMPLO', fonte: { descricao: 'Documento de exemplo — substitua por fonte verificável' }, area: (Object.keys(AREA_LABELS)[0] || 'GERAL'), moduloId: (MODULES[0] ? MODULES[0].id : 'MOD-01'), subtema: 'Substitua', dificuldade: 2, enunciado: 'Substitua este enunciado pelo da questão real.', alternativas: [{ id: 'A', texto: 'A' }, { id: 'B', texto: 'B' }, { id: 'C', texto: 'C' }, { id: 'D', texto: 'D' }], gabarito: 'B', explicacao: { correta: 'Explique.', incorretas: { A: 'Explique A.', C: 'Explique C.', D: 'Explique D.' }, conceitoCobrado: 'Conceito', pegadinha: 'Pegadinha', comoApareceEmConcurso: 'Como aparece' } }];
    var ta = document.getElementById('importTextarea'); if (ta) ta.value = JSON.stringify(sample, null, 2);
  }
  function downloadJson(filename, dataObj) {
    try {
      var blob = new Blob([JSON.stringify(dataObj, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob); var a = document.createElement('a');
      a.href = url; a.download = filename; document.body.appendChild(a); a.click();
      setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 200);
    } catch (e) { window.alert('Falha ao exportar: ' + e.message); }
  }
  function exportQuestions() { downloadJson('questoes-v' + APP_VERSION + '.json', { exportedAt: new Date().toISOString(), appVersion: APP_VERSION, schemaVersion: SCHEMA_VERSION, questoes: QUESTIONS }); }
  function exportProgress() { downloadJson('progresso-v' + APP_VERSION + '.json', { exportedAt: new Date().toISOString(), appVersion: APP_VERSION, state: AppState }); }

  /* ============================================================
     FLASHCARDS
  ============================================================ */
  function renderFlashcards() {
    var areas = ['todas'].concat(Object.keys(AREA_LABELS));
    var pills = '';
    for (var i = 0; i < areas.length; i++) { var a = areas[i]; var label = a === 'todas' ? 'Todas as áreas' : (AREA_LABELS[a] || a); var active = (flashcardFilter.area === a) ? ' active' : ''; pills += '<button class="filter-pill' + active + '" data-fcf-area="' + esc(a) + '">' + esc(label) + '</button>'; }
    var modulosComCartoes = [];
    for (var k = 0; k < MODULES.length; k++) {
      var cards = fcByModule(MODULES[k].id);
      if (cards.length === 0) continue;
      if (flashcardFilter.area !== 'todas' && MODULES[k].area !== flashcardFilter.area) continue;
      modulosComCartoes.push({ modulo: MODULES[k], cards: cards });
    }
    var totalCards = 0, totalVistos = 0, totalSabia = 0, totalDuvida = 0, totalNao = 0;
    for (var c = 0; c < FLASHCARDS.length; c++) { totalCards++; var fs = AppState.flashcards[FLASHCARDS[c].id]; if (fs) { totalVistos++; totalSabia += fs.acertos; totalDuvida += fs.duvidas; totalNao += fs.erros; } }
    var dueF = getDueFlashcards().length;
    var html = '';
    html += '<h1 class="page-title">Flashcards</h1><p class="page-subtitle">Estudo por cartões — frente/verso com autoavaliação.</p>';
    html += '<div class="db-summary">';
    html += '<div class="db-stat dbs-flash"><div class="dbs-label">Total</div><div class="dbs-value">' + totalCards + '</div></div>';
    html += '<div class="db-stat"><div class="dbs-label">Já vistos</div><div class="dbs-value">' + totalVistos + '</div></div>';
    html += '<div class="db-stat dbs-real"><div class="dbs-label">Eu sabia</div><div class="dbs-value">' + totalSabia + '</div></div>';
    html += '<div class="db-stat dbs-did"><div class="dbs-label">Tive dúvida</div><div class="dbs-value">' + totalDuvida + '</div></div>';
    html += '<div class="db-stat"><div class="dbs-label">Não sabia</div><div class="dbs-value">' + totalNao + '</div></div>';
    if (dueF > 0) html += '<div class="db-stat dbs-due"><div class="dbs-label">Vencidos</div><div class="dbs-value">' + dueF + '</div></div>';
    html += '</div>';
    html += '<div class="type-banner"><span class="badge-pill badge-flash">FLASHCARDS</span><span>' + totalCards + ' cartão(ões) cadastrado(s). ';
    if (totalCards === 0) html += 'Serão adicionados nas próximas fases. ';
    else html += 'Após revelar o verso, avalie com sinceridade. O sistema agenda revisões conforme a resposta. ';
    html += '</span></div>';
    html += '<div style="margin-bottom:14px;display:flex;gap:8px;flex-wrap:wrap;">';
    html += '<button class="btn btn-primary" data-action="start-flashcards-all"' + (totalCards === 0 ? ' disabled' : '') + '>▶ Estudar todos (' + totalCards + ')</button>';
    if (dueF > 0) html += '<button class="btn btn-purple" data-action="start-flashcards-due">🔁 Revisar vencidos (' + dueF + ')</button>';
    html += '</div>';
    html += '<h2 class="section-title">Filtrar por área</h2>';
    html += '<div class="filters">' + pills + '</div>';
    if (modulosComCartoes.length === 0) {
      html += '<div class="notice">Nenhum módulo com flashcards' + (FLASHCARDS.length === 0 ? ' ainda — serão adicionados nas próximas fases.' : ' para o filtro escolhido.') + '</div>';
    } else {
      html += '<h2 class="section-title">Decks por módulo</h2><div class="fc-deck-grid">';
      for (var j = 0; j < modulosComCartoes.length; j++) {
        var entry = modulosComCartoes[j]; var mod = entry.modulo; var cards2 = entry.cards; var vistos = 0;
        for (var ci = 0; ci < cards2.length; ci++) if (AppState.flashcards[cards2[ci].id]) vistos++;
        var pct = Math.round((vistos / cards2.length) * 100); var areaL = AREA_LABELS[mod.area] || mod.area;
        html += '<button class="fc-deck" data-action="start-flashcards-by-module" data-module-id="' + esc(mod.id) + '">';
        html += '<div class="fcd-id">' + esc(mod.id) + '</div>';
        html += '<div class="fcd-title">' + esc(mod.titulo) + '</div>';
        html += '<div class="fcd-meta"><span>' + esc(areaL) + '</span><span>' + cards2.length + ' cartão(ões)</span><span>' + vistos + ' visto(s)</span></div>';
        html += '<div class="fcd-bar"><div class="fcd-bar-fill" style="width:' + pct + '%"></div></div></button>';
      }
      html += '</div>';
    }
    html += footerHtml();
    return html;
  }
  function renderFlashcardRun() {
    if (!flashcardRunning) return '<h1 class="page-title">Sessão não iniciada</h1><button class="btn btn-primary" data-nav="flashcards">Ir para Flashcards</button>';
    var total = flashcardRunning.ids.length, idx = flashcardRunning.index;
    var fid = flashcardRunning.ids[idx]; var card = getFlashcard(fid);
    if (!card) return '<h1 class="page-title">Flashcard não encontrado</h1><button class="btn" data-nav="flashcards">← Flashcards</button>';
    var already = Object.prototype.hasOwnProperty.call(flashcardRunning.respostas, fid);
    var userResp = flashcardRunning.respostas[fid];
    var revelado = flashcardRunning.revelado || already;
    var percent = Math.round((idx / total) * 100);
    var modoLabel = ''; if (flashcardRunning.modo === 'revisao') modoLabel = 'Revisão';
    var html = '';
    html += '<div class="run-toolbar"><div class="rt-info">';
    if (modoLabel) html += '<span class="badge-pill badge-rev">' + esc(modoLabel) + '</span>';
    html += '<span>Cartão ' + (idx + 1) + ' de ' + total + '</span><span class="badge-pill ' + (DIFFICULTY_CLASS[card.dificuldade] || '') + '">' + esc(difficultyLabel(card.dificuldade)) + '</span></div>';
    html += '<button class="btn" data-action="cancel-flashcard-session">Cancelar sessão</button></div>';
    html += '<div class="fc-progress"><div class="fc-progress-bar"><div class="fc-progress-fill" style="width:' + percent + '%"></div></div><div class="fc-progress-label">' + (idx + 1) + ' / ' + total + '</div></div>';
    html += '<div class="fc-card-wrap"><div class="fc-card"><div class="fc-side">' + (revelado ? 'Verso' : 'Frente') + '</div>';
    if (!revelado) html += '<div class="fc-front">' + esc(card.frente) + '</div>';
    else {
      html += '<div class="fc-front" style="font-size:15px;color:var(--text-muted);">' + esc(card.frente) + '</div>';
      html += '<div class="fc-back" style="margin-top:14px;">' + esc(card.verso) + '</div>';
      if (card.tags && card.tags.length) { html += '<div class="fc-tags">'; for (var t = 0; t < card.tags.length; t++) html += '<span class="fc-tag">' + esc(card.tags[t]) + '</span>'; html += '</div>'; }
    }
    html += '</div>';
    if (!revelado) html += '<div class="fc-actions"><button class="btn btn-primary" data-action="reveal-flashcard">Revelar verso</button></div>';
    else if (!already) {
      html += '<div class="fc-actions">';
      html += '<button class="btn fc-btn-sabia" data-action="answer-flashcard" data-level="sabia">Eu sabia</button>';
      html += '<button class="btn fc-btn-duvida" data-action="answer-flashcard" data-level="duvida">Tive dúvida</button>';
      html += '<button class="btn fc-btn-nao" data-action="answer-flashcard" data-level="nao_sabia">Não sabia</button></div>';
    } else {
      var fsNow = AppState.flashcards[fid] || {};
      html += '<div class="fc-actions" style="flex-direction:column;align-items:center;gap:4px;">';
      html += '<div style="font-size:14px;color:var(--text-muted);">Você marcou: <strong>' + esc(FC_ANSWER_LABELS[userResp] || userResp) + '</strong></div>';
      if (fsNow.proximaRevisao) html += '<div style="font-size:12px;color:var(--text-muted);">Próxima revisão sugerida: ' + esc(formatDateShort(fsNow.proximaRevisao)) + '</div>';
      html += '</div>';
    }
    html += '</div>';
    html += footerHtml();
    return html;
  }
  function renderFlashcardResult() {
    var sess = window.__lastFlashSession;
    if (!sess) return '<h1 class="page-title">Nenhum resultado de flashcards</h1><button class="btn btn-primary" data-nav="flashcards">Ir para Flashcards</button>';
    var ids = sess.ids, total = ids.length, cSabia = 0, cDuvida = 0, cNao = 0;
    for (var i = 0; i < ids.length; i++) { var r = sess.respostas[ids[i]]; if (r === 'sabia') cSabia++; else if (r === 'duvida') cDuvida++; else if (r === 'nao_sabia') cNao++; }
    var pctSabia = total > 0 ? Math.round((cSabia / total) * 100) : 0;
    var modoLabel = ''; if (sess.modo === 'revisao') modoLabel = 'Revisão';
    var html = '';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px;"><div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn" data-nav="flashcards">← Flashcards</button>';
    if (modoLabel === 'Revisão') html += '<button class="btn" data-nav="revisao">🔁 Revisão</button>';
    html += '</div></div>';
    html += '<h1 class="page-title">Sessão de flashcards concluída' + (modoLabel ? ' — ' + esc(modoLabel) : '') + '</h1>';
    html += '<p class="page-subtitle">Iniciada em ' + esc(formatDate(sess.startedAt)) + '</p>';
    html += '<div class="result-summary">';
    html += resultStat('Cartões estudados', total);
    html += resultStat('Eu sabia', cSabia);
    html += resultStat('Tive dúvida', cDuvida);
    html += resultStat('Não sabia', cNao);
    html += resultStat('Aproveitamento', pctSabia + '%');
    html += '</div>';
    html += '<h2 class="section-title">Detalhe da sessão</h2><div class="fc-hist">';
    for (var j = 0; j < ids.length; j++) {
      var card = getFlashcard(ids[j]); if (!card) continue;
      var resp = sess.respostas[ids[j]]; var cls = FC_ANSWER_CLASS[resp] || '';
      html += '<div class="fc-hist-row"><span>' + esc(card.frente) + '</span><span class="fhr-ans ' + cls + '">' + esc(FC_ANSWER_LABELS[resp] || resp) + '</span></div>';
    }
    html += '</div>';
    html += '<div style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-primary" data-nav="flashcards">Nova sessão →</button></div>';
    html += footerHtml();
    return html;
  }

  /* ============================================================
     REVISION
  ============================================================ */
  function renderRevision() {
    var dueQ = getDueQuestions(), todayQ = getTodayQuestions(), futureQ = getFutureQuestions();
    var dueF = getDueFlashcards(), todayF = getTodayFlashcards(), futureF = getFutureFlashcards();
    var html = '';
    html += '<h1 class="page-title">Revisão</h1><p class="page-subtitle">Agenda de revisões espaçadas. Intervalos adaptativos: acertos aumentam o prazo, erros reduzem.</p>';
    html += '<div class="rev-summary">';
    html += '<div class="rev-stat due"><div class="rs-label">Vencidas</div><div class="rs-value">' + (dueQ.length + dueF.length) + '</div></div>';
    html += '<div class="rev-stat today"><div class="rs-label">Hoje</div><div class="rs-value">' + (todayQ.length + todayF.length) + '</div></div>';
    html += '<div class="rev-stat future"><div class="rs-label">Futuras</div><div class="rs-value">' + (futureQ.length + futureF.length) + '</div></div>';
    html += '<div class="rev-stat"><div class="rs-label">Total agendado</div><div class="rs-value">' + (dueQ.length + todayQ.length + futureQ.length + dueF.length + todayF.length + futureF.length) + '</div></div>';
    html += '</div>';
    var totalDue = dueQ.length + dueF.length;
    if (totalDue > 0) {
      html += '<div class="quick-actions">';
      if (dueQ.length > 0) html += '<button class="btn btn-primary" data-action="start-revision-questions">📝 Revisar ' + dueQ.length + ' questão(ões) vencida(s)</button>';
      if (dueF.length > 0) html += '<button class="btn btn-purple" data-action="start-revision-flashcards">🗂️ Revisar ' + dueF.length + ' flashcard(s) vencido(s)</button>';
      html += '</div>';
    }
    html += '<div class="rev-group"><h3>🔴 Vencidas <span class="count-badge">' + totalDue + '</span></h3>';
    if (totalDue === 0) html += '<div class="rev-empty"><strong>Nada vencido.</strong> Você está em dia com as revisões.</div>';
    else { for (var i = 0; i < dueQ.length; i++) html += renderRevItemQuestion(dueQ[i], 'Vencida'); for (var i2 = 0; i2 < dueF.length; i2++) html += renderRevItemFlashcard(dueF[i2], 'Vencida'); }
    html += '</div>';
    var totalToday = todayQ.length + todayF.length;
    html += '<div class="rev-group"><h3>🟠 Hoje <span class="count-badge">' + totalToday + '</span></h3>';
    if (totalToday === 0) html += '<div class="rev-empty">Sem revisões para hoje.</div>';
    else { for (var j = 0; j < todayQ.length; j++) html += renderRevItemQuestion(todayQ[j], 'Hoje'); for (var j2 = 0; j2 < todayF.length; j2++) html += renderRevItemFlashcard(todayF[j2], 'Hoje'); }
    html += '</div>';
    var totalFuture = futureQ.length + futureF.length;
    html += '<div class="rev-group"><h3>🟢 Próximas <span class="count-badge">' + totalFuture + '</span></h3>';
    if (totalFuture === 0) html += '<div class="rev-empty">Sem revisões futuras agendadas.</div>';
    else {
      var combined = [];
      for (var k = 0; k < futureQ.length; k++) combined.push({ tipo: 'q', item: futureQ[k].q, iso: futureQ[k].iso });
      for (var k2 = 0; k2 < futureF.length; k2++) combined.push({ tipo: 'f', item: futureF[k2].fc, iso: futureF[k2].iso });
      combined.sort(function (a, b) { return new Date(a.iso) - new Date(b.iso); });
      for (var m = 0; m < combined.length; m++) { var c = combined[m]; var label = formatDateShort(c.iso); if (c.tipo === 'q') html += renderRevItemQuestion(c.item, label); else html += renderRevItemFlashcard(c.item, label); }
    }
    html += '</div>';
    html += '<h2 class="section-title">Como funciona</h2>';
    html += '<div class="notice">Acertos aumentam gradualmente o intervalo até a próxima revisão (1 → 3 → 7 → 15 → 30 → 60 dias para questões; 0 → 1 → 3 → 7 → 15 → 30 dias para flashcards). Erros reiniciam o ciclo.</div>';
    html += footerHtml();
    return html;
  }
  function renderRevItemQuestion(q, quando) {
    var qs = AppState.questions[q.id] || {};
    var m = getModule(q.moduloId);
    var html = '<div class="rev-item"><div class="ri-body"><div class="ri-id">' + esc(q.id) + '<span class="badge-pill badge-rev">Questão</span>';
    if (quando) html += '<span class="badge-pill ' + (quando === 'Vencida' ? 'badge-err' : 'badge-ok') + '">' + esc(quando) + '</span>';
    html += '</div><div class="ri-text">' + esc(q.enunciado) + '</div>';
    html += '<div class="ri-meta">' + esc(q.moduloId + (m ? ' — ' + m.titulo : '') + ' · ' + q.subtema);
    if (qs.proximaRevisao) html += ' · programada: ' + esc(formatDateShort(qs.proximaRevisao));
    html += '</div></div><div class="ri-action"><button class="btn btn-primary" data-action="revisar-questao-unica" data-question-id="' + esc(q.id) + '">Revisar</button></div></div>';
    return html;
  }
  function renderRevItemFlashcard(fc, quando) {
    var fs = AppState.flashcards[fc.id] || {};
    var m = getModule(fc.moduloId);
    var html = '<div class="rev-item"><div class="ri-body"><div class="ri-id">' + esc(fc.id) + '<span class="badge-pill badge-flash">Flashcard</span>';
    if (quando) html += '<span class="badge-pill ' + (quando === 'Vencida' ? 'badge-err' : 'badge-ok') + '">' + esc(quando) + '</span>';
    html += '</div><div class="ri-text">' + esc(fc.frente) + '</div>';
    html += '<div class="ri-meta">' + esc(fc.moduloId + (m ? ' — ' + m.titulo : ''));
    if (fs.proximaRevisao) html += ' · programada: ' + esc(formatDateShort(fs.proximaRevisao));
    html += '</div></div><div class="ri-action"><button class="btn btn-purple" data-action="revisar-flashcard-unico" data-flashcard-id="' + esc(fc.id) + '">Revisar</button></div></div>';
    return html;
  }

  /* ============================================================
     ERRORS
  ============================================================ */
  function renderErrors() {
    var errs = getErrorQuestions();
    var html = '';
    html += '<h1 class="page-title">Meus Erros</h1><p class="page-subtitle">Caderno de erros — questões com erro registrado que ainda não foram superadas.</p>';
    html += '<div class="rev-summary"><div class="rev-stat err"><div class="rs-label">Erros em aberto</div><div class="rs-value">' + errs.length + '</div></div></div>';
    if (errs.length === 0) {
      html += '<div class="rev-empty"><strong>Sem erros em aberto.</strong> Continue praticando para registrar novos erros na aba <a href="#" data-nav="questoes" style="color:var(--primary);">Questões</a>.</div>';
      html += footerHtml();
      return html;
    }
    html += '<div class="quick-actions"><button class="btn btn-danger" data-action="start-errors-session">❌ Revisar somente meus erros (' + errs.length + ')</button></div>';
    html += '<h2 class="section-title">Questões com erro</h2>';
    for (var i = 0; i < errs.length; i++) {
      var q = errs[i]; var qs = AppState.questions[q.id] || {}; var m = getModule(q.moduloId);
      var ultimaData = qs.ultimaTentativa ? formatDate(qs.ultimaTentativa) : '—';
      html += '<div class="err-item"><div class="ei-head"><span class="ei-id">' + esc(q.id) + '</span><div class="ei-tags">';
      html += '<span class="badge-pill ' + typeBadgeClass(q.tipo) + '">' + esc(typeLabel(q.tipo)) + '</span>';
      html += '<span class="badge-pill badge-err">' + (qs.erros || 0) + ' erro(s)</span>';
      if (qs.proximaRevisao) html += '<span class="badge-pill badge-rev">revisar ' + esc(formatDateShort(qs.proximaRevisao)) + '</span>';
      html += '</div></div><div class="ei-text">' + esc(q.enunciado) + '</div>';
      html += '<div class="ei-meta">' + esc(q.moduloId + (m ? ' — ' + m.titulo : '') + ' · ' + q.subtema) + ' · acertos: <strong>' + (qs.acertos || 0) + '</strong> / tentativas: <strong>' + (qs.tentativas || 0) + '</strong> · última: ' + esc(ultimaData) + '</div>';
      html += '<div class="ei-row2"><button class="btn btn-danger" data-action="revisar-questao-unica" data-question-id="' + esc(q.id) + '">Revisar só esta questão</button><button class="btn" data-action="open-module" data-module-id="' + esc(q.moduloId) + '">Ver módulo</button></div></div>';
    }
    html += footerHtml();
    return html;
  }

  /* ============================================================
     SIMULADOS
  ============================================================ */
  function renderSimulados() {
    var totalReal = qRealCount();
    var poolSimulado = filterForSimulado();
    var qtdAlvoVal = quantidadeAlvo();
    var podeIniciar = poolSimulado.length > 0 && qtdAlvoVal > 0;
    var realPool = poolSimulado.filter(function (q) { return q.tipo === 'REAL'; });

    var areas = ['todas'].concat(Object.keys(AREA_LABELS));
    var areaPills = '';
    for (var i = 0; i < areas.length; i++) { var a = areas[i]; var label = a === 'todas' ? 'Todas as áreas' : (AREA_LABELS[a] || a); var active = (simuladoConfig.area === a) ? ' active' : ''; areaPills += '<button class="filter-pill' + active + '" data-sim-area="' + esc(a) + '">' + esc(label) + '</button>'; }
    var moduleOptions = '<option value="todos">Todos os módulos</option>';
    for (var j = 0; j < MODULES.length; j++) {
      var mo = MODULES[j]; var hasQ = QUESTIONS.some(function (q) { return q.moduloId === mo.id; });
      if (!hasQ && simuladoConfig.moduloId !== mo.id) continue;
      var sel = simuladoConfig.moduloId === mo.id ? ' selected' : '';
      moduleOptions += '<option value="' + esc(mo.id) + '"' + sel + '>' + esc(mo.id + ' — ' + mo.titulo) + '</option>';
    }
    var diffOptions = '';
    var diffs = [['todas','Todas as dificuldades'], ['1','Fácil'], ['2','Médio'], ['3','Difícil']];
    for (var d = 0; d < diffs.length; d++) { var sel2 = simuladoConfig.dificuldade === diffs[d][0] ? ' selected' : ''; diffOptions += '<option value="' + diffs[d][0] + '"' + sel2 + '>' + esc(diffs[d][1]) + '</option>'; }
    var tipoOptions = '';
    var tipos = [['TODAS','Todas'], ['DIDATICA','Somente didáticas'], ['REAL','Somente reais']];
    for (var t = 0; t < tipos.length; t++) { var sel3 = simuladoConfig.tipo === tipos[t][0] ? ' selected' : ''; tipoOptions += '<option value="' + tipos[t][0] + '"' + sel3 + '>' + esc(tipos[t][1]) + '</option>'; }
    var statusOptions = '';
    var statusList = [['todas','Todos os status'], ['nao_respondidas','Somente não respondidas'], ['respondidas','Somente já respondidas'], ['acertos','Somente acertos'], ['erros','Somente erros']];
    for (var s2 = 0; s2 < statusList.length; s2++) { var sel4 = simuladoConfig.status === statusList[s2][0] ? ' selected' : ''; statusOptions += '<option value="' + statusList[s2][0] + '"' + sel4 + '>' + esc(statusList[s2][1]) + '</option>'; }
    var qtyPills = '';
    var qtyOpts = [['10','10 questões'], ['20','20 questões'], ['40','40 questões'], ['custom','Personalizado']];
    for (var q = 0; q < qtyOpts.length; q++) { var val = qtyOpts[q][0]; var lbl = qtyOpts[q][1]; var act = (String(simuladoConfig.quantidade) === val) ? ' active' : ''; qtyPills += '<button class="filter-pill' + act + '" data-sim-qty="' + val + '">' + esc(lbl) + '</button>'; }

    var html = '';
    html += '<h1 class="page-title">Simulados</h1><p class="page-subtitle">Monte simulados personalizados ou uma prova de concurso com questões reais verificáveis.</p>';
    html += '<div class="type-banner">';
    if (simuladoConfig.modo === 'PROVA_CONCURSO') html += '<span class="badge-pill badge-real">PROVA DE CONCURSO</span><span>Modo atual: <strong>Prova de concurso</strong> — só usa questões reais. Há <strong>' + totalReal + '</strong> cadastrada(s).</span>';
    else html += '<span class="badge-pill badge-sim">SIMULADO</span><span>Modo atual: <strong>Simulado personalizado</strong> — usa todas as questões (didáticas + reais).</span>';
    html += '</div>';
    var simCount = AppState.simulados.length;
    var bestPct = null, lastPct = null;
    for (var s = 0; s < AppState.simulados.length; s++) { var r = AppState.simulados[s].resultado; if (bestPct == null || r.percentual > bestPct) bestPct = r.percentual; lastPct = r.percentual; }
    html += '<div class="db-summary">';
    html += '<div class="db-stat dbs-sim"><div class="dbs-label">Simulados feitos</div><div class="dbs-value">' + simCount + '</div></div>';
    html += '<div class="db-stat dbs-real"><div class="dbs-label">Melhor aproveitamento</div><div class="dbs-value">' + (bestPct != null ? bestPct + '%' : '—') + '</div></div>';
    html += '<div class="db-stat dbs-did"><div class="dbs-label">Último aproveitamento</div><div class="dbs-value">' + (lastPct != null ? lastPct + '%' : '—') + '</div></div>';
    html += '<div class="db-stat"><div class="dbs-label">Questões reais no banco</div><div class="dbs-value">' + totalReal + '</div></div>';
    html += '</div>';
    html += '<h2 class="section-title">Modalidade</h2><div class="sim-mode-tabs">';
    html += '<button class="sim-mode-tab' + (simuladoConfig.modo === 'SIMULADO' ? ' active' : '') + '" data-sim-mode="SIMULADO"><span class="smt-title">🎯 Simulado personalizado</span><span class="smt-desc">Escolha a quantidade e os filtros. Usa todas as questões disponíveis.</span></button>';
    html += '<button class="sim-mode-tab' + (simuladoConfig.modo === 'PROVA_CONCURSO' ? ' active' : '') + '" data-sim-mode="PROVA_CONCURSO"><span class="smt-title">🏛️ Prova de concurso</span><span class="smt-desc">Somente questões reais verificáveis (banca, órgão, ano e fonte).</span></button>';
    html += '</div>';
    if (simuladoConfig.modo === 'SIMULADO') {
      html += '<div class="sim-card"><h3>Quantidade de questões</h3><p>Padrão sugerido: 20 questões. Você pode personalizar até 200.</p><div class="sim-qty-pills">' + qtyPills + '</div>';
      if (simuladoConfig.quantidade === 'custom') html += '<div class="filter-row"><label>Quantidade</label><input type="number" id="simCustomQty" min="1" max="200" value="' + esc(simuladoConfig.customQty || '') + '" placeholder="Ex.: 30"><span style="font-size:13px;color:var(--text-muted);">Entre 1 e 200.</span></div>';
      html += '</div>';
      html += '<div class="sim-card"><h3>Filtros</h3><p>Combine área, módulo, dificuldade, tipo e status.</p><div class="filters">' + areaPills + '</div>';
      html += '<div class="filter-row"><label>Módulo</label><select id="simFilterModulo">' + moduleOptions + '</select><label>Dificuldade</label><select id="simFilterDificuldade">' + diffOptions + '</select><label>Tipo</label><select id="simFilterTipo">' + tipoOptions + '</select><label>Status</label><select id="simFilterStatus">' + statusOptions + '</select></div></div>';
      var target = quantidadeAlvo(); var cls = 'sim-preview'; var msg = '';
      if (poolSimulado.length === 0) { cls += ' err'; msg = '<strong>Nenhuma questão corresponde aos filtros.</strong> Ajuste os filtros para prosseguir.'; }
      else if (target === 0) { cls += ' err'; msg = '<strong>Defina uma quantidade válida.</strong>'; }
      else if (poolSimulado.length < target) { cls += ' warn'; msg = '<strong>Atenção:</strong> você pediu ' + target + ' questões, mas há apenas ' + poolSimulado.length + ' no pool. O simulado usará ' + poolSimulado.length + '.'; }
      else msg = 'Pronto para iniciar. <strong>' + poolSimulado.length + '</strong> questão(ões) no pool atual. Serão selecionadas <strong>' + target + '</strong> aleatoriamente.';
      html += '<div class="' + cls + '">' + msg + '</div>';
      html += '<div style="margin-bottom:16px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-primary btn-lg" data-action="start-simulado"' + (!podeIniciar ? ' disabled' : '') + '>▶ Iniciar simulado</button></div>';
    } else {
      html += '<div class="sim-card"><h3>Prova de concurso</h3><p>Somente questões <strong>REAL</strong>. O app não inventa banca, órgão, ano ou prova — é preciso importar com origem verificável.</p><div class="sim-qty-pills">' + qtyPills + '</div>';
      if (simuladoConfig.quantidade === 'custom') html += '<div class="filter-row"><label>Quantidade</label><input type="number" id="simCustomQty" min="1" max="200" value="' + esc(simuladoConfig.customQty || '') + '" placeholder="Ex.: 30"></div>';
      html += '</div>';
      var clsR = 'sim-preview'; var msgR = '';
      if (totalReal === 0) { clsR += ' err'; msgR = '<strong>Nenhuma questão REAL cadastrada.</strong> Importe questões reais pelo <strong>Banco de Questões</strong> para liberar esta modalidade.'; }
      else if (realPool.length === 0) { clsR += ' warn'; msgR = 'Existem ' + totalReal + ' REAL(is), mas nenhuma corresponde aos filtros atuais.'; }
      else if (realPool.length < quantidadeAlvo()) { clsR += ' warn'; msgR = 'Disponível: <strong>' + realPool.length + '</strong>. Você pediu ' + quantidadeAlvo() + ' — serão usadas todas.'; }
      else msgR = 'Disponível: <strong>' + realPool.length + '</strong>. Pronto para iniciar com ' + quantidadeAlvo() + '.';
      html += '<div class="' + clsR + '">' + msgR + '</div>';
      html += '<div style="margin-bottom:16px;display:flex;gap:8px;flex-wrap:wrap;">';
      html += '<button class="btn btn-primary btn-lg" data-action="start-prova-concurso"' + (realPool.length === 0 ? ' disabled' : '') + '>🏛️ Iniciar prova de concurso</button>';
      if (realPool.length === 0) html += '<button class="btn btn-lg" data-action="start-simulado"' + (QUESTIONS.length === 0 ? ' disabled' : '') + '>🎯 Rodar como Simulado personalizado</button>';
      html += '</div>';
    }
    html += '<h2 class="section-title">Histórico de simulados</h2>';
    if (AppState.simulados.length === 0) html += '<div class="rev-empty">Nenhum simulado realizado ainda. Configure e clique em <strong>Iniciar simulado</strong>.</div>';
    else {
      html += '<div class="sim-hist-list">';
      for (var h = AppState.simulados.length - 1; h >= 0; h--) {
        var sim = AppState.simulados[h]; var rr = sim.resultado;
        var clsScore = rr.percentual >= 70 ? 'good' : (rr.percentual >= 40 ? 'mid' : 'bad');
        var tipoLbl = sim.tipo === 'PROVA_CONCURSO' ? 'Prova de concurso' : 'Simulado';
        html += '<div class="sim-hist-item"><div class="shi-body"><div class="shi-id">' + esc(sim.id) + '</div>';
        html += '<div class="shi-title">' + esc(tipoLbl) + ' · ' + sim.quantidade + ' questão(ões)</div>';
        html += '<div class="shi-meta">Finalizado em ' + esc(formatDate(sim.finalizadoEm)) + ' · acertos: <strong>' + rr.acertos + '</strong> · erros: <strong>' + rr.erros + '</strong>';
        if (rr.naoRespondidas > 0) html += ' · em branco: <strong>' + rr.naoRespondidas + '</strong>';
        html += '</div></div><div class="shi-score ' + clsScore + '">' + rr.percentual + '%</div>';
        html += '<div style="display:flex;gap:6px;flex-wrap:wrap;"><button class="btn" data-action="open-simulado-detail" data-sim-id="' + esc(sim.id) + '">Ver detalhes</button><button class="btn btn-danger" data-action="delete-simulado" data-sim-id="' + esc(sim.id) + '">Excluir</button></div></div>';
      }
      html += '</div>';
    }
    html += footerHtml();
    return html;
  }
  function renderSimuladoRun() {
    if (!simuladoRunning) return '<h1 class="page-title">Simulado não iniciado</h1><button class="btn btn-primary" data-nav="simulados">Ir para Simulados</button>';
    var total = simuladoRunning.ids.length, idx = simuladoRunning.index;
    var qid = simuladoRunning.ids[idx]; var q = getQuestion(qid);
    if (!q) return '<h1 class="page-title">Questão não encontrada</h1><button class="btn" data-nav="simulados">← Simulados</button>';
    var userAnswer = simuladoRunning.respostas[qid];
    var respondidas = 0;
    for (var i = 0; i < total; i++) if (simuladoRunning.respostas[simuladoRunning.ids[i]] != null) respondidas++;
    var percent = Math.round((respondidas / total) * 100);
    var modoLbl = simuladoRunning.config.modo === 'PROVA_CONCURSO' ? 'Prova de concurso' : 'Simulado';
    var html = '';
    html += '<div class="run-toolbar"><div class="rt-info"><span class="sim-review-badge">' + esc(modoLbl) + '</span><span>Questão ' + (idx + 1) + ' de ' + total + '</span>';
    html += '<span class="badge-pill ' + typeBadgeClass(q.tipo) + '">' + esc(typeLabel(q.tipo)) + '</span>';
    html += '<span class="badge-pill ' + (DIFFICULTY_CLASS[q.dificuldade] || '') + '">' + esc(difficultyLabel(q.dificuldade)) + '</span>';
    html += '<span style="color:var(--text-muted);">Respondidas: ' + respondidas + ' / ' + total + '</span></div>';
    html += '<button class="btn" data-action="cancel-simulado">Cancelar simulado</button></div>';
    html += '<div class="diag-progress"><div class="diag-progress-bar"><div class="diag-progress-fill sim" style="width:' + percent + '%"></div></div><div class="diag-progress-label">' + respondidas + ' / ' + total + '</div></div>';
    html += '<div class="q-card"><div class="q-head"><span class="q-id">' + esc(q.id) + '</span>';
    if (q.tipo === 'REAL') html += '<span style="font-size:12px;color:var(--text-muted);">' + esc((q.banca || '') + ' · ' + (q.orgao || '') + ' · ' + (q.ano || '') + ' · ' + (q.prova || '')) + '</span>';
    else html += '<span style="font-size:12px;color:var(--text-muted);">' + esc(q.moduloId + ' · ' + q.subtema) + '</span>';
    html += '</div><div class="q-statement">' + esc(q.enunciado) + '</div>';
    html += '<div class="q-options">';
    for (var a = 0; a < q.alternativas.length; a++) {
      var alt = q.alternativas[a]; var cls = 'q-option';
      if (alt.id === userAnswer) cls += ' selected';
      html += '<button class="' + cls + '" data-action="sim-answer" data-alt="' + esc(alt.id) + '"><span class="opt-letter">' + esc(alt.id) + '</span><span>' + esc(alt.texto) + '</span></button>';
    }
    html += '</div>';
    if (userAnswer) html += '<div style="margin-top:10px;font-size:13px;color:var(--text-muted);">Sua marcação: <strong>' + esc(userAnswer) + '</strong>. Você pode alterar enquanto o simulado não for finalizado. <button class="btn btn-ghost" style="font-size:12px;padding:4px 8px;" data-action="sim-clear-answer">Limpar marcação</button></div>';
    html += '<div class="q-actions"><div>';
    if (idx > 0) html += '<button class="btn" data-action="sim-prev">← Anterior</button>';
    html += '</div><div>';
    if (idx < total - 1) html += '<button class="btn btn-primary" data-action="sim-next">Próxima →</button>';
    else html += '<button class="btn btn-purple" data-action="sim-finish">Finalizar simulado →</button>';
    html += '</div></div></div>';
    html += '<div class="sim-card"><h3>Navegação rápida</h3><p>Clique em um número para ir direto à questão. Em rosa: respondidas.</p><div class="sim-quicknav">';
    for (var k = 0; k < total; k++) {
      var isAnswered = simuladoRunning.respostas[simuladoRunning.ids[k]] != null; var isCur = k === idx; var c = '';
      if (isAnswered) c += ' answered'; if (isCur) c += ' current';
      html += '<button class="' + c.trim() + '" data-action="sim-goto" data-index="' + k + '">' + (k + 1) + '</button>';
    }
    html += '</div><div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-purple" data-action="sim-finish">Finalizar e corrigir →</button></div></div>';
    html += footerHtml();
    return html;
  }
  function renderSimuladoResult() {
    var sim = getSimulado(currentSimuladoId);
    if (!sim) return '<h1 class="page-title">Simulado não encontrado</h1><button class="btn" data-nav="simulados">← Simulados</button>';
    var r = sim.resultado;
    var tipoLbl = sim.tipo === 'PROVA_CONCURSO' ? 'Prova de concurso' : 'Simulado personalizado';
    var html = '';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px;">';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn" data-nav="simulados">← Simulados</button></div>';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-primary" data-action="start-simulado">Novo simulado</button><button class="btn btn-danger" data-action="delete-simulado" data-sim-id="' + esc(sim.id) + '">Excluir este simulado</button></div>';
    html += '</div>';
    html += '<h1 class="page-title">Resultado — ' + esc(tipoLbl) + '</h1><p class="page-subtitle">' + esc(sim.id) + ' · Finalizado em ' + esc(formatDate(sim.finalizadoEm)) + '</p>';
    html += '<div class="result-summary">';
    html += resultStat('Questões', sim.quantidade);
    html += resultStat('Respondidas', r.respondidas);
    html += resultStat('Acertos', r.acertos);
    html += resultStat('Erros', r.erros);
    html += resultStat('Em branco', r.naoRespondidas);
    html += resultStat('Aproveitamento', r.percentual + '%');
    html += '</div>';
    html += '<h2 class="section-title">Leitura do resultado</h2>';
    var reading = '';
    if (r.percentual >= 80) reading = '<strong>Excelente.</strong> Aproveitamento de ' + r.percentual + '%. Mantenha a rotina de revisão espaçada.';
    else if (r.percentual >= 60) reading = '<strong>Bom desempenho.</strong> ' + r.percentual + '% — faixa competitiva. Revise os erros no <strong>Caderno de Erros</strong>.';
    else if (r.percentual >= 40) reading = '<strong>Atenção.</strong> Aproveitamento de ' + r.percentual + '%. Priorize revisão das questões erradas e das aulas dos módulos com pior desempenho.';
    else reading = '<strong>Foco urgente.</strong> Aproveitamento de ' + r.percentual + '%. Volte às aulas e refaça os diagnósticos dos módulos com pior desempenho antes do próximo simulado.';
    if (r.naoRespondidas > 0) reading += ' Você deixou <strong>' + r.naoRespondidas + '</strong> questão(ões) em branco.';
    html += '<div class="notice">' + reading + '</div>';
    html += '<h2 class="section-title">Desempenho por módulo</h2>' + renderBreakdown(r.porModulo || {}, function (k) { var m = getModule(k); return k + (m ? ' — ' + m.titulo : ''); });
    html += '<h2 class="section-title">Desempenho por dificuldade</h2>' + renderBreakdown(r.porDificuldade || {}, function (k) { return k; });
    html += '<h2 class="section-title">Desempenho por tipo de questão</h2>' + renderBreakdown(r.porTipo || {}, function (k) { return typeLabel(k); });
    html += '<h2 class="section-title">Detalhe por questão</h2>';
    for (var i = 0; i < sim.questoesIds.length; i++) {
      var q = getQuestion(sim.questoesIds[i]); if (!q) continue;
      var resp = sim.respostas[q.id]; var correta = resp === q.gabarito;
      var clsStatus = resp == null ? 'qs-nova' : (correta ? 'qs-acerto' : 'qs-erro');
      var txtStatus = resp == null ? 'Em branco' : (correta ? '✓ Acerto' : '✗ Erro');
      html += '<div class="question-preview"><div class="qp-header"><span class="qp-id">' + esc(q.id) + '</span>';
      html += '<span class="badge-pill ' + typeBadgeClass(q.tipo) + '">' + esc(typeLabel(q.tipo)) + '</span>';
      html += '<span class="qp-status ' + clsStatus + '">' + esc(txtStatus) + '</span></div>';
      html += '<div class="qp-text">' + esc(q.enunciado) + '</div>';
      html += '<div class="qp-meta">Sua resposta: <strong>' + esc(resp || '—') + '</strong> · Gabarito: <strong>' + esc(q.gabarito) + '</strong> · ' + esc(q.moduloId + ' · ' + q.subtema) + '</div>';
      if (!correta && resp != null) html += '<div class="ei-row2" style="margin-top:8px;"><button class="btn btn-danger" data-action="revisar-questao-unica" data-question-id="' + esc(q.id) + '">Revisar esta questão</button></div>';
      html += '</div>';
    }
    html += footerHtml();
    return html;
  }

  /* ============================================================
     ESTATÍSTICAS
  ============================================================ */
  function getDailyActivity(days) {
    var map = {}; var today = new Date(); today.setHours(0, 0, 0, 0);
    for (var i = days - 1; i >= 0; i--) { var d = new Date(today); d.setDate(d.getDate() - i); var key = d.toISOString().slice(0, 10); map[key] = { date: key, label: d.getDate() + '/' + (d.getMonth() + 1), questions: 0, flashcards: 0, simulados: 0, total: 0 }; }
    var qid, fid;
    for (qid in AppState.questions) { if (!AppState.questions.hasOwnProperty(qid)) continue; var hq = AppState.questions[qid].historico || []; for (var a = 0; a < hq.length; a++) { var kq = (hq[a].data || '').slice(0, 10); if (map[kq]) { map[kq].questions++; map[kq].total++; } } }
    for (fid in AppState.flashcards) { if (!AppState.flashcards.hasOwnProperty(fid)) continue; var hf = AppState.flashcards[fid].historico || []; for (var b = 0; b < hf.length; b++) { var kf = (hf[b].data || '').slice(0, 10); if (map[kf]) { map[kf].flashcards++; map[kf].total++; } } }
    for (var s = 0; s < AppState.simulados.length; s++) { var ks = (AppState.simulados[s].finalizadoEm || '').slice(0, 10); if (map[ks]) { map[ks].simulados++; map[ks].total++; } }
    var arr = []; for (var k in map) if (map.hasOwnProperty(k)) arr.push(map[k]);
    arr.sort(function (x, y) { return x.date < y.date ? -1 : 1; });
    return arr;
  }
  function getModulePerformance() {
    var out = [];
    for (var i = 0; i < MODULES.length; i++) {
      var m = MODULES[i]; var tent = 0, ac = 0;
      for (var j = 0; j < QUESTIONS.length; j++) { if (QUESTIONS[j].moduloId !== m.id) continue; var qs = AppState.questions[QUESTIONS[j].id]; if (!qs) continue; tent += qs.tentativas || 0; ac += qs.acertos || 0; }
      if (tent === 0) continue;
      out.push({ modulo: m, tentativas: tent, acertos: ac, pct: Math.round((ac / tent) * 100) });
    }
    out.sort(function (a, b) { return b.pct - a.pct; });
    return out;
  }
  function getDifficultyPerformance() {
    var bucket = { 1: { t: 0, a: 0 }, 2: { t: 0, a: 0 }, 3: { t: 0, a: 0 } };
    for (var i = 0; i < QUESTIONS.length; i++) { var qs = AppState.questions[QUESTIONS[i].id]; if (!qs) continue; var d = QUESTIONS[i].dificuldade || 2; bucket[d].t += qs.tentativas || 0; bucket[d].a += qs.acertos || 0; }
    var out = []; var order = [1, 2, 3];
    for (var k = 0; k < order.length; k++) { var dk = order[k]; if (bucket[dk].t === 0) continue; out.push({ label: DIFFICULTY_LABELS[dk], pct: Math.round((bucket[dk].a / bucket[dk].t) * 100), tentativas: bucket[dk].t }); }
    return out;
  }
  function getTypePerformance() {
    var bucket = { REAL: { t: 0, a: 0 }, DIDATICA: { t: 0, a: 0 } };
    for (var i = 0; i < QUESTIONS.length; i++) { var qs = AppState.questions[QUESTIONS[i].id]; if (!qs) continue; var t = QUESTIONS[i].tipo; if (!bucket[t]) continue; bucket[t].t += qs.tentativas || 0; bucket[t].a += qs.acertos || 0; }
    var out = [];
    if (bucket.REAL.t > 0) out.push({ label: 'Reais', pct: Math.round((bucket.REAL.a / bucket.REAL.t) * 100), tentativas: bucket.REAL.t });
    if (bucket.DIDATICA.t > 0) out.push({ label: 'Didáticas', pct: Math.round((bucket.DIDATICA.a / bucket.DIDATICA.t) * 100), tentativas: bucket.DIDATICA.t });
    return out;
  }
  function getErrorRanking() {
    var out = [];
    for (var i = 0; i < QUESTIONS.length; i++) { var qs = AppState.questions[QUESTIONS[i].id]; if (!qs || !qs.erros) continue; out.push({ q: QUESTIONS[i], erros: qs.erros, tentativas: qs.tentativas, acertos: qs.acertos }); }
    out.sort(function (a, b) { return b.erros - a.erros; });
    return out;
  }
  function getMasteryByModule() {
    var out = [];
    for (var i = 0; i < MODULES.length; i++) {
      var m = MODULES[i]; var st = AppState.modules[m.id]; if (!st) continue;
      var dom = st.dominioEstimado || 0; var tent = 0, ac = 0;
      for (var j = 0; j < QUESTIONS.length; j++) { if (QUESTIONS[j].moduloId !== m.id) continue; var qs = AppState.questions[QUESTIONS[j].id]; if (!qs) continue; tent += qs.tentativas || 0; ac += qs.acertos || 0; }
      var pctQ = tent > 0 ? (ac / tent) : null; var estimado = dom; if (pctQ != null) estimado = (dom + pctQ) / 2;
      out.push({ modulo: m, dominio: Math.round(estimado * 100), tentativas: tent, temDados: dom > 0 || tent > 0 });
    }
    out.sort(function (a, b) { return b.dominio - a.dominio; });
    return out;
  }
  function estimateStudyMinutes() { var q = AppState.stats.questoesRespondidas || 0; var f = AppState.stats.flashcardsEstudados || 0; return q * 1 + Math.round(f * 0.5); }
  function formatMinutes(min) { if (!min) return '0 min'; if (min < 60) return min + ' min'; var h = Math.floor(min / 60); var m = min % 60; return h + 'h' + (m > 0 ? ' ' + m + 'min' : ''); }

  function renderEstatisticas() {
    var stats = AppState.stats;
    var taxa = stats.questoesRespondidas > 0 ? Math.round((stats.acertos / stats.questoesRespondidas) * 100) : 0;
    var daily = getDailyActivity(14);
    var maxTotal = 0; for (var d = 0; d < daily.length; d++) if (daily[d].total > maxTotal) maxTotal = daily[d].total;
    var porModulo = getModulePerformance();
    var porDif = getDifficultyPerformance();
    var porTipo = getTypePerformance();
    var ranking = getErrorRanking();
    var dominios = getMasteryByModule();
    var minutos = estimateStudyMinutes();
    var hoje = new Date().toISOString().slice(0, 10);

    var html = '';
    html += '<h1 class="page-title">Estatísticas</h1><p class="page-subtitle">Dashboard avançado do seu progresso.</p>';
    html += '<div class="db-summary">';
    html += '<div class="db-stat dbs-total"><div class="dbs-label">Questões respondidas</div><div class="dbs-value">' + stats.questoesRespondidas + '</div></div>';
    html += '<div class="db-stat dbs-real"><div class="dbs-label">Taxa de acerto</div><div class="dbs-value">' + taxa + '%</div></div>';
    html += '<div class="db-stat dbs-flash"><div class="dbs-label">Flashcards estudados</div><div class="dbs-value">' + (stats.flashcardsEstudados || 0) + '</div></div>';
    html += '<div class="db-stat dbs-sim"><div class="dbs-label">Simulados</div><div class="dbs-value">' + AppState.simulados.length + '</div></div>';
    html += '<div class="db-stat"><div class="dbs-label">Tempo de estudo (estimado)</div><div class="dbs-value">' + esc(formatMinutes(minutos)) + '</div></div>';
    html += '</div>';
    html += '<h2 class="section-title">Evolução — últimos 14 dias</h2><div class="stats-block">';
    if (maxTotal === 0) html += '<div style="color:var(--text-muted);font-size:14px;">Sem atividade registrada nos últimos 14 dias.</div>';
    else {
      html += '<div class="evolution-grid">';
      for (var e = 0; e < daily.length; e++) {
        var day = daily[e]; var hPct = maxTotal > 0 ? Math.round((day.total / maxTotal) * 100) : 0; var cls = 'evolution-bar';
        if (day.date === hoje) cls += ' today';
        html += '<div class="evolution-day" title="' + esc(day.date) + ' — ' + day.total + ' atividades"><div class="' + cls + '" style="height:' + Math.max(hPct, 3) + '%"></div><div class="evolution-label">' + esc(day.label) + '</div></div>';
      }
      html += '</div>';
      html += '<div class="evolution-legend"><span><span class="dot" style="background:var(--primary);"></span>Atividade por dia</span><span><span class="dot" style="background:var(--purple);"></span>Hoje</span></div>';
    }
    html += '</div>';
    html += '<div class="stats-grid-2" style="margin-top:18px;">';
    html += '<div class="stats-block"><h3><span class="sb-icon">📚</span> Desempenho por módulo</h3>';
    if (porModulo.length === 0) html += '<div style="color:var(--text-muted);font-size:14px;">Responda questões para gerar este painel.</div>';
    else { for (var i = 0; i < porModulo.length; i++) { var pm = porModulo[i]; var clsM = pm.pct >= 70 ? 'good' : (pm.pct >= 40 ? 'mid' : 'bad'); html += '<div class="stats-bar"><div class="stats-bar-label" title="' + esc(pm.modulo.titulo) + '">' + esc(pm.modulo.id) + ' — ' + esc(pm.modulo.titulo) + '</div><div class="stats-bar-track"><div class="stats-bar-fill ' + clsM + '" style="width:' + pm.pct + '%"></div></div><div class="stats-bar-value">' + pm.pct + '%</div></div>'; } }
    html += '</div>';
    html += '<div class="stats-block"><h3><span class="sb-icon">⚙️</span> Desempenho por dificuldade</h3>';
    if (porDif.length === 0) html += '<div style="color:var(--text-muted);font-size:14px;">Sem dados.</div>';
    else { for (var j = 0; j < porDif.length; j++) { var pd = porDif[j]; var clsD = pd.pct >= 70 ? 'good' : (pd.pct >= 40 ? 'mid' : 'bad'); html += '<div class="stats-bar"><div class="stats-bar-label">' + esc(pd.label) + '</div><div class="stats-bar-track"><div class="stats-bar-fill ' + clsD + '" style="width:' + pd.pct + '%"></div></div><div class="stats-bar-value">' + pd.pct + '%</div></div>'; } }
    html += '<h3 style="margin-top:16px;"><span class="sb-icon">🏷️</span> Desempenho por tipo</h3>';
    if (porTipo.length === 0) html += '<div style="color:var(--text-muted);font-size:14px;">Sem dados.</div>';
    else { for (var t = 0; t < porTipo.length; t++) { var pt = porTipo[t]; var clsT = pt.pct >= 70 ? 'good' : (pt.pct >= 40 ? 'mid' : 'bad'); html += '<div class="stats-bar"><div class="stats-bar-label">' + esc(pt.label) + '</div><div class="stats-bar-track"><div class="stats-bar-fill ' + clsT + '" style="width:' + pt.pct + '%"></div></div><div class="stats-bar-value">' + pt.pct + '%</div></div>'; } }
    html += '</div></div>';
    html += '<h2 class="section-title">Ranking de erros</h2>';
    if (ranking.length === 0) html += '<div class="rev-empty">Nenhum erro registrado.</div>';
    else {
      html += '<div class="rank-list">';
      for (var r = 0; r < Math.min(ranking.length, 10); r++) {
        var ri = ranking[r];
        html += '<div class="rank-item"><div class="rank-pos">' + (r + 1) + 'º</div>';
        html += '<div class="rank-body"><div class="rank-title">' + esc(ri.q.enunciado) + '</div>';
        html += '<div class="rank-meta">' + esc(ri.q.id + ' · ' + ri.q.moduloId + ' · ' + ri.q.subtema) + ' · acertos: ' + ri.acertos + ' / tentativas: ' + ri.tentativas + '</div></div>';
        html += '<div class="rank-value bad">' + ri.erros + ' erro' + (ri.erros > 1 ? 's' : '') + '</div>';
        html += '<button class="btn btn-danger" style="padding:6px 10px;font-size:12.5px;" data-action="revisar-questao-unica" data-question-id="' + esc(ri.q.id) + '">Revisar</button></div>';
      }
      html += '</div>';
    }
    html += '<div class="stats-grid-2" style="margin-top:18px;">';
    html += '<div class="stats-block"><h3><span class="sb-icon">🧠</span> Domínio estimado por módulo</h3>';
    var domComDados = []; for (var k = 0; k < dominios.length; k++) if (dominios[k].temDados) domComDados.push(dominios[k]);
    if (domComDados.length === 0) html += '<div style="color:var(--text-muted);font-size:14px;">Faça diagnósticos ou responda questões para estimar domínio.</div>';
    else { for (var x = 0; x < domComDados.length; x++) { var dm = domComDados[x]; var clsDom = dm.dominio >= 70 ? 'good' : (dm.dominio >= 40 ? 'mid' : 'bad'); html += '<div class="stats-bar"><div class="stats-bar-label" title="' + esc(dm.modulo.titulo) + '">' + esc(dm.modulo.id) + ' — ' + esc(dm.modulo.titulo) + '</div><div class="stats-bar-track"><div class="stats-bar-fill ' + clsDom + '" style="width:' + dm.dominio + '%"></div></div><div class="stats-bar-value">' + dm.dominio + '%</div></div>'; } }
    html += '</div>';
    html += '<div class="stats-block"><h3><span class="sb-icon">⭐</span> Assuntos fortes e fracos</h3>';
    if (domComDados.length === 0) html += '<div style="color:var(--text-muted);font-size:14px;">Sem dados suficientes.</div>';
    else {
      var fortes = domComDados.slice(0, 3); var fracos = domComDados.slice(-3).reverse();
      html += '<div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--success);margin-bottom:6px;">Pontos fortes</div>';
      html += '<div class="rank-list" style="margin-bottom:12px;">';
      for (var fI = 0; fI < fortes.length; fI++) { var ff = fortes[fI]; html += '<div class="rank-item"><div class="rank-pos">✓</div><div class="rank-body"><div class="rank-title">' + esc(ff.modulo.titulo) + '</div><div class="rank-meta">' + esc(ff.modulo.id) + '</div></div><div class="rank-value good">' + ff.dominio + '%</div></div>'; }
      html += '</div>';
      html += '<div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--danger);margin-bottom:6px;">Pontos a reforçar</div>';
      html += '<div class="rank-list">';
      for (var fJ = 0; fJ < fracos.length; fJ++) { var fw = fracos[fJ]; html += '<div class="rank-item"><div class="rank-pos">!</div><div class="rank-body"><div class="rank-title">' + esc(fw.modulo.titulo) + '</div><div class="rank-meta">' + esc(fw.modulo.id) + '</div></div><div class="rank-value bad">' + fw.dominio + '%</div></div>'; }
      html += '</div>';
    }
    html += '</div></div>';
    html += footerHtml();
    return html;
  }

  /* ============================================================
     SETTINGS
  ============================================================ */
  function renderSettings() {
    var totalModulos = MODULES.length;
    var modulosComEstado = 0;
    for (var i = 0; i < MODULES.length; i++) if (AppState.modules[MODULES[i].id]) modulosComEstado++;
    var temaAtual = (AppState.settings && AppState.settings.theme) || 'light';
    var temaLabel = temaAtual === 'dark' ? '🌙 Escuro' : '☀️ Claro';
    var proximoLabel = temaAtual === 'dark' ? 'Mudar para ☀️ Claro' : 'Mudar para 🌙 Escuro';
    var html = '';
    html += '<h1 class="page-title">Configurações</h1><p class="page-subtitle">Preferências e gestão do progresso.</p>';
    html += '<h2 class="section-title">Aparência</h2><div class="info-list">';
    html += infoRow('Tema atual', temaLabel);
    html += '</div>';
    html += '<p style="margin-top:12px;"><button class="btn btn-primary theme-btn" data-action="toggle-theme">' + esc(proximoLabel) + '</button></p>';
    html += '<h2 class="section-title">Backup completo</h2>';
    html += '<div class="notice">Exporta o estado inteiro (progresso, questões vistas, flashcards, simulados, tema). Útil para backup ou migração.</div>';
    html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-primary" data-action="export-full-state">📤 Exportar backup completo</button></div>';
    html += '<div class="io-box" style="margin-top:14px;"><h3><span>📥</span> Importar backup completo</h3><p>Cole o JSON gerado acima. O progresso atual será substituído <strong>somente após sua confirmação</strong>.</p>';
    html += '<textarea id="importFullStateTextarea" placeholder=\'{"exportedAt":"...","appVersion":"...","state":{...}}\'></textarea>';
    html += '<div class="io-actions"><button class="btn btn-primary" data-action="import-full-state">Validar e restaurar</button></div></div>';
    html += '<h2 class="section-title">Armazenamento</h2><div class="info-list">';
    html += infoRow('Chave de armazenamento', STORAGE_KEY);
    html += infoRow('Versão do schema', SCHEMA_VERSION);
    html += infoRow('Módulos catalogados', totalModulos);
    html += infoRow('Aulas cadastradas', Object.keys(LESSONS).length);
    html += infoRow('Diagnósticos cadastrados', Object.keys(DIAGNOSTICS).length);
    html += infoRow('Questões cadastradas', QUESTIONS.length + ' (' + qRealCount() + ' reais, ' + qDidCount() + ' didáticas)');
    html += infoRow('Flashcards cadastrados', FLASHCARDS.length);
    html += infoRow('Simulados no histórico', AppState.simulados.length);
    html += infoRow('Revisões pendentes (vencidas)', countDueAll());
    html += infoRow('Erros em aberto', countErrorsAll());
    html += infoRow('Módulos com estado', modulosComEstado);
    html += infoRow('Criado em', formatDate(AppState.createdAt));
    html += infoRow('Atualizado em', formatDate(AppState.updatedAt));
    html += '</div>';
    html += '<h2 class="section-title">Zerar progresso</h2>';
    html += '<div class="notice">Apaga módulos, diagnóstico, questões, flashcards, simulados, revisões, erros, estatísticas e histórico. Ação irreversível.</div>';
    html += '<p style="margin-top:12px;"><button class="btn btn-danger" data-action="reset-progress">Zerar progresso</button></p>';
    html += footerHtml();
    return html;
  }

  /* ============================================================
     SOBRE
  ============================================================ */
  function renderAbout() {
    var html = '';
    html += '<h1 class="page-title">Sobre</h1><p class="page-subtitle">Informações do aplicativo.</p>';
    html += '<h2 class="section-title">Informações</h2><div class="info-list">';
    html += infoRow('Aplicativo', APP_NAME);
    html += infoRow('Descrição', APP_SUBTITLE || '—');
    html += infoRow('Público-alvo', SOBRE.publicoAlvo || '—');
    html += infoRow('Base', SOBRE.baseLegal || '—');
    html += infoRow('Versão', 'v' + APP_VERSION);
    html += infoRow('Schema de dados', 'v' + SCHEMA_VERSION);
    html += infoRow('Aulas cadastradas', Object.keys(LESSONS).length + ' / ' + MODULES.length);
    html += infoRow('Diagnósticos cadastrados', Object.keys(DIAGNOSTICS).length + ' / ' + MODULES.length);
    html += infoRow('Questões cadastradas', QUESTIONS.length + ' (' + qRealCount() + ' reais, ' + qDidCount() + ' didáticas)');
    html += infoRow('Flashcards cadastrados', FLASHCARDS.length);
    html += infoRow('Simulados', AppState.simulados.length);
    html += infoRow('Regra de conclusão', 'Aula lida + diagnóstico com domínio 100%');
    html += infoRow('Modo', 'Offline — sem servidor ou IA externa');
    html += '</div>';
    if (SOBRE.observacoes) html += '<h2 class="section-title">Observações</h2><div class="notice">' + esc(SOBRE.observacoes) + '</div>';
    html += footerHtml();
    return html;
  }

  /* ============================================================
     AÇÕES
  ============================================================ */
  function openModule(modId) {
    if (!getModule(modId)) return;
    var st = getModuleUserState(modId);
    if (st.status === 'nao_iniciado') st.status = 'em_estudo';
    st.ultimaAtividade = new Date().toISOString();
    saveState();
    navigate('modulo-detalhe', { moduleId: modId });
  }
  function openLesson(lessonId) {
    var lesson = getLessonById(lessonId); if (!lesson) return;
    var st = getModuleUserState(lesson.moduloId);
    if (st.status === 'nao_iniciado') st.status = 'em_estudo';
    st.ultimaAtividade = new Date().toISOString();
    saveState();
    navigate('licao', { lessonId: lessonId });
  }
  function markLessonRead(lessonId) {
    var lesson = getLessonById(lessonId); if (!lesson) return;
    var st = getModuleUserState(lesson.moduloId);
    if (!Array.isArray(st.aulasLidas)) st.aulasLidas = [];
    if (st.aulasLidas.indexOf(lesson.id) === -1) st.aulasLidas.push(lesson.id);
    st.ultimaAtividade = new Date().toISOString();
    checkModuleCompletion(lesson.moduloId);
    saveState(); render();
  }
  function setModuleFilter(f) { if (['todas'].concat(Object.keys(AREA_LABELS)).indexOf(f) === -1) return; moduleFilter = f; render(); }
  function setQuestionFilterArea(a) {
    if (['todas'].concat(Object.keys(AREA_LABELS)).indexOf(a) === -1) return;
    questionFilter.area = a;
    if (questionFilter.moduloId !== 'todos') { var mm = getModule(questionFilter.moduloId); if (!mm || (a !== 'todas' && mm.area !== a)) questionFilter.moduloId = 'todos'; }
    render();
  }
  function setQuestionFilterModulo(v) { questionFilter.moduloId = v || 'todos'; render(); }
  function setQuestionFilterDificuldade(v) { questionFilter.dificuldade = v || 'todas'; render(); }
  function setQuestionFilterTipo(v) { questionFilter.tipo = v || 'TODAS'; render(); }
  function setQuestionFilterStatus(v) { questionFilter.status = v || 'todas'; render(); }
  function startQuestionsByModule(modId) { questionFilter.area = 'todas'; questionFilter.moduloId = modId; questionFilter.dificuldade = 'todas'; questionFilter.tipo = 'TODAS'; questionFilter.status = 'todas'; navigate('questoes'); }
  function setFlashcardFilterArea(a) { if (['todas'].concat(Object.keys(AREA_LABELS)).indexOf(a) === -1) return; flashcardFilter.area = a; flashcardFilter.moduloId = 'todos'; render(); }
  function startFlashcardsAll() { var ids = FLASHCARDS.map(function (f) { return f.id; }); if (ids.length === 0) { window.alert('Nenhum flashcard cadastrado ainda.'); return; } startFlashcardSession(ids, 'livre'); }
  function startFlashcardsDue() { var due = getDueFlashcards().map(function (f) { return f.id; }); if (due.length === 0) { window.alert('Nenhum flashcard vencido no momento.'); return; } startFlashcardSession(due, 'revisao'); }
  function startFlashcardsByModule(modId) { var cards = fcByModule(modId); var ids = cards.map(function (f) { return f.id; }); startFlashcardSession(ids, 'livre'); }
  function startRevisionQuestions() { var due = getDueQuestions().map(function (q) { return q.id; }); if (due.length === 0) { window.alert('Nenhuma questão vencida no momento.'); return; } startQuestionSession(due, 'revisao'); }
  function startRevisionFlashcards() { var due = getDueFlashcards().map(function (f) { return f.id; }); if (due.length === 0) { window.alert('Nenhum flashcard vencido no momento.'); return; } startFlashcardSession(due, 'revisao'); }
  function startErrorsSession() { var errs = getErrorQuestions().map(function (q) { return q.id; }); if (errs.length === 0) { window.alert('Nenhuma questão no caderno de erros.'); return; } startQuestionSession(errs, 'erros'); }
  function revisarQuestaoUnica(qid) { if (!getQuestion(qid)) return; startQuestionSession([qid], 'revisao'); }
  function revisarFlashcardUnico(fid) { if (!getFlashcard(fid)) return; startFlashcardSession([fid], 'revisao'); }
  function setSimuladoMode(m) { if (m !== 'SIMULADO' && m !== 'PROVA_CONCURSO') return; simuladoConfig.modo = m; render(); }
  function setSimuladoQuantidade(v) { if (v === 'custom') { simuladoConfig.quantidade = 'custom'; if (!simuladoConfig.customQty) simuladoConfig.customQty = '30'; } else { var n = parseInt(v, 10); if (!isFinite(n)) return; simuladoConfig.quantidade = n; } render(); }
  function setSimuladoCustomQty(v) { simuladoConfig.customQty = v; render(); }
  function setSimuladoArea(a) { if (['todas'].concat(Object.keys(AREA_LABELS)).indexOf(a) === -1) return; simuladoConfig.area = a; if (simuladoConfig.moduloId !== 'todos') { var mm = getModule(simuladoConfig.moduloId); if (!mm || (a !== 'todas' && mm.area !== a)) simuladoConfig.moduloId = 'todos'; } render(); }
  function setSimuladoModulo(v) { simuladoConfig.moduloId = v || 'todos'; render(); }
  function setSimuladoDificuldade(v) { simuladoConfig.dificuldade = v || 'todas'; render(); }
  function setSimuladoTipo(v) { simuladoConfig.tipo = v || 'TODAS'; render(); }
  function setSimuladoStatus(v) { simuladoConfig.status = v || 'todas'; render(); }
  function simuladoByModule(modId) { simuladoConfig.modo = 'SIMULADO'; simuladoConfig.area = 'todas'; simuladoConfig.moduloId = modId; simuladoConfig.dificuldade = 'todas'; simuladoConfig.tipo = 'TODAS'; simuladoConfig.status = 'todas'; if (simuladoConfig.quantidade === 'custom' && (!simuladoConfig.customQty || parseInt(simuladoConfig.customQty, 10) < 1)) simuladoConfig.quantidade = 10; navigate('simulados'); }
  function toggleSidebar() { document.body.classList.toggle('sidebar-open'); }
  function showProfessorAnswer(lessonId, key) { if (professorAnswerOpen && professorAnswerOpen.lessonId === lessonId && professorAnswerOpen.key === key) professorAnswerOpen = null; else professorAnswerOpen = { lessonId: lessonId, key: key }; render(); var el = document.querySelector('.professor-answer'); if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  function startDiagnostic(modId) { var diag = getDiagnosticByModuleId(modId); if (!diag) { window.alert('Diagnóstico ainda não cadastrado para este módulo.'); return; } diagRunning.moduleId = modId; diagRunning.answers = {}; diagRunning.itemIndex = 0; diagRunning.revealed = {}; navigate('diagnostico', { moduleId: modId }); }
  function answerDiag(altId) { var diag = getDiagnosticByModuleId(diagRunning.moduleId); if (!diag) return; var item = diag.itens[diagRunning.itemIndex]; if (!item) return; if (Object.prototype.hasOwnProperty.call(diagRunning.answers, item.id)) return; diagRunning.answers[item.id] = altId; render(); }
  function nextDiag() { var diag = getDiagnosticByModuleId(diagRunning.moduleId); if (!diag) return; if (diagRunning.itemIndex < diag.itens.length - 1) { diagRunning.itemIndex += 1; render(); var main = document.getElementById('main'); if (main) main.scrollTop = 0; } }
  function prevDiag() { if (diagRunning.itemIndex > 0) { diagRunning.itemIndex -= 1; render(); var main = document.getElementById('main'); if (main) main.scrollTop = 0; } }
  function cancelDiag() { if (!window.confirm('Cancelar o diagnóstico? As respostas não serão salvas.')) return; diagRunning.moduleId = null; diagRunning.answers = {}; diagRunning.itemIndex = 0; navigate('modulos'); }
  function finishDiag() {
    var moduleId = diagRunning.moduleId; var diag = getDiagnosticByModuleId(moduleId); if (!diag) return;
    for (var i = 0; i < diag.itens.length; i++) if (!Object.prototype.hasOwnProperty.call(diagRunning.answers, diag.itens[i].id)) { window.alert('Existem itens não respondidos. Volte e complete.'); diagRunning.itemIndex = i; render(); return; }
    var result = computeDiagnosticResult(moduleId, diagRunning.answers);
    var st = getModuleUserState(moduleId);
    st.diagnostico = { diagId: diag.id, answers: Object.assign({}, diagRunning.answers), result: result, completedAt: result.completedAt, tentativas: (st.diagnostico && st.diagnostico.tentativas ? st.diagnostico.tentativas : 0) + 1 };
    st.dominioEstimado = result.dominioEstimado;
    st.ultimaAtividade = new Date().toISOString();
    checkModuleCompletion(moduleId);
    saveState();
    diagRunning.moduleId = null; diagRunning.answers = {}; diagRunning.itemIndex = 0;
    navigate('diag-resultado', { moduleId: moduleId });
  }
  function openDiagResult(modId) { if (!getModuleUserState(modId).diagnostico) return; navigate('diag-resultado', { moduleId: modId }); }
  function refazerDiag(modId) { if (!window.confirm('Refazer o diagnóstico? O resultado anterior será substituído.')) return; startDiagnostic(modId); }

  function exportFullState() {
    downloadJson('backup-' + APP_NAME.toLowerCase().replace(/\s+/g, '-') + '-' + new Date().toISOString().slice(0, 10) + '.json', {
      exportedAt: new Date().toISOString(), appVersion: APP_VERSION, schemaVersion: SCHEMA_VERSION, tipo: 'BACKUP_COMPLETO', state: AppState
    });
  }
  function validateIncomingState(obj) {
    var erros = [];
    if (!obj || typeof obj !== 'object') return { erros: ['Arquivo inválido.'], state: null };
    var state = obj.state || obj;
    if (typeof state !== 'object' || state === null) return { erros: ['Estrutura "state" ausente ou inválida.'], state: null };
    if (!state.schemaVersion) erros.push('Sem schemaVersion.');
    if (state.modules !== undefined && (typeof state.modules !== 'object' || state.modules === null)) erros.push('Campo "modules" com formato inesperado.');
    if (state.questions !== undefined && (typeof state.questions !== 'object' || state.questions === null)) erros.push('Campo "questions" com formato inesperado.');
    if (state.flashcards !== undefined && (typeof state.flashcards !== 'object' || state.flashcards === null)) erros.push('Campo "flashcards" com formato inesperado.');
    if (state.simulados !== undefined && !Array.isArray(state.simulados)) erros.push('Campo "simulados" deve ser array.');
    return { erros: erros, state: state };
  }
  function importFullStateFromText(text) {
    var parsed; try { parsed = JSON.parse(text); } catch (e) { window.alert('JSON inválido: ' + e.message); return; }
    var check = validateIncomingState(parsed);
    if (check.erros.length > 0) { window.alert('Backup rejeitado:\n\n- ' + check.erros.join('\n- ')); return; }
    var st = check.state;
    var resumo = ['Módulos: ' + Object.keys(st.modules || {}).length, 'Questões vistas: ' + Object.keys(st.questions || {}).length, 'Flashcards vistos: ' + Object.keys(st.flashcards || {}).length, 'Simulados: ' + ((st.simulados && st.simulados.length) || 0)].join('\n');
    if (!window.confirm('Substituir o progresso atual pelo backup?\n\n' + resumo + '\n\nA ação não pode ser desfeita.')) return;
    var base = createDefaultState();
    AppState = { schemaVersion: SCHEMA_VERSION, appVersion: APP_VERSION, createdAt: st.createdAt || base.createdAt, updatedAt: new Date().toISOString(), settings: Object.assign({}, base.settings, st.settings || {}), modules: st.modules || {}, questions: st.questions || {}, flashcards: st.flashcards || {}, simulados: Array.isArray(st.simulados) ? st.simulados : [], stats: Object.assign({}, base.stats, st.stats || {}), lastScreen: 'dashboard' };
    saveState(); applyTheme(AppState.settings && AppState.settings.theme);
    currentScreen = 'dashboard'; currentModuleId = null; currentLessonId = null;
    render(); window.alert('Backup restaurado com sucesso.');
  }
  function resetProgress() {
    if (!window.confirm('Zerar todo o progresso?\n\nApaga módulos, diagnóstico, questões, flashcards, simulados, revisões e erros. Não é possível desfazer.')) return;
    localStorage.removeItem(STORAGE_KEY); AppState = createDefaultState(); saveState();
    currentScreen = 'dashboard'; currentModuleId = null; currentLessonId = null; moduleFilter = 'todas'; professorAnswerOpen = null;
    diagRunning = { moduleId: null, answers: {}, itemIndex: 0, revealed: {} };
    questionFilter = { area: 'todas', moduloId: 'todos', dificuldade: 'todas', tipo: 'TODAS', status: 'todas' };
    questionRunning = null; window.__lastSession = null; importReport = null;
    flashcardFilter = { area: 'todas', moduloId: 'todos' }; flashcardRunning = null; window.__lastFlashSession = null;
    simuladoConfig = { modo: 'SIMULADO', quantidade: 10, customQty: '', area: 'todas', moduloId: 'todos', dificuldade: 'todas', tipo: 'TODAS', status: 'todas' };
    simuladoRunning = null; currentSimuladoId = null;
    render(); window.alert('Progresso zerado.');
  }

  /* ============================================================
     EVENTOS
  ============================================================ */
  document.addEventListener('click', function (e) {
    var navEl = e.target.closest('[data-nav]');
    if (navEl) { e.preventDefault(); navigate(navEl.getAttribute('data-nav')); return; }
    var mfEl = e.target.closest('[data-filter]');
    if (mfEl) { e.preventDefault(); setModuleFilter(mfEl.getAttribute('data-filter')); return; }
    var qfaEl = e.target.closest('[data-qf-area]');
    if (qfaEl) { e.preventDefault(); setQuestionFilterArea(qfaEl.getAttribute('data-qf-area')); return; }
    var fcfEl = e.target.closest('[data-fcf-area]');
    if (fcfEl) { e.preventDefault(); setFlashcardFilterArea(fcfEl.getAttribute('data-fcf-area')); return; }
    var simModeEl = e.target.closest('[data-sim-mode]');
    if (simModeEl) { e.preventDefault(); setSimuladoMode(simModeEl.getAttribute('data-sim-mode')); return; }
    var simQtyEl = e.target.closest('[data-sim-qty]');
    if (simQtyEl) { e.preventDefault(); setSimuladoQuantidade(simQtyEl.getAttribute('data-sim-qty')); return; }
    var simAreaEl = e.target.closest('[data-sim-area]');
    if (simAreaEl) { e.preventDefault(); setSimuladoArea(simAreaEl.getAttribute('data-sim-area')); return; }
    var actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;
    var action = actionEl.getAttribute('data-action');
    e.preventDefault();
    switch (action) {
      case 'toggle-sidebar': toggleSidebar(); break;
      case 'open-module': openModule(actionEl.getAttribute('data-module-id')); break;
      case 'open-lesson': openLesson(actionEl.getAttribute('data-lesson-id')); break;
      case 'mark-lesson-read': markLessonRead(actionEl.getAttribute('data-lesson-id')); break;
      case 'professor-answer': showProfessorAnswer(actionEl.getAttribute('data-lesson-id'), actionEl.getAttribute('data-key')); break;
      case 'start-diag': startDiagnostic(actionEl.getAttribute('data-module-id')); break;
      case 'open-diag-result': openDiagResult(actionEl.getAttribute('data-module-id')); break;
      case 'refazer-diag': refazerDiag(actionEl.getAttribute('data-module-id')); break;
      case 'diag-answer': answerDiag(actionEl.getAttribute('data-alt')); break;
      case 'diag-next': nextDiag(); break;
      case 'diag-prev': prevDiag(); break;
      case 'diag-cancel': cancelDiag(); break;
      case 'diag-finish': finishDiag(); break;
      case 'start-question-session': startQuestionSession(null, 'livre'); break;
      case 'answer-question': answerQuestion(actionEl.getAttribute('data-alt')); break;
      case 'next-question': nextQuestion(); break;
      case 'prev-question': prevQuestion(); break;
      case 'cancel-question-session': cancelQuestionSession(); break;
      case 'finish-question-session': finishQuestionSession(); break;
      case 'questions-by-module': startQuestionsByModule(actionEl.getAttribute('data-module-id')); break;
      case 'export-questions': exportQuestions(); break;
      case 'export-progress': exportProgress(); break;
      case 'import-questions': { var ta = document.getElementById('importTextarea'); if (ta) importQuestionsFromText(ta.value || ''); break; }
      case 'clear-import': clearImport(); break;
      case 'load-sample': loadImportSample(); break;
      case 'start-flashcards-all': startFlashcardsAll(); break;
      case 'start-flashcards-due': startFlashcardsDue(); break;
      case 'start-flashcards-by-module': startFlashcardsByModule(actionEl.getAttribute('data-module-id')); break;
      case 'flashcards-by-module': startFlashcardsByModule(actionEl.getAttribute('data-module-id')); break;
      case 'reveal-flashcard': revealFlashcard(); break;
      case 'answer-flashcard': answerFlashcard(actionEl.getAttribute('data-level')); break;
      case 'cancel-flashcard-session': cancelFlashcardSession(); break;
      case 'start-revision-questions': startRevisionQuestions(); break;
      case 'start-revision-flashcards': startRevisionFlashcards(); break;
      case 'start-errors-session': startErrorsSession(); break;
      case 'revisar-questao-unica': revisarQuestaoUnica(actionEl.getAttribute('data-question-id')); break;
      case 'revisar-flashcard-unico': revisarFlashcardUnico(actionEl.getAttribute('data-flashcard-id')); break;
      case 'start-simulado': startSimulado('SIMULADO'); break;
      case 'start-prova-concurso': startSimulado('PROVA_CONCURSO'); break;
      case 'sim-answer': answerSimulado(actionEl.getAttribute('data-alt')); break;
      case 'sim-clear-answer': clearSimuladoAnswer(); break;
      case 'sim-next': nextSimulado(); break;
      case 'sim-prev': prevSimulado(); break;
      case 'sim-goto': gotoSimuladoIndex(actionEl.getAttribute('data-index')); break;
      case 'sim-finish': finishSimulado(); break;
      case 'cancel-simulado': cancelSimulado(); break;
      case 'open-simulado-detail': openSimuladoDetail(actionEl.getAttribute('data-sim-id')); break;
      case 'delete-simulado': deleteSimulado(actionEl.getAttribute('data-sim-id')); break;
      case 'simulado-by-module': simuladoByModule(actionEl.getAttribute('data-module-id')); break;
      case 'simulado-com-filtros':
        simuladoConfig.area = questionFilter.area;
        simuladoConfig.moduloId = questionFilter.moduloId;
        simuladoConfig.dificuldade = questionFilter.dificuldade;
        simuladoConfig.tipo = questionFilter.tipo;
        simuladoConfig.status = questionFilter.status;
        simuladoConfig.modo = 'SIMULADO';
        navigate('simulados');
        break;
      case 'toggle-theme': toggleTheme(); break;
      case 'export-full-state': exportFullState(); break;
      case 'import-full-state': { var elFull = document.getElementById('importFullStateTextarea'); if (elFull) importFullStateFromText(elFull.value || ''); break; }
      case 'reset-progress': resetProgress(); break;
    }
  });
  document.addEventListener('change', function (e) {
    var el = e.target; if (!el) return;
    if (el.id === 'qFilterModulo') setQuestionFilterModulo(el.value);
    else if (el.id === 'qFilterDificuldade') setQuestionFilterDificuldade(el.value);
    else if (el.id === 'qFilterTipo') setQuestionFilterTipo(el.value);
    else if (el.id === 'qFilterStatus') setQuestionFilterStatus(el.value);
    else if (el.id === 'simFilterModulo') setSimuladoModulo(el.value);
    else if (el.id === 'simFilterDificuldade') setSimuladoDificuldade(el.value);
    else if (el.id === 'simFilterTipo') setSimuladoTipo(el.value);
    else if (el.id === 'simFilterStatus') setSimuladoStatus(el.value);
  });
  document.addEventListener('input', function (e) {
    var el = e.target; if (!el) return;
    if (el.id === 'simCustomQty') setSimuladoCustomQty(el.value);
  });

  /* ============================================================
     INIT
  ============================================================ */
  function init() {
    AppState = loadState();
    applyTheme(AppState.settings && AppState.settings.theme);
    currentScreen = 'dashboard'; currentModuleId = null; currentLessonId = null; moduleFilter = 'todas'; professorAnswerOpen = null;
    diagRunning = { moduleId: null, answers: {}, itemIndex: 0, revealed: {} };
    questionFilter = { area: 'todas', moduloId: 'todos', dificuldade: 'todas', tipo: 'TODAS', status: 'todas' };
    questionRunning = null; window.__lastSession = null; importReport = null;
    flashcardFilter = { area: 'todas', moduloId: 'todos' }; flashcardRunning = null; window.__lastFlashSession = null;
    simuladoConfig = { modo: 'SIMULADO', quantidade: 10, customQty: '', area: 'todas', moduloId: 'todos', dificuldade: 'todas', tipo: 'TODAS', status: 'todas' };
    simuladoRunning = null; currentSimuladoId = null;
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
