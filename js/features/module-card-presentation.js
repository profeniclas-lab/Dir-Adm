/** Fase 21 Lote 4 — apresentação do progresso resumido no Dashboard.
 * Funções puras: não modificam o estado nem alteram o aproveitamento.
 */
const completedLessonStage = (lessons, module) => {
  const expected = Array.isArray(module?.subtopics) ? module.subtopics.length : 0;
  // Cobertura integral das aulas disponíveis é validada pelo módulo de aproveitamento.
  return expected > 0 && lessons?.total === expected &&
    lessons.completed === expected && lessons.rated === expected;
};
export function moduleCardPresentation(item) {
  const {module, achievement, diagnostic, lessons, exercises} = item;
  const diagnosticDone = diagnostic?.completed === true;
  const lessonsDone = completedLessonStage(lessons,module);
  const exercisesDone = exercises?.finished === true;
  const stagesDone = [diagnosticDone,lessonsDone,exercisesDone].filter(Boolean).length;
  const points = Number.isFinite(achievement?.earnedWeightedPoints) ? achievement.earnedWeightedPoints : 0;
  const completed = item.completed === true;
  const next = !diagnosticDone ? 'Concluir diagnóstico' :
    !lessonsDone ? (lessons?.completed === lessons?.total && lessons?.total > 0 ? 'Autoavaliar aulas' : 'Estudar aulas') :
    !exercisesDone ? 'Finalizar exercícios' :
    completed ? 'Concluído — continuar revisando' : 'Reforçar exercícios e revisar conteúdos';
  return {points,stagesDone,totalStages:3,completed,next};
}
export function displayModulePoints(points) {
  return `${Number.isFinite(points) ? points.toLocaleString('pt-BR',{maximumFractionDigits:2}) : '0'}%`;
}
