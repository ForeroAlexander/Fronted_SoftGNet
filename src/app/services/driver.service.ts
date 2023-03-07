import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  apiUrl = 'http://localhost:8000/api/drivers';

  constructor(private http: HttpClient) { }

  getAllDrivers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getDriver(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createDriver(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateDriver(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteDriver(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
