import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { JokeComponent } from "./components/joke/joke.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "joke", component: JokeComponent },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
