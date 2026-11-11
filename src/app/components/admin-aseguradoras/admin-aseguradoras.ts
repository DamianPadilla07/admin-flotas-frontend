import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo';

@Component({
  selector: 'app-admin-aseguradoras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-aseguradoras.html'
})
export class AdminAseguradorasComponent {
  
  aseguradora: any = {
    nombre: '',
    telefonoContacto: ''
  };

  constructor(private vehiculoService: VehiculoService) {}

  guardarAseguradora() {
    // Necesitas agregar este método en tu VehiculoService (ver paso 4)
    this.vehiculoService.crearAseguradora(this.aseguradora).subscribe({
      next: (res: any) => {
        this.aseguradora = { nombre: '', telefonoContacto: '' };
        setTimeout(() => alert('Aseguradora registrada con éxito.'), 10);
      },
      error: (err: any) => console.error(err)
    });
  }
}