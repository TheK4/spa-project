import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { AboutPageComponent } from './app/about-page/about-page.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { RegisterPageComponent } from './app/register-page/register-page.component';
import { FaqPageComponent } from './app/faq-page/faq-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', component: HomePageComponent }, // Define a HomePage como rota inicial
  { path: 'sobre', component: AboutPageComponent }, // Nova rota para a página "Sobre"
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'faq', component: FaqPageComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch(err => console.error(err));
