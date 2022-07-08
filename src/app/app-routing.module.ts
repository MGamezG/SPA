import { BuscarComponent } from './components/buscar/buscar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroePageComponent } from './components/heroe-page/heroe-page.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
    //redirecciona al primer componente, o al home
    //dependiendo de la ruta espesificada para la redireccion
  },
  {
    path:'heroes',
    component:HeroesComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'heroe/:id',
    component:HeroePageComponent
  },
  {
    path:'search/:termino',
    component:BuscarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
