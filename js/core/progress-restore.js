/** Fase 18 — Lote 3. Restauração integral, validada e confirmada. */
import { STORAGE_KEY } from './storage.js';
import { BACKUP_MAX_BYTES, validateProgressBackup } from './progress-backup-validator.js';
import { normalizeRecoveryInput, protectCurrentProgress, RECOVERY_KEY } from './progress-recovery-guard.js';

export async function prepareProgressRestore(file) {
  if (!file || !/\.json$/i.test(file.name) || file.size === 0 || file.size > BACKUP_MAX_BYTES)
    return { ok: false, message: 'Selecione um JSON válido de até 20 MB.' };
  let backup;
  try { backup = JSON.parse(await file.text()); }
  catch (_) { return { ok: false, message: 'Não foi possível interpretar o arquivo JSON.' }; }
  const checked = normalizeRecoveryInput(backup);
  if (!checked.ok) return { ok: false, message: checked.message };
  return { ok: true, backup: checked.backup, validation: checked.validation, source: checked.source };
}

/** Cria cópia local de recuperação antes de qualquer substituição. */
function downloadRecoveryCopy(raw) {
  const blob = new Blob([raw], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `adm-estudo-recuperacao-anterior-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
  document.body.appendChild(link);
  try { link.click(); } finally { link.remove(); setTimeout(() => URL.revokeObjectURL(url), 30000); }
}

export function restoreProgressBackup(prepared, confirmed = false) {
  if (!confirmed || !prepared?.ok) return { ok: false, message: 'Restauração não autorizada.' };
  const validation = validateProgressBackup(prepared.backup);
  if (!validation.valid) return { ok: false, message: 'O arquivo deixou de ser válido. Nenhum dado foi alterado.' };
  const previous = localStorage.getItem(STORAGE_KEY);
  let replacement;
  try { replacement = JSON.stringify(prepared.backup.state); }
  catch (_) { return { ok: false, message: 'Não foi possível preparar os dados.' }; }
  // Exige confirmação do download da cópia anterior quando há dados existentes.
  if (previous !== null) {
    try { downloadRecoveryCopy(previous); }
    catch (_) { return { ok: false, message: 'Falha ao preparar cópia de recuperação. Nada foi alterado.' }; }
  }
  const protectedResult = protectCurrentProgress(previous, replacement);
  if (!protectedResult.ok) return { ok: false, message: protectedResult.message };
  try {
    localStorage.setItem(STORAGE_KEY, replacement);
    if (localStorage.getItem(STORAGE_KEY) !== replacement) throw Error('Falha na verificação de gravação');
    return { ok: true, message: 'Dados restaurados. Cópia anterior preservada no armazenamento local (chave '+RECOVERY_KEY+'). Guarde também o arquivo baixado. Recarregue o aplicativo.' };
  } catch (_) {
    try { if (previous === null) localStorage.removeItem(STORAGE_KEY); else localStorage.setItem(STORAGE_KEY, previous); }
    catch (_) { return { ok: false, message: 'Falha ao gravar e ao recuperar dados anteriores. NÃO feche a página; procure ajuda.' }; }
    return { ok: false, message: 'Falha ao gravar. O estado anterior foi recuperado.' };
  }
}
