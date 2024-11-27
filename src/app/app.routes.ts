import { Routes } from '@angular/router';
import { PlaceListComponent } from './place-list/place-list.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { Page404Component } from './page404/page404.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'places', component: PlaceListComponent },
    { path: 'place/:id', component: PlaceDetailsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginFormComponent },
    { path: '404', component: Page404Component },
    { path: '**', redirectTo: '404' },
];
