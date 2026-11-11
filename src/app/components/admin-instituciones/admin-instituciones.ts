import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo';

@Component({
  selector: 'app-admin-instituciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-instituciones.html'
})
export class AdminInstitucionesComponent {
  institucion: any = { ruc: '', razonSocial: '' };

  constructor(private vehiculoService: VehiculoService, private cdr: ChangeDetectorRef) {}

  guardarInstitucion() {
    if (!this.institucion.ruc || !this.institucion.razonSocial) {
      alert('Llene todos los campos');
      return;
    }

    this.vehiculoService.crearInstitucion(this.institucion).subscribe({
      next: (res: any) => {
        this.institucion = { ruc: '', razonSocial: '' };
        this.cdr.detectChanges();
        setTimeout(() => alert('Institución registrada con éxito.'), 10);
      },
      error: (err: any) => {
        alert('Error al guardar. Verifica la consola.');
        console.error(err);
      }
    });
  }
}