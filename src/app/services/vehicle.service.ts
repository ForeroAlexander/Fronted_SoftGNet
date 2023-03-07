import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<any> {
    return this.http.get('http://localhost:8000/api/vehicles');
  }

  getVehicle(id: number): Observable<any> {
    return this.http.get(`http://localhost:8000/api/vehicles/${id}`);
  }

  createVehicle(data: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/vehicles', data);
  }

  updateVehicle(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8000/api/vehicles/${id}`, data);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8000/api/vehicles/${id}`);
  }

  getVehicleByRouteId(id: number): Observable<any> {
    return this.http.get(`http://localhost:8000/api/vehicles/route/${id}`);
  }
  
}
