import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

providers: [
  provideRouter(routes),
  importProvidersFrom(FormsModule),
  provideHttpClient()   // ✅ ADD THIS
]
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),   // ✅ REQUIRED
    importProvidersFrom(FormsModule)
  ]
};