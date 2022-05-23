import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/services/db-service.service';
import { HttpClient } from '@angular/common/http';

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
  }
}
    
