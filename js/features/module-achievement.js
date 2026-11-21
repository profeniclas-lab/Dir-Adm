import { calculatePartialAchievement } from '../core/progress.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { lessonStats } from './lessons.js';
import { exerciseSummary } from './exercises.js';

/** Não utiliza a quantidade ou as respostas do banco contínuo de questões. */
export function moduleAchievement(state, module) {
  const diagnostic = getDiagnosticSummary(state, module.id);
  const lessons = lessonStats(state, module);
  const exercises = exerciseSummary(state, module.id);
  const scores = {};
  if (diagnostic?.completed) scores.diagnostic = { available: true, score: diagnostic.score };
  if (lessons) {
    scores.lessonCompletion = { available: true, score: lessons.completionScore };
    if (lessons.ratingScore !== null) {
      scores.lessonSelfAssessment = { available: true, score: lessons.ratingScore };
    }
  }
  if (exercises?.finished) scores.exercises = { available: true, score: exercises.score };
  return calculatePartialAchievement(scores);
}
