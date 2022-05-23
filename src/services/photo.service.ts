import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private plataforma: Platform) { }

  /*
  public photos: Foto[] = [];
  private PHOTO_STORAGE: string = "photos";
  private plataforma: Platform; 

  constructor(private platform: Platform)
  {
    this.plataforma = platform;
  }

  export interface Foto{
    filepath: string;
    webviewPath: string;
  }
  */

  public async agregarFoto() {
    // Take a photo
    const takepic = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
    /*private async guardarFoto(camaraFoto: Photo) {
      const base64Data = await this.readAsBase64(camaraFoto);
      const nombreArchivo = new Date().getDate + 'jpeg';
      const archivo = await Filesystem.writeFile({
        path: nombreArchivo,
        data: base64Data,
        directory: Directory.Documents;
      })

    }*/

     /*private async readAsBase64(CamaraFoto: Photo)
    {
      if(this.plataform.is('hybrid')){
        const archivo = await Filesystem.readFile({

        });
        return archivo.data
      }
      else
      {

      }
    }
    const fotoGuarda = await this.guardarFoto(fotoCapturada);
  }
  */