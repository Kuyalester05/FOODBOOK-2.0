import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Home } from './components/home/home';
import { Post } from './components/post/post';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'home', component: Home },
    { path: 'post', component: Post },
];