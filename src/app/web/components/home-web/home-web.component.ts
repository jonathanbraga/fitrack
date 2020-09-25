import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/core/auth/auth.config';
import { AuthService } from 'src/app/core/auth/auth.service';
import { KEYS_LOCALSTORAGE, LocalStorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-home-web',
  templateUrl: './home-web.component.html',
  styleUrls: ['./home-web.component.scss']
})
export class HomeWebComponent {

  constructor(
    private oauthService: OAuthService,
    private localStorageService: LocalStorageService,
    private authService: AuthService) {
      if (!this.localStorageService.containsKey(KEYS_LOCALSTORAGE.code)) {
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.initLoginFlow();
      }
      this.authService.requestAccessToken(
        this.localStorageService.getObj(KEYS_LOCALSTORAGE.client_id),
        `${this.localStorageService.getObj(KEYS_LOCALSTORAGE.client_secret)}`,
        this.localStorageService.getObj(KEYS_LOCALSTORAGE.code),
        'authorization_code');
  }
}
