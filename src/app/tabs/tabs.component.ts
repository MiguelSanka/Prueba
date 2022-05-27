import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private auth: AuthService) { }
  
  ngOnInit(): void {
  }
  UID: string = this.ruta.snapshot.params['UID'];
  userLogged=this.auth.getUserLogged();
  

}
