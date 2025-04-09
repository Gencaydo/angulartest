import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { IndexComponent } from './core/components/index/index.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
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
    path: 'register', 
    component: RegisterComponent 
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { 
        path: 'index', 
        component: IndexComponent
      },
      { 
        path: 'profile', 
        component: ProfileComponent
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'login' 
  }
];
