import { Component, OnInit } from '@angular/core';
import { HeroesService,heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:heroe[]=[]
  constructor(private heroService:HeroesService) {
    console.log('ejecutando constructor')
  }

  ngOnInit(): void {
    console.log('ejecutando ngOnInit');
    this.heroes=this.heroService.getHeroes();
    console.log(this.heroes);

  }

}
