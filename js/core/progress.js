export const MODULE_PROGRESS_WEIGHTS = Object.freeze({
  diagnostic: 20,
  lessonCompletion: 15,
  lessonSelfAssessment: 15,
  exercises: 50
});

export function calculatePartialAchievement(scores = {}) {
  const components = [
    ["diagnostic", MODULE_PROGRESS_WEIGHTS.diagnostic],
    ["lessonCompletion", MODULE_PROGRESS_WEIGHTS.lessonCompletion],
    ["lessonSelfAssessment", MODULE_PROGRESS_WEIGHTS.lessonSelfAssessment],
    ["exercises", MODULE_PROGRESS_WEIGHTS.exercises]
  ];

  let earned = 0;
  let availableWeight = 0;

  for (const [key, weight] of components) {
    const component = scores[key];
    if (!component || component.available !== true) continue;

    const score = Number(component.score);
    const safeScore = Number.isFinite(score)
      ? Math.min(100, Math.max(0, score))
      : 0;

    earned += (safeScore / 100) * weight;
    availableWeight += weight;
  }

  return {
    percentage: availableWeight
      ? Math.round(earned)
      : null,
    earnedWeightedPoints: Math.round(earned * 100) / 100,
    availableWeight,
    coveragePercentage: Math.round(availableWeight),
    hasData: availableWeight > 0
  };
}

export function isModuleCompleted(achievement, threshold = 75) {
  return Number.isFinite(achievement?.percentage) &&
    achievement.availableWeight === 100 &&
    achievement.percentage >= threshold;
}
