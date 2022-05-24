import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email:'',
    password:''
  }

  constructor(private authService:AuthService, private router: Router){}
  ngOnInit(): void {
  }

  ingresar()
  {
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(res=>{
      console.log("usuario logeado", res)
      const auth = getAuth();
      const user = auth.currentUser;
      this.router.navigateByUrl('/header/' + user?.uid + '/feed')
    } )
  }


  ingresarConGoogle()
  {
    const {email, password} = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res=>{
      console.log(res);
    })
  }

}
