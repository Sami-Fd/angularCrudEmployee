import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/_models/users';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: Users): Observable<any> {
    return this.http.get(environment.AUTH_API + '/users', httpOptions);
  }
}
