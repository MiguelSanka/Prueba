import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ionic-angular-1912006';
  constructor(private auth: AuthService){}

  userLogged=null;
  
  comp:any
  detectComp(){
    this.comp=LoginComponent;
  }

  usuario={
    email:'',
    contrasena:''
  }

  Ingresar(){
    const{email,contrasena}=this.usuario;
    this.auth.login(email,contrasena).then(res=>{
      console.log("Sesion Iniciada:",res);
    })
  }

  ngOnInit()
  {
    this.detectComp();
  }
  
}
