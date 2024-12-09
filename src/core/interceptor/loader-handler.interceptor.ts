import { HttpInterceptorFn } from '@angular/common/http';
import { GlobalLoaderService } from '../service/global-loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderHandlerInterceptor: HttpInterceptorFn = (request, next) => {
  
  const _loader: GlobalLoaderService = inject(GlobalLoaderService);

  if (request.headers.get('showLoader') == true+'') {
    _loader.showLoader();
  }

  return next(request).pipe(
    finalize(() => {
      if (request.headers.get('showLoader') == true+'') {
        _loader.hideLoader();
      }
    })
  );
};
