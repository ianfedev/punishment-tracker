import {ApplicationConfig, NgZone, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {

  providers: [
    { provide: NgZone, useValue: 'noop' },
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration()
  ]
};
