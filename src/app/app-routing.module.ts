import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
