export interface AuthResult {
    accessToken: string;
}

export enum AuthStorageKeys {
    AccessToken = 'access_token',
    IdTokenPayload = 'id_token_payload',
    ExpiresAt = 'expires',
    RedirectUri = 'redirect_uri'
  }
