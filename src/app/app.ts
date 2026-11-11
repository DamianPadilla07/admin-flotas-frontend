import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para el *ngIf
import { AdminVehiculosComponent } from './components/admin-vehiculos/admin-vehiculos';
import { AdminAseguradorasComponent } from './components/admin-aseguradoras/admin-aseguradoras';
import { AdminPolizasComponent } from './components/admin-polizas/admin-polizas';
import { AdminInstitucionesComponent } from './components/admin-instituciones/admin-instituciones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    AdminVehiculosComponent, 
    AdminAseguradorasComponent, 
    AdminPolizasComponent,
    AdminInstitucionesComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {
  // Por defecto, al abrir la página, el administrador verá primero las instituciones
  vistaActual: string = 'instituciones';

  cambiarVista(vista: string) {
    this.vistaActual = vista;
  }
}