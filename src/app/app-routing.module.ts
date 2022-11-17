import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MentionsComponent } from './pages/mentions/mentions.component';

const routes: Routes = [
  {path:'login', component:ConnexionComponent},
  {path:'mentions', component:MentionsComponent},
  {path:'connexion', component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
