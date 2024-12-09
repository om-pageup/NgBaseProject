import { Component } from '@angular/core';
import { GlobalLoaderService } from '../../service/global-loader.service';

@Component({
  selector: 'app-global-loader',
  standalone: false,

  templateUrl: './global-loader.component.html',
  styleUrl: './global-loader.component.scss'
})
export class GlobalLoaderComponent {

  public showLoader: boolean = false;

  constructor(private _loader: GlobalLoaderService) {
    this._loader.isLoader$.subscribe(
      (res: boolean) => {
        this.showLoader = res;
      }
    )
  }
}
