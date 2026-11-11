import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  // URL de tu backend local
  private apiUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  getAseguradoras(): Observable<any> {
    return this.http.get(`${this.apiUrl}/aseguradoras`);
  }

  getPolizasByAseguradora(idAseguradora: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/aseguradoras/${idAseguradora}/polizas`);
  }

  crearVehiculo(vehiculo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/vehiculos`, vehiculo);
  }

  crearAseguradora(aseguradora: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/aseguradoras`, aseguradora);
  }

  crearPoliza(poliza: any): Observable<any> {
     return this.http.post(`${this.apiUrl}/polizas`, poliza);
    }

    getInstituciones() {
    return this.http.get(`${this.apiUrl}/instituciones`);
  }

  crearInstitucion(institucion: any) {
    return this.http.post(`${this.apiUrl}/instituciones`, institucion);
  }
}