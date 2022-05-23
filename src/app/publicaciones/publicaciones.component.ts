import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbServiceService } from 'src/services/db-service.service';
import { publicacion } from '../models/publicacion';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private http: HttpClient, private db: DbServiceService) { }

  publicacionesU:any[] = [];
  keys:any[] = [];
  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  borrarPublicacion(idPublicacion: string)
  {
    this.db.deletePublicacionUsuario(idPublicacion).subscribe((res) =>{
      console.log("Publicacion borrada", res)
    })
    window.location.reload();
  }

  cargarPublicaciones()
  {
    this.db.getPublicacionesUsuario().subscribe((res: any)=>{
      const pubRes:any = res;
       const pubArray = Object.keys(res).forEach((key:any) =>{
         if(pubRes[key] != null)
         {
          (this.publicacionesU).push(pubRes[key]);
          (this.keys).push(key);
         }
       })

       let i:number = 0;
       while(i<this.publicacionesU.length)
       {
         this.publicacionesU[i].index = this.keys[i];
         i++;
       }
        console.log(this.publicacionesU)
     })
    }
  }


