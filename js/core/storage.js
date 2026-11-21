import { createInitialState, normalizeState } from "./state.js";
import { inspectStoredProgress, validateStateForSaving } from "./storage-safety.js";

export const STORAGE_KEY = "admEstudo.v2.state";

export function loadState() {
  try {
    const status = inspectStoredProgress();
    if (!status.ok) { console.error("[ADM-ESTUDO] Progresso protegido:", status.message); return createInitialState(); }
    return status.code === "empty" ? createInitialState() : normalizeState(status.state);
  } catch (error) {
    console.error("[ADM-ESTUDO] Falha ao carregar progresso:", error);
    return createInitialState();
  }
}

export function saveState(state) {
  try {
    const status = inspectStoredProgress();
    if (!status.ok) return { ok: false, blocked: true, message: status.message };
    if (!validateStateForSaving(state)) return { ok: false, blocked: true, message: "Estado atual inválido. Gravação bloqueada." };
    const stateToSave = {
      ...state,
      metadata: {
        ...(state.metadata || {}),
        updatedAt: new Date().toISOString()
      }
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    return { ok: true };
  } catch (error) {
    console.error("[ADM-ESTUDO] Falha ao salvar progresso:", error);
    return { ok: false, error };
  }
}
