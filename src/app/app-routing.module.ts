import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidateRegistrationComponent } from './auth/candidate-registration/candidate-registration.component';
import { RegisterComponent } from './auth/register/register.component';

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'dashboard',
    /* canActivate: [AuthGuardGuard], */
    component: DashboardComponent,
    children:[
      {
        path:'candidate-registration',
        component:CandidateRegistrationComponent
      }
    ] 
  },
  { 
    path: 'register', 
    component: RegisterComponent  
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}