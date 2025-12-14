import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Configure the router with routes and enable component input binding
    // to allow passing data to route components via inputs
    // Eg: products/electronics can pass 'electronics' as input to ProductsGrid component 
    provideRouter(routes,withComponentInputBinding())
  ]
};
