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
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  imagen: any;
  isSelected: boolean = false;
  rutaImagen: string |undefined;

  constructor( private db: DbServiceService, private takePic: PhotoService, private storage: StorageService) { }
  ngOnInit(): void {
  }

  caption: string = "";
  onSubmit(form: NgForm) {
    this.subir();
  }

  subir() {
    console.log("Publición posteada exitosamente");
  }
  
  subirFoto(){
    let nombre = "Juan"
    if(this.imagen != null)
    {
      this.storage.subirImagen(nombre + " " + Date.now(), this.imagen).then(urlImagen =>
        {
          console.log(urlImagen);
          let nuevaPub = {
            "caption": this.caption, 
            "id": "80", 
            "src": urlImagen,
            "usuario": "@PizzaCat"
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


