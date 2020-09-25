import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { OauthCallbackComponent } from './components/oauth-callback/oauth-callback.component';
import { WebRouteRoutes } from './web-route.routing';

@NgModule({
  imports: [
    CommonModule,
    WebRouteRoutes
  ],
  declarations: [
    WebComponent,
    OauthCallbackComponent
  ]
})
export class WebModule { }
