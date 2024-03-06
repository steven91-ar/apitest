import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl = 'https://dev-ctco.appsalon.fr/webservice/exposants-liste?key=c016333d7ea64b34f9d3c3daea4f9fd6';

  constructor(private http: HttpClient) {}

  getExposants(page: number) {
    return this.http.get(`${this.baseUrl}&page=${page}`);
  }
}
