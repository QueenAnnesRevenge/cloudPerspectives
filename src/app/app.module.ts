import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MenuComponent,
    MentionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
