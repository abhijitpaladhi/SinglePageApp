import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';

import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component'

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '404', component: NoContentComponent },
    { path: '**', component: NoContentComponent }
]