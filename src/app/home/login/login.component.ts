import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit(): void {
  }
  userName: string = '';
  password: string = '';

  login(){
    this.autenticacaoService
      .autenticar(this.userName, this.password)
      .pipe(finalize(() => console.log('requisição finalizada')))
      .subscribe({
          next: res => console.log(res),
          error: err => console.error(err)
        }
      )
  }

}
