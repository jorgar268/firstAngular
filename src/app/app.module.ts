import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/components/footer/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
//import { ServiceWorkerModule } from '@angular/service-worker';
//import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    FooterComponent,
    AboutComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
