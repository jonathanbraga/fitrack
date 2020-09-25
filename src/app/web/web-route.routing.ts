import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWebComponent } from './components/home-web/home-web.component';
import { OauthCallbackComponent } from './components/oauth-callback/oauth-callback.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: 'home',
        component: HomeWebComponent
      },
      {
        path: 'oauth-callback',
        component: OauthCallbackComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRouteRoutes {}
