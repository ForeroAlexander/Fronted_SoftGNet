import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  apiUrl = 'http://localhost:8000/api/routes';

  constructor(private http: HttpClient) { }

  getAllRoutes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getRoute(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createRoute(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateRoute(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteRoute(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getRouteByDriverId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/driver/${id}`);
  }

  getRouteByVehicleId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/vehicle/${id}`);
  }

  getRouteByVehicleIdAndDriverId(vehicleId: number, driverId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/vehicle/${vehicleId}/driver/${driverId}`);
  }

  
}
