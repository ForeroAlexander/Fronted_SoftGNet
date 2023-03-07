import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  apiUrl = 'http://localhost:8000/api/schedules';

  constructor(private http: HttpClient) { }

  getAllSchedules(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSchedule(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createSchedule(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateSchedule(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteSchedule(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getScheduleByRouteId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/route/${id}`);
  }

}
