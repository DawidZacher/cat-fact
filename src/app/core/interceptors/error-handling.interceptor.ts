import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log(
        '%c Place to show notification error message snackbar ',
        'background: #42baff; color: #fff'
      );

      return throwError(() => error);
    })
  );
};
