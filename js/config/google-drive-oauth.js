/** Lote 8 — configuração pública (NÃO inserir client secret, senha nem token). */
export const DRIVE_OAUTH_CONFIG = Object.freeze({
  // No Google Cloud > Google Auth Platform > Clientes, copie SOMENTE o Client ID
  // de um aplicativo "Aplicativo da Web". O ID termina em apps.googleusercontent.com.
  clientId: 'INSIRA_AQUI_SEU_CLIENT_ID.apps.googleusercontent.com',
  // O nome é próprio deste aplicativo. Outros apps terão arquivos diferentes.
  folderName: 'ADM-ESTUDO',
  fileName: 'ADM-ESTUDO-progresso.json'
});
