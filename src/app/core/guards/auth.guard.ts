import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';

export const authGuard = () => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  if (authState.isAuthenticated()) {
    return true;
  }

  // Redirect to login
  router.navigate(['/login']);
  return false;
}; 