import { Component, OnInit, Input } from '@angular/core';
///import { Input } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DbServiceService } from 'src/services/db-service.service';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { usuario } from '../models/usuario';
import { getAuth, updateProfile, User } from '@firebase/auth';
import { Camera, CameraResultType } from '@capacitor/camera';
import { StorageService } from 'src/services/storage.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private http: HttpClient, 
    private db: DbServiceService, private auth:AuthService,
    private storage: StorageService) { 
  }

   UID: string = this.ruta.snapshot.params['UID'];
  imagen: string | undefined;

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

  vistaGrid = false;

  toggleVista(): void {
    this.vistaGrid = !this.vistaGrid;
  }

  guardarFoto(){
    if(this.imagen != null)
    {
      this.storage.subirImagen(Date.now().toString(), this.imagen).then(urlImagen =>
        {
          const auth = getAuth();
          const user:any = auth.currentUser;

          console.log(urlImagen);

          updateProfile(user, {
          photoURL: urlImagen
          }).then(() => {
            console.log("Fotografia actualizada");
          })
        })
    }
  }

  async tomarFoto()
  {
      const image=await Camera.getPhoto({
        quality:100,
        allowEditing:false,
        resultType:CameraResultType.DataUrl,
      });
      this.imagen=image.dataUrl;
  }
}
