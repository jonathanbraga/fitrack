import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KEYS_LOCALSTORAGE, LocalStorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-oauth-callback',
  templateUrl: './oauth-callback.component.html',
  styleUrls: ['./oauth-callback.component.scss']
})
export class OauthCallbackComponent {

  constructor(
      private activatedRoute: ActivatedRoute,
      private localStorageService: LocalStorageService,
      private router: Router) {
        this.activatedRoute.queryParams.subscribe(params => {
          this.localStorageService.setObj(KEYS_LOCALSTORAGE.code, params.code);
          this.router.navigate(['web', 'home']);
        });
  }
}
