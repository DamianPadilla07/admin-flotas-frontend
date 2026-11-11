import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';
import { provideServerRendering } from '@angular/platform-server';
import { mergeApplicationConfig } from '@angular/core';

// Unimos la configuración base con el motor de renderizado del servidor
const config = mergeApplicationConfig(appConfig, {
  providers: [provideServerRendering()]
});

const bootstrap = () => bootstrapApplication(AppComponent, config);
export default bootstrap;