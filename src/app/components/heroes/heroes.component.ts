import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes/heroes.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) {
    console.log('Costructor Heroes Component...');
   }

  ngOnInit(): void { // Se ejecuta cuando se carga la pagina
    console.log('Pagina Heroes cargada...');
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(id: number): void{
    this.router.navigate(['heroe', id]);
  }

}
