import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import 'firebase/compat/storage'
import firebase from 'firebase/compat/app'

firebase.initializeApp(environment.firebaseConfig)
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageRef = firebase.app().storage().ref();
  constructor() { }


  async subirImagen(nombre: string, imgBase64: any)
  {
    try{
      let response = await this.storageRef.child("img/" + nombre).putString(imgBase64, 'data_url'); 
      console.log(response)
      return await response.ref.getDownloadURL();
    }
    catch(err)
    {
      console.log(err)
      return null
    }
  }
}
