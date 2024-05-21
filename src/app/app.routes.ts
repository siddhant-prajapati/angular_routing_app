import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
    { 
        path: 'first-component', 
        component: FirstComponent,
        children: [
            {
              path: 'child-a', // child route path
              component: ChildAComponent, // child route component that the router renders
            },
            {
              path: 'child-b',
              component: ChildBComponent, // another child route component that the router renders
            },
          ], 
          canActivate : [authGuard]
    },
    { path: 'second-component', component: SecondComponent },
    { path: 'login', component : LoginComponent},
    { path: '**', component: PageNotFoundComponent },
];
