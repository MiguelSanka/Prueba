import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from 'src/app/models/usuario';
import { publicacion } from 'src/app/models/publicacion';
import { throws } from 'assert';
import { comentario } from 'src/app/models/comentario';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private http: HttpClient) { }

  getPublicacionesUsuario():any{
    return this.http.get('https://insta-base-0032-default-rtdb.firebaseio.com/usuario/publicaciones.json');
  }


  getPublicacionDetalle(idPublicacion):any
  {
    return this.http.get('https://insta-base-0032-default-rtdb.firebaseio.com/usuario/publicaciones/' + idPublicacion.toString() + '.json');
  }

  getFeedDetalle(idPublicacion: string):any
  {
    return this.http.get('https://insta-base-0032-default-rtdb.firebaseio.com/publicaciones/' + idPublicacion.toString() + '.json');
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

  //Nuevos metodos 
  registerUsuario(usuario: usuario)
  {
    return this.http.post('https://insta-branch-default-rtdb.firebaseio.com/usuarios.json', usuario)
  }

  uploadPublicacion(publicacion: any)
  {
    return this.http.post('https://insta-branch-default-rtdb.firebaseio.com/publicaciones.json', publicacion)
  }

  getPublicaciones():any
  {
    return this.http.get('https://insta-branch-default-rtdb.firebaseio.com/publicaciones.json');
  }

  getDatosUsuarios(): any{
    return this.http.get('https://insta-branch-default-rtdb.firebaseio.com/usuarios.json');
  }

  postComentario(idPublicacion: string, comentario: comentario)
  {
    return this.http.post('https://insta-branch-default-rtdb.firebaseio.com/publicaciones/' + idPublicacion + '/comentarios.json', comentario)
  }

  getComentarios(idPublicacion: string)
  {
    return this.http.get('https://insta-branch-default-rtdb.firebaseio.com/publicaciones/' + idPublicacion + '/comentarios.json')
  }

  deletePublicacion(idPublicacion: number)
  {
    return this.http.delete('https://insta-branch-default-rtdb.firebaseio.com/publicaciones/' + idPublicacion.toString() + '.json')
  }

}
