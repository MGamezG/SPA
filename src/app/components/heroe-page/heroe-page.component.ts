import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styleUrls: ['./heroe-page.component.scss']
})
export class HeroePageComponent implements OnInit {
  heroe:any={};
  constructor(private actiateRouter:ActivatedRoute,
              private heroService:HeroesService) {
                this.actiateRouter.params.subscribe(
                  (params:Params)=>{
                    console.log(params['id']);
                    this.heroe=this.heroService.getHeroe(params['id']);
                  }
                )
              }

  ngOnInit(): void {
  }

}
