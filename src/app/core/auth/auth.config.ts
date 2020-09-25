import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    loginUrl: 'https://www.strava.com/oauth/authorize',
    redirectUri: 'http://localhost:4200/web/oauth-callback',
    clientId: '54078',
    responseType: 'code',
    scope: 'activity:read_all',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false
  };
