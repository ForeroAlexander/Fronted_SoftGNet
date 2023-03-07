import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedules: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/schedules')
      .subscribe(
        data => {
          this.schedules = data;
        },
        error => {
          console.log(error);
        }
      );
  }


  UpdateSchedule(): void {
    this.http.put(`http://localhost:8000/api/schedules/${this.schedules.id}`, this.schedules)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  DeleteSchedule(): void {
    this.http.delete(`http://localhost:8000/api/schedules/${this.schedules.id}`)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  AddSchedule(): void {
    this.http.post('http://localhost:8000/api/schedules', this.schedules)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}
