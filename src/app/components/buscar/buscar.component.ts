import { HeroesService } from 'src/app/services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  heroess:any[]=[];
  termino:string | undefined;
  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService,
              ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(
      params=>{
        console.log(params['termino']);
        this.termino=params['termino'];
        this.heroess=this._heroeService.buscarHeroes(params['termio'])
        console.log(this.heroess);
      }
    )
  }


}
