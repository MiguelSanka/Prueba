import { Component, OnInit } from '@angular/core';
import { DbServiceService } from 'src/services/db-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-publicacion-usuario',
  templateUrl: './publicacion-usuario.component.html',
  styleUrls: ['./publicacion-usuario.component.css']
})
export class PublicacionUsuarioComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private db: DbServiceService) {}

  rutaPub: string = this.ruta.snapshot.params['index'];
  publicaciones:any = [];
  keys:any = [];
  pub: any = {};
  index: string = "";

  ngOnInit(): void {
      this.cargarPublicaciones();
    }
    
    

    cargarPublicaciones()
    {
      this.db.getPublicacionesUsuario().subscribe((res: any)=>{
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
    }


    async borrarPublicacion(idPublicacion: string)
    {
      this.db.deletePublicacionUsuario(idPublicacion).subscribe((res) =>{
        console.log("Publicacion borrada", res)
      })
      alert("publación borrada")
      
      this.cargarPublicaciones()
    }

    

  }