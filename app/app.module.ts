import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,  Route, Routes, PreloadingStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MailModule } from './mail/mail.module';
import { AuthMoudle } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';


import { AppComponent } from './app.component';

// export class CustomPreload implements PreloadingStrategy {
//   preload(route: Route, fn: () => Observable<any>): Observable<any> {
//     return route.data && route.data.preload ? fn() : Observable.of(null);
//   }
// }

export const ROUTES: Routes = [
  // { path: 'dashboard', data: { preload: true }, loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'dashboard', canLoad: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    AuthMoudle,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{}
