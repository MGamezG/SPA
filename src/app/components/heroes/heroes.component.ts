import { Component, OnInit } from '@angular/core';
import { HeroesService,heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';//elemento importante para la redireccion

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:heroe[]=[]
  constructor(private heroService:HeroesService,
               private router:Router) {
    console.log('ejecutando constructor')

  }

  ngOnInit(): void {
    console.log('ejecutando ngOnInit');
    this.heroes=this.heroService.getHeroes();
    console.log(this.heroes);

  }
  verHeroe(index:number){
    console.warn(index)
    this.router.navigate(['/heroe',index])
  }

}
