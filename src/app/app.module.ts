import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { appRoutes } from './app.routers';

import { ProductManagementModule } from './product-management/product-management.module';


import { LoginComponent } from './components/login/login.component';

// Service
import { MovieService } from './services/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductManagementModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
