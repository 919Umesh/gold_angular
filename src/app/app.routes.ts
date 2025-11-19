import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Transaction } from './transaction/transaction';
import { Login } from './login/login';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path:'',component:Home},
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'about', component: About },
    { 
    path: 'profile', 
    component: Profile,
    canActivate: [AuthGuard] 
    },
   // { path: 'profile', component: Profile },
   // { path: 'transactions', component: Transaction },
   { 
    path: 'transactions', 
    component: Transaction,
    canActivate: [AuthGuard]  // Protected route
  },
    { path: '**', redirectTo: '' } 
];
