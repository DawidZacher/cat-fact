import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { firstValueFrom } from 'rxjs';
import { LOGIN } from '../../../utils/const';

export const loginGuard: CanActivateFn = async () => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  const isAuthenticated = await firstValueFrom(authService.getAuth);

  if (!isAuthenticated) {
    router.navigate([LOGIN], { replaceUrl: true });
    return false;
  }

  return true;
};
