import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JokeComponent} from './components/joke/joke.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'joke', component: JokeComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
