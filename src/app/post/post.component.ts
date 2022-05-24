import { Component, OnInit } from '@angular/core';
import { DbServiceService } from 'src/services/db-service.service';
import { NgForm } from '@angular/forms';
import { PhotoService } from 'src/services/photo.service';
import { ref, Storage, uploadBytes } from '@angular/fire/storage';
import {publicacion} from '../models/publicacion';
import { url } from 'inspector';
import { Camera } from '@capacitor/camera';
import { CameraResultType } from '@capacitor/camera';
import { StorageService } from 'src/services/storage.service';
import { AuthService } from 'src/services/auth.service';
import { usuario } from '../models/usuario';
import { getAuth } from '@firebase/auth';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  usuarioTime:usuario={
    id: "",
    nombre: "",
    descripcion: "",
    password: "",
    email: "",
    edad: 0,
  }

  usuarioAuth:any={

  }
  imagen: any;
  isSelected: boolean = false;
  rutaImagen: string |undefined;

  constructor( private db: DbServiceService, private takePic: PhotoService, 
    private storage: StorageService, private authService:AuthService) { 
      this.logueado=false;
    }
  
    public logueado : boolean;

    ngOnInit(): void {
      this.usuarioLogueado();
    }

  caption: string = "";
  onSubmit(form: NgForm) {
    this.subir();
  }

  usuarioLogueado(){
    this.authService.getUserLogged().subscribe(res=>{
      if(res != null){
        this.logueado = true;
        this.usuarioAuth = res;
      }
      else{
        this.logueado = false;
      }
      console.log(res);
    });
  }

  subir() {
    console.log("Publición posteada exitosamente");
  }
  
  subirFoto(){
    if(this.imagen != null)
    {
      this.storage.subirImagen(Date.now().toString(), this.imagen).then(urlImagen =>
        {
          const auth = getAuth();
          const user = auth.currentUser;
          console.log(urlImagen);
          let nuevaPub = {
            id: (Date.now()).toString(),
            usuarioID: user?.uid,
            usuarioNombre: user?.displayName,
            caption: this.caption,
            src: urlImagen,
          }
          this.db.postPublicacion(nuevaPub).subscribe(res => {
            console.log(nuevaPub)
          })
          alert("foto subida exitosamente")
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
      this.rutaImagen=image.dataUrl;

      this.imagen=image.dataUrl;
  }


  /*seleccionarImagen($event: any){
    let file =$event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      this.imagen = reader.result;
    }*/

  
    
    
    /*const file =$event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, 'images/$' + file.name);

    let nuevaPub = {
      "caption": "", 
      "id": "80", 
      "imagen": imgRef.toString(),
      "usuario": "@PizzaCat"
    }

    uploadBytes(imgRef, file)
      .then(response => console.log(response))
      .catch(error => console.log(error))

      this.db.postPublicacion(nuevaPub).subscribe(res => {
        console.log(nuevaPub)
      
      });*/
  }


