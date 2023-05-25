import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  errorSession: boolean = false
  formLogin:FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router){ }

  ngOnInit(): void {
      this.formLogin = new FormGroup(
        {
          username: new FormControl('',[
            Validators.required, 
            Validators.email
          ]),
          password:new FormControl('',[
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
        }
      )
  }

  sendLogin(): void{
    const { username, password } = this.formLogin.value
    this.authService.sendCredentials(username, password)
    .subscribe(
      responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
        console.log('Session iniciada correcta', responseOk.token);
        const tokenSession = responseOk.token;
        this.cookie.set('token', tokenSession, 1, '/') //TODO:📌📌📌📌
        this.router.navigate(['/', 'books_gallery'])
      //TODO: 200 <400
      },
      err => {//TODO error 400>=
          this.errorSession = true
          console.log('⚠⚠⚠⚠Ocurrio error con tu email o password', err);
      }) 
  }

}
