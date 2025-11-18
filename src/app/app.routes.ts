import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Transaction } from './transaction/transaction';

export const routes: Routes = [
    {path:'',component:Home},
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'profile', component: Profile },
    { path: 'transactions', component: Transaction },
    { path: '**', redirectTo: '' } 
];
