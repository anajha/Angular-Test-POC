import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NotebookService {
  
  constructor(private http:HttpClient) { }

  private serverEndpoint = '/v1/fetchfiles';

  public getNotebooks() {
    return this.http.post(this.serverEndpoint,{"email":"dharmendra.nasit@quantiphi.com"},httpOptions);
  }
}
