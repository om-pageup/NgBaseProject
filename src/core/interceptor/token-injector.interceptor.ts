import { HttpInterceptorFn } from '@angular/common/http';
import { localStorageKey } from '../constants/localStorageKey.constant';

export const tokenInjectorInterceptor: HttpInterceptorFn = (request, next) => {

  let token;
  let lToken = localStorage.getItem(localStorageKey.jwt);
  if (lToken) {
    token = JSON.parse(lToken);
  }

  request = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

  return next(request);
};
