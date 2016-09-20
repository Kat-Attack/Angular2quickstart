import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }   from './hero-detail.component';

//tells the router which views to display when a user clicks a link or pastes a URL into the browser address bar
const appRoutes: Routes = [ // array of route definitions
    {
        path: '',
        redirectTo: '/dashboard', // redirects starting page to /dashboard
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id', // routing to hero details depending on their id. Colon indicates :id is a placeholder
        component: HeroDetailComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
