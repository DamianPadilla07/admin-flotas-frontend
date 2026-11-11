
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';




@Component({
  selector: 'app-admin-vehiculos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-vehiculos.html',
  styleUrls: ['./admin-vehiculos.css']
})
export class AdminVehiculosComponent implements OnInit {
  
  aseguradoras: any[] = [];
  polizas: any[] = [];
  
  // Objeto estructurado exactamente como lo espera Spring Boot
 instituciones: any[] = [];
  vehiculo: any = {
  placa: '',
  modelo: '',
  umbralDepreciacion: null,
  poliza: { id: null },
  institucion: { id: null } //  Nuevo enlace
};

  constructor(private vehiculoService: VehiculoService, private cdr: ChangeDetectorRef) {}
ngOnInit(): void {
  // Cargar aseguradoras existentes...
  this.vehiculoService.getAseguradoras().subscribe((data: any) => this.aseguradoras = data);
  // Cargar las instituciones para el nuevo dropdown
  this.vehiculoService.getInstituciones().subscribe((data: any) => this.instituciones = data);
}
  cargarAseguradoras() {
    this.vehiculoService.getAseguradoras().subscribe((data: any) => {
      this.aseguradoras = data;
    });
  }

  // Ahora recibe el ID directamente gracias al ngModelChange
  onAseguradoraChange(idAseguradora: any) {
    this.vehiculo.poliza.id = null; // Limpia la póliza si cambian de aseguradora
    
    if (idAseguradora) {
      this.vehiculoService.getPolizasByAseguradora(idAseguradora).subscribe((data: any) => {
        this.polizas = data;
      });
    } else {
      this.polizas = []; 
    }
  }

  guardarVehiculo() {
  if (!this.vehiculo.poliza.id) {
    alert('Por favor, seleccione una póliza válida.');
    return;
  }

  this.vehiculoService.crearVehiculo(this.vehiculo).subscribe({
    next: (res: any) => {
      this.limpiarFormulario();

      // FUERZA LA ACTUALIZACIÓN INSTANTÁNEA
      this.cdr.detectChanges(); 

      // Le damos un respiro minúsculo al navegador antes del alert
      setTimeout(() => {
        alert('Vehículo registrado con éxito para el Core.');
      }, 10);
    },
    error: (err: any) => {
      alert('Error del Servidor: ' + (err.error?.message || 'Datos inválidos. Verifica la consola.'));
      console.error(err);
    }
  });
}

  // Limpia la pantalla después de un registro exitoso
  limpiarFormulario() {
    this.vehiculo = {
      placa: '',
      modelo: '',
      umbralDepreciacion: null,
      idAseguradora: null,
      poliza: { id: null }
    };
    this.polizas = []; // Esto vacía el segundo selector
    
    // Forzar limpieza del primer selector si es necesario
    const aseguradoraSelect = document.querySelector('select[name="aseguradoraId"]') as HTMLSelectElement;
    if (aseguradoraSelect) {
      aseguradoraSelect.value = "null";
    }
  }

  
}