import { Component, OnInit, Input } from '@angular/core';
///import { Input } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DbServiceService } from 'src/services/db-service.service';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { usuario } from '../models/usuario';
import { getAuth } from '@firebase/auth';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private http: HttpClient, private db: DbServiceService, private auth:AuthService) { 
  }

   UID: string = this.ruta.snapshot.params['UID'];

  usuarios: any = []
  datosUsuario: usuario;
  obtenerDatosUsuario()
  {
    const auth = getAuth();
    const user = auth.currentUser;
    this.db.getDatosUsuarios().subscribe(res=> {
      const pubRes:any = res;
      const pubArray = Object.keys(res).forEach((key:any) =>{
        if(pubRes[key] != null)
        {
          if(pubRes[key].usuarioID == user?.uid)
          {
           (this.usuarios).push(pubRes[key])
          }
         }
       })

       for(let i=0; i<this.usuarios.length; i++)
       {
        if(this.usuarios[i].usuarioID == user?.uid)
        {
          this.datosUsuario = this.usuarios[i]
          break;
        }
       }
       console.log(this.datosUsuario)
    })

  }


  
  ngOnInit(): void {
   this.obtenerDatosUsuario()
  }

  userLogged=this.auth.getUserLogged();
  editando = false;
  Nombre:string ="hola";

  toggleEditar(): void {
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  /*guardarBio(): void {
    this.usuario.descripcion = this.bio;
  } */

  vistaGrid = false;

  toggleVista(): void {
    this.vistaGrid = !this.vistaGrid;
  }
}
