import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { getAuth, updateProfile } from '@firebase/auth';
import { AuthService } from 'src/services/auth.service';
import { DbServiceService } from 'src/services/db-service.service';
import { StorageService } from 'src/services/storage.service';
import { usuario } from '../models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    
  imagen: any;

  usuario:usuario={
    id: "",
    nombre: "",
    descripcion: "",
    password: "",
    email: "",
    edad: 18,
    imagenPerfil: ""
  }

  constructor(private authService:AuthService, private router: Router, 
    private realTime: DbServiceService, private storage: StorageService){}
  ngOnInit(): void {
  }

  registrar()
  {
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res=>{
      const auth = getAuth();
      const user:any = auth.currentUser;
      if(this.imagen != null)
      {
        this.storage.subirImagen(Date.now().toString(), this.imagen).then(urlImagen =>
          {
            this.usuario.imagenPerfil = urlImagen
            console.log(urlImagen)
          }
        )
      }
        this.usuario.imagenPerfil = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      updateProfile(user, {
        displayName:this.usuario.nombre, photoURL: this.usuario.imagenPerfil, 
      }).then(() => {
        console.log("Usuario registrado", user.displayName, this.usuario.imagenPerfil);
      })
      this.usuario.id = user?.uid;
      this.realTime.registerUsuario(this.usuario).subscribe(res=>{
        console.log("usuario registrado", this.usuario)
      })
    })

  }

  
  urlImgFirebase:any;
  SubirImagen=(image:any)=>{
    let url;
    return new Promise((resolve)=>{
      this.storage.subirImagen(Date.now().toString(), image).then(urlImagen=>{
        this.urlImgFirebase=urlImagen;
        console.log(this.urlImgFirebase);
        resolve(this.urlImgFirebase);
      });  
    })
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


