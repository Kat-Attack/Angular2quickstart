import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes'; file deleted

@Injectable() // typescript emits metadata, metadata that may need to inject other dependencies into this service.

export class HeroService {

    // getHeros(): Hero[] {
    //     return HEROES;
    // } this function is synchronous. We need it to be async so we use promises

    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    // } replaced with HTTP version

    // getHeroesSlowly(): Promise<Hero[]> {
    // return new Promise<Hero[]>(resolve =>
    //     setTimeout(resolve, 2000)) // delay 2 seconds
    //     .then(() => this.getHeroes());
    // } // wait 2s before resolving

    getHero(id: number): Promise<Hero> {
    return this.getHeroes()
                .then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private heroesUrl = 'app/heroes';  // URL to web api

    // get info from server
    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);
    }

    // send info to server
    private headers = new Headers({'Content-Type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


}
