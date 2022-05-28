import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/services/db-service.service';
import { HttpClient } from '@angular/common/http';
import { getAuth } from '@firebase/auth';
import { comentario } from '../models/comentario';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private db: DbServiceService, private http: HttpClient) {}

   rutaPub: string = this.ruta.snapshot.params['index'];
   publicaciones:any = [];
   keys:any = [];
   pub: any = {};
   index: string = "";


   comentario:comentario={
    usuarioFoto: getAuth().currentUser?.photoURL,
    usuarioNombre: getAuth().currentUser?.displayName,
    texto: ""
  }

  cargarPublicaciones()
  {
    this.db.getPublicaciones().subscribe(res => {
       const pubRes:any = res;
       const pubArray = Object.keys(res).forEach((key:any) =>{
       const auth = getAuth();
       const user = auth.currentUser;
         if(pubRes[key] != null)
         {
           if(pubRes[key].usuarioID != user?.uid)
           {
            (this.publicaciones).push(pubRes[key]);
            (this.keys).push(key);
            console.log(pubRes[key].usuarioID)
           }
         }
       })

       let i:number = 0;
       while(i<this.publicaciones.length)
       {
         this.publicaciones[i].index = this.keys[i];
         i++;
       }
        console.log(this.publicaciones)
     })
  }


  comentar()
  {
    this.db.postComentario(this.rutaPub, this.comentario).subscribe(res=>
      {
        console.log("Comentario publicado")
        console.log(this.comentario.usuarioNombre)
        alert("comentario publicado")
      })
      window.location.reload();
  }

  comentarios:any = []
  obtenerComentarios()
  {
    this.db.getComentarios(this.rutaPub).subscribe(res =>
      {
        const comentRes:any = res;
        const comentArray = Object.keys(res).forEach((key:any) =>{
          if(comentRes[key] != null)
          {
             (this.comentarios).push(comentRes[key]);
             (this.keys).push(key);
          }
      })
    })
  }

   ngOnInit(): void {
    
    this.db.getPublicaciones().subscribe((res: any)=>{
      const pubRes:any = res;
       const pubArray = Object.keys(res).forEach((key:any) =>{
         if(pubRes[key] != null)
         {
          (this.publicaciones).push(pubRes[key]);
          (this.keys).push(key);
         }
       })

       let i:number = 0;
       while(i<this.publicaciones.length)
       {
         this.publicaciones[i].index = this.keys[i];
         i++;
       }
        console.log(this.publicaciones)

        for(let i=0; i <= this.publicaciones.length; i++)
        {
          if(this.publicaciones[i].index == this.rutaPub)
          {
            this.pub = this.publicaciones[i];
            break;
          }
        }
     })
     this.obtenerComentarios();
    }
}
    
