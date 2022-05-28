import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { timeStamp } from 'console';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ruta: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  cerrarSesion()
  {
    this.auth.logOut();
    this.ruta.navigateByUrl('/login');
    
  }
  userLogged=this.auth.getUserLogged();
}
