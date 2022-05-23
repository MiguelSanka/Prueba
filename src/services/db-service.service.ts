import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private http: HttpClient) { }

  getPublicacionesUsuario():any{
    return this.http.get('https://insta-base-0032-default-rtdb.firebaseio.com/usuario/publicaciones.json');
  }

  getDatosUsuario(): any{
    return this.http.get('https://insta-base-0032-default-rtdb.firebaseio.com/usuario.json');
  }

  getPublicaciones():any
  {
    return this.http.get('https://insta-base-0032-default-rtdb.firebaseio.com/publicaciones.json');
  }

  getPublicacionDetalle(idPublicacion):any
  {
    return this.http.get('https://insta-base-0032-default-rtdb.firebaseio.com/usuario/publicaciones/' + idPublicacion.toString() + '.json');
  }

  getFeedDetalle(idPublicacion: string):any
  {
    return this.http.get('https://insta-base-0032-default-rtdb.firebaseio.com/publicaciones/' + idPublicacion.toString() + '.json');
  }

  deletePublicacion(idPublicacion: number)
  {
    return this.http.delete('https://insta-base-0032-default-rtdb.firebaseio.com/publicaciones/' + idPublicacion.toString() + '.json')
  }

  deletePublicacionUsuario(idPublicacion: string)
  {
    return this.http.delete('https://insta-base-0032-default-rtdb.firebaseio.com/usuario/publicaciones/' + idPublicacion + '.json')
  }
  updatePublicacion(idPublicacion: number, DatosNuevos: any)
  {
    return this.http.put('https://insta-base-0032-default-rtdb.firebaseio.com/publicaciones/' + idPublicacion.toString() + '.json', DatosNuevos)
  }

  postPublicacion(publicacion: any) {
    return this.http.post('https://insta-base-0032-default-rtdb.firebaseio.com/usuario/publicaciones.json', publicacion);
  }



}
