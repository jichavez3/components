import { Routes } from '@angular/router';
import { LinksComponent } from './links/links.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: LinksComponent },
    { path: 'about', component: AboutComponent }
];
