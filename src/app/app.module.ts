import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInjectorInterceptor } from '../core/interceptor/token-injector.interceptor';
import { GlobalLoaderComponent } from '../core/components/global-loader/global-loader.component';
import { loaderHandlerInterceptor } from '../core/interceptor/loader-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GlobalLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptors([loaderHandlerInterceptor, tokenInjectorInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
