/** Fase 18 — Lote 2: inspeção de backups sem escrita no armazenamento. */
import { STORAGE_KEY } from './storage.js';
import { STATE_SCHEMA_VERSION } from './state.js';

export const BACKUP_MAX_BYTES = 20 * 1024 * 1024;
const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const isDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value));

export function validateProgressBackup(value) {
  const errors = [];
  const warnings = [];
  if (!isObject(value)) return { valid: false, errors: ['O arquivo deve conter um objeto JSON.'], warnings, summary: null };
  if (value.format !== 'adm-estudo-progress-backup') errors.push('Identificação do formato de backup incorreta.');
  if (value.backupVersion !== 1) errors.push('Versão do formato de backup não suportada.');
  if (value.storageKey !== STORAGE_KEY) errors.push('O arquivo pertence a outra chave de armazenamento.');
  if (!isDate(value.createdAt)) errors.push('Data de criação do backup inválida.');
  if (!isObject(value.state)) errors.push('O estado pedagógico não é um objeto válido.');
  const state = isObject(value.state) ? value.state : {};
  if (value.schemaVersion !== STATE_SCHEMA_VERSION || state.schemaVersion !== STATE_SCHEMA_VERSION || value.schemaVersion !== state.schemaVersion) {
    errors.push(`Esquema incompatível: o aplicativo exige a versão ${STATE_SCHEMA_VERSION}.`);
  }
  if (!isObject(state.progress)) errors.push('A seção progress está ausente ou inválida.');
  if (!isObject(state.navigation)) errors.push('A seção navigation está ausente ou inválida.');
  if (!isObject(state.preferences)) errors.push('A seção preferences está ausente ou inválida.');
  if (!isObject(state.metadata)) errors.push('A seção metadata está ausente ou inválida.');
  const progress = isObject(state.progress) ? state.progress : {};
  for (const key of ['modules','lessons','diagnostics','exercises','questionHistory','flashcards']) {
    if (!isObject(progress[key])) errors.push(`Seção progress.${key} ausente ou inválida.`);
  }
  if (!Array.isArray(progress.errors)) errors.push('A lista progress.errors está ausente ou inválida.');
  if (!Array.isArray(progress.reviewQueue)) errors.push('A lista progress.reviewQueue está ausente ou inválida.');
  if (hasOwn(progress,'reviewSchedule') && !isObject(progress.reviewSchedule)) errors.push('progress.reviewSchedule inválida.');
  if (hasOwn(progress,'simulados') && !isObject(progress.simulados)) errors.push('progress.simulados inválida.');
  if (isObject(progress.simulados)) {
    if (hasOwn(progress.simulados,'history') && !Array.isArray(progress.simulados.history)) errors.push('Histórico de simulados inválido.');
    if (hasOwn(progress.simulados,'active') && progress.simulados.active !== null && !isObject(progress.simulados.active)) errors.push('Simulado ativo inválido.');
  }
  if (isDate(value.createdAt) && Date.parse(value.createdAt) > Date.now() + 86400000) warnings.push('O backup informa uma data de criação no futuro.');
  if (isObject(state.metadata) && isDate(state.metadata.updatedAt) && Date.parse(state.metadata.updatedAt) > Date.now() + 86400000) warnings.push('O progresso informa uma data de atualização no futuro.');
  if (isObject(progress.modules) && !Object.keys(progress.modules).length) warnings.push('Nenhum progresso de módulos foi encontrado; isso pode ser normal em uma instalação nova.');
  const summary = {
    createdAt: isDate(value.createdAt) ? value.createdAt : null,
    schemaVersion: state.schemaVersion ?? null,
    modules: isObject(progress.modules) ? Object.keys(progress.modules).length : 0,
    lessons: isObject(progress.lessons) ? Object.keys(progress.lessons).length : 0,
    errors: Array.isArray(progress.errors) ? progress.errors.length : 0,
    simulations: Array.isArray(progress.simulados?.history) ? progress.simulados.history.length : 0
  };
  return { valid: errors.length === 0, errors, warnings, summary };
}

export async function inspectProgressBackupFile(file) {
  if (!file) return { valid: false, errors: ['Selecione um arquivo de backup.'], warnings: [], summary: null };
  if (file.size > BACKUP_MAX_BYTES) return { valid: false, errors: ['Arquivo maior que 20 MB. Nenhum dado foi processado.'], warnings: [], summary: null };
  if (file.size === 0) return { valid: false, errors: ['O arquivo está vazio.'], warnings: [], summary: null };
  if (!/\.json$/i.test(file.name)) return { valid: false, errors: ['Selecione um arquivo com extensão .json.'], warnings: [], summary: null };
  try { return validateProgressBackup(JSON.parse(await file.text())); }
  catch (_) { return { valid: false, errors: ['Não foi possível interpretar o JSON.'], warnings: [], summary: null }; }
}
