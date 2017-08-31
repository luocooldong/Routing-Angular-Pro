import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [
        AuthService,
        AuthGuard
    ]
})
export class AuthModule{

}