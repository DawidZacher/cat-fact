import { Injectable } from '@angular/core'
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs'
import { LoginUser } from '../../../shared/models/auth.model'
import { CAT_FACTS, IS_LOGGIN } from '../../../utils/const'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private router: Router) {
    this.auth$.next(this.getLoginStatus)
  }

  public loginUser({ email, password }: LoginUser): Observable<unknown> {
    // Mock API login request //
    return of({ email, password }).pipe(
      delay(1000),
      tap(() => {
        localStorage.setItem(IS_LOGGIN, 'true')
        this.setAuth = true
        this.router.navigate([CAT_FACTS], { replaceUrl: true })
      })
    )
  }

  public get getAuth(): Observable<boolean> {
    return this.auth$.asObservable()
  }

  public logout(): void {
    localStorage.removeItem(IS_LOGGIN)
    this.setAuth = false
  }

  private set setAuth(isAuth: boolean) {
    this.auth$.next(isAuth)
  }

  private get getLoginStatus(): boolean {
    return localStorage.getItem(IS_LOGGIN) === 'true'
  }
}
