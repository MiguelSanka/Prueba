import { Component, OnInit, Input } from '@angular/core';
///import { Input } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DbServiceService } from 'src/services/db-service.service';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private http: HttpClient, private db: DbServiceService, private authService:AuthService) { 
    this.logueado=false;
  }

  public logueado : boolean;
  public usuario:any = {
  }
   UID: string = this.ruta.snapshot.params['UID'];

  ngOnInit(): void {
    this.usuarioLogueado();
  }

  usuarioLogueado(){
    this.authService.getUserLogged().subscribe(res=>{
      if(res != null){
        this.logueado = true;
        this.usuario = res;
      }
      else{
        this.logueado = false;
      }
      console.log(res);
    });
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
