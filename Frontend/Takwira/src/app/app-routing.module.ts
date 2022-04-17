import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { LoginComponent } from './login/login.component';
import { ReserverComponent } from './reserver/reserver.component';


const routes: Routes = [
  { path: 'reserver', component: ReserverComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ajouter', component: AjouterComponent },
  { path: 'inscrit', component: InscritComponent },
  { path: 'footer', component: FooterComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
