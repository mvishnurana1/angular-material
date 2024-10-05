import { Routes } from '@angular/router';
import { ErrorPageComponent, HomeComponent } from './pages';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: ErrorPageComponent },
];
