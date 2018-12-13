import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  private serverEndpoint = 'http://localhost:8082/user-portal/api';

  public getData() {
    return this.http.get(this.serverEndpoint,httpOptions);
  }
}
