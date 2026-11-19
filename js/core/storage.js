import { createInitialState, normalizeState } from "./state.js";

export const STORAGE_KEY = "admEstudo.v2.state";

export function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeState(JSON.parse(raw)) : createInitialState();
  } catch (error) {
    console.error("[ADM-ESTUDO] Falha ao carregar progresso:", error);
    return createInitialState();
  }
}

export function saveState(state) {
  try {
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
