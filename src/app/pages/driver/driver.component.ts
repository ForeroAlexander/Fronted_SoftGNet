import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
drivers: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/drivers')
      .subscribe(
        data => {
          this.drivers = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  updateDriver(): void {
    this.http.put(`http://localhost:8000/api/drivers/${this.drivers.id}`, this.drivers)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
        }

  deleteDriver(): void {
    this.http.delete(`http://localhost:8000/api/drivers/${this.drivers.id}`)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  addDriver(): void {
    this.http.post('http://localhost:8000/api/drivers', this.drivers)
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
