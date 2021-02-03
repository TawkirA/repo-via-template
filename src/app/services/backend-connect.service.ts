import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectService {

  constructor(private http: HttpClient) { }

  getCovidData(): Observable<any> {
    const url = 'https://api.rootnet.in/covid19-in/stats/latest';
    return this.http
               .get(url)
               .pipe(
                  map(res => res)
                );
  }
}
