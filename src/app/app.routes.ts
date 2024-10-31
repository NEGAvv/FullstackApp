import { Routes } from '@angular/router';
import { PlaceListComponent } from './place-list/place-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'places', component: PlaceListComponent },
    { path: 'home', component: HomeComponent },
];
