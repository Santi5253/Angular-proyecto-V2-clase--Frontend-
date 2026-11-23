import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class VentasService {
  private http = inject(HttpClient);
  private base = 'https://angular-proyecto-v2-clase-backend-production.up.railway.app/api/v1';

  obtenerTodas() { return this.http.get<any[]>(`${this.base}/ventas`); }
  obtenerHoy() { return this.http.get<any[]>(`${this.base}/ventas/hoy`); }
  registrar(venta: any) { return this.http.post<any>(`${this.base}/ventas`, venta); }
  resumenSemanal() { return this.http.get<any[]>(`${this.base}/ventas/resumen/semanal`); }
  resumenMensual() { return this.http.get<any[]>(`${this.base}/ventas/resumen/mensual`); }
}
