import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {}

  ngOnInit(): void {
  }
  userName: string = '';
  password: string = '';

  goToAnimais() {
    this.router.navigate(['/animais'])
  }

  // login(){
  //   this.autenticacaoService
  //     .autenticar(this.userName, this.password)
  //     .pipe(finalize(() => console.log('requisição finalizada')))
  //     .subscribe({
  //         next: () => this.router.navigate(['/animais']),
  //         error: (err) => console.error(err)
  //       }
  //     )
  // }

}
