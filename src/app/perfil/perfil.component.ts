import { Component, OnInit, Input } from '@angular/core';
///import { Input } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DbServiceService } from 'src/services/db-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private http: HttpClient, private db: DbServiceService) { }

  usuario:any = {
  }
  
  ngOnInit(): void {
    this.db.getDatosUsuario().subscribe((res: any)=>{
      this.usuario = res;
    })
  }

  

  editando = false;

  toggleEditar(): void {
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  guardarBio(): void {
    this.usuario.descripcion = this.bio;
  }  

  vistaGrid = false;

  toggleVista(): void {
    this.vistaGrid = !this.vistaGrid;
  }
}
