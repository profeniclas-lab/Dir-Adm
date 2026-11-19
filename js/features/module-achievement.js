import { calculatePartialAchievement } from '../core/progress.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { lessonStats } from './lessons.js';
import { exerciseSummary } from './exercises.js';
export function moduleAchievement(state,module){
 const diagnostic=getDiagnosticSummary(state,module.id);
 const stats=lessonStats(state,module);
 const scores=diagnostic?.completed?{diagnostic:{available:true,score:diagnostic.score}}:{};
 if(stats){scores.lessonCompletion={available:true,score:stats.completionScore};if(stats.ratingScore!==null)scores.lessonSelfAssessment={available:true,score:stats.ratingScore};}
 const exercise=exerciseSummary(state,module.id);
 if(exercise?.finished)scores.exercises={available:true,score:exercise.score};
 return calculatePartialAchievement(scores);
}
