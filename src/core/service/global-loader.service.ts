import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  private apiCnt: number = 0;

  public isLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public showLoader() {
    this.apiCnt++;
    if (this.apiCnt > 0) {
      this.isLoader$.next(true);
    }
  }

  public hideLoader() {
    this.apiCnt--;
    if (this.apiCnt == 0) {
      this.isLoader$.next(false);
    }
  }
}
