import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {environment} from '../environments/environment'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = environment;

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync()]
};
