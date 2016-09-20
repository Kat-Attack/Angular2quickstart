import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
	selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }
  
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

  constructor(
    private router: Router,
    private heroService: HeroService) { 

    }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); //list of heros will wait 2s before getting
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}