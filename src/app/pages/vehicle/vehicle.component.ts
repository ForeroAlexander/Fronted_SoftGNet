import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicles: any;

  constructor(private http: HttpClient, private vehicleService : VehicleService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/vehicles')
      .subscribe(
        data => {
          this.vehicles = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  updateVehicle(): void {
    this.http.put(`http://localhost:8000/api/vehicles/${this.vehicles.id}`, this.vehicles)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteVehicle(): void {
    this.http.delete(`http://localhost:8000/api/vehicles/${this.vehicles.id}`)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  addVehicle(): void {
    this.http.post('http://localhost:8000/api/vehicles', this.vehicles)
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
