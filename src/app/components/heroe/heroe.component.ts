import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private heroeService: HeroesService,
              private activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe(params.id);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {}
}
