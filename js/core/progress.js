/** Fase 21 Lote 1 — cálculo exclusivamente derivado, sem modificar o estado salvo. */
export const MODULE_PROGRESS_WEIGHTS = Object.freeze({
  diagnostic: 20,
  lessonCompletion: 15,
  lessonSelfAssessment: 15,
  exercises: 50
});

const COMPONENTS = Object.entries(MODULE_PROGRESS_WEIGHTS);
const clamp = score => Number.isFinite(Number(score)) ? Math.max(0, Math.min(100, Number(score))) : 0;
const round2 = n => Math.round(n * 100) / 100;

export function calculatePartialAchievement(scores = {}) {
  let earned = 0;
  let availableWeight = 0;
  const components = {};
  for (const [key, weight] of COMPONENTS) {
    const component = scores[key];
    const available = component?.available === true;
    const points = available ? (clamp(component.score) * weight / 100) : 0;
    components[key] = { weight, points: round2(points), available };
    earned += points;
    if (available) availableWeight += weight;
  }
  return {
    percentage: availableWeight ? Math.round(earned) : null,
    earnedWeightedPoints: round2(earned),
    availableWeight,
    coveragePercentage: availableWeight,
    hasData: availableWeight > 0,
    components
  };
}

/** Somente a avaliação completa pode retirar o módulo das pendências. */
export function isModuleCompleted(achievement, threshold = 75) {
  return Number.isFinite(achievement?.percentage) &&
    achievement.availableWeight === 100 &&
    achievement.earnedWeightedPoints >= threshold;
}
