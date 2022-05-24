import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { AuthService } from 'src/services/auth.service';
import { DbServiceService } from 'src/services/db-service.service';
import { usuario } from '../models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    
  usuario:usuario={
    id: "",
    nombre: "",
    descripcion: "",
    password: "",
    email: "",
    edad: 18,
  }

  constructor(private authService:AuthService, private router: Router, private realTime: DbServiceService){}
  ngOnInit(): void {
  }

  registrar()
  {
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res=>{
      const auth = getAuth();
      const user = auth.currentUser;
      console.log("usuario registrado", user)
      this.usuario.id = user?.uid;
      this.realTime.registerUsuario(this.usuario).subscribe(res=>{
        console.log("usuario registrado", this.usuario)
      })
    })

  }

}


