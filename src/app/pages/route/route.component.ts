import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  routes: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/routes')
      .subscribe(
        data => {
          this.routes = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  updateRoute(): void {
    this.http.put(`http://localhost:8000/api/routes/${this.routes.id}`, this.routes)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteRoute(): void {
    this.http.delete(`http://localhost:8000/api/routes/${this.routes.id}`)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  addRoute(): void {
    this.http.post('http://localhost:8000/api/routes', this.routes)
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
