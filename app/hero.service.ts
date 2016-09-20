import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() // typescript emits metadata, metadata that may need to inject other dependencies into this service.

export class HeroService {

    // getHeros(): Hero[] {
    //     return HEROES;
    // } this function is synchronous. We need it to be async so we use promises

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    // getHeroesSlowly(): Promise<Hero[]> {
    // return new Promise<Hero[]>(resolve =>
    //     setTimeout(resolve, 2000)) // delay 2 seconds
    //     .then(() => this.getHeroes());
    // } // wait 2s before resolving

}
