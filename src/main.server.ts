import { AppComponent } from './app/app.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideServerRendering()
  ]
}).catch(err => console.error(err));
