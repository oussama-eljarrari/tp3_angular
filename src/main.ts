import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // ← chemin mis à jour

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));