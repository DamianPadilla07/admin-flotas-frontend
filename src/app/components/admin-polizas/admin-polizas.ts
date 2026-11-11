import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo';

@Component({
  selector: 'app-admin-polizas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-polizas.html'
})
export class AdminPolizasComponent implements OnInit {
  
  aseguradoras: any[] = [];
  poliza: any = {
    numeroPoliza: '',
    montoCobertura: null,
    fechaExpiracion: '', // campo alineado al Core
    aseguradora: { id: null } 
  };

  constructor(private vehiculoService: VehiculoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.vehiculoService.getAseguradoras().subscribe((data: any) => {
      this.aseguradoras = data;
    });
  }

  guardarPoliza() {
    if (!this.poliza.aseguradora.id) {
      alert('Seleccione a qué Aseguradora pertenece esta póliza');
      return;
    }

    this.vehiculoService.crearPoliza(this.poliza).subscribe({
      next: (res: any) => {
        // Limpieza de datos incluyendo la fecha
        this.poliza = { numeroPoliza: '', montoCobertura: null, fechaExpiracion: '', aseguradora: { id: null } };
        this.cdr.detectChanges();
        setTimeout(() => alert('Póliza registrada con éxito.'), 10);
      },
      error: (err: any) => {
        alert('Error al guardar. Verifica la consola.');
        console.error(err);
      }
    });
  }
}