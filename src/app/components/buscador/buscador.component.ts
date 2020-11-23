import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[];
  termino: string;

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ){
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroes(params.termino);
      this.termino = params.termino;
    });
   }

  ngOnInit(): void {}

  verHeroe(id: number): void {
    console.log('click');
    this.router.navigate(['heroe', id]);
  }
}
