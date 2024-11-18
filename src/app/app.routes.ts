import { Routes } from '@angular/router';
import { PlaceListComponent } from './place-list/place-list.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
    { path: 'places', component: PlaceListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginFormComponent },
];
