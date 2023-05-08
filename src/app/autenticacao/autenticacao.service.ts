import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  autenticar(userName: string, password: string) {
    return this.http.post('http://localhost:3000/user/login',
      {
        userName,
        password
      }
    )
  }

}
