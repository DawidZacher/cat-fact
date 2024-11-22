import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { LoginUser } from '../../../shared/models/auth.model';
import { CAT_FACTS, AUTH_TOKEN, LOGIN, JWT } from '../../../utils/const';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public loginUser({ email, password }: LoginUser): Observable<unknown> {
    // Mock API login request //
    return of({ email, password }).pipe(
      delay(1000),
      tap(() => {
        localStorage.setItem(AUTH_TOKEN, JWT);
        this.router.navigate([CAT_FACTS]);
      })
    );
  }

  public get getAuthState(): boolean {
    return localStorage.getItem(AUTH_TOKEN) === JWT;
  }

  public logout(): void {
    localStorage.removeItem(AUTH_TOKEN);
    this.router.navigate([LOGIN]);
  }
}
