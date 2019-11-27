export interface GenerateOauthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  user_name: string;
  jti: string;
}
