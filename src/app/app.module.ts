//modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroePageComponent } from './components/heroe-page/heroe-page.component';
//rutas
import { AppRoutingModule } from './app-routing.module';
//servicios
import { HeroesService } from './services/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //aqui se colocan los servicios
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
