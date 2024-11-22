import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CAT_FACTS, LOGIN } from '../../../utils/const';

export const loginGuard: CanActivateFn = ({ data }: ActivatedRouteSnapshot) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);

  const isAuthenticated = authService.getAuthState;
  const redirectIfLoggedIn = data['redirectIfLoggedIn'] as boolean;

  if (redirectIfLoggedIn) {
    if (isAuthenticated) {
      router.navigate([CAT_FACTS]);
      return false;
    }
  } else {
    if (!isAuthenticated) {
      router.navigate([LOGIN], { replaceUrl: true });
      return false;
    }
  }

  return true;
};
