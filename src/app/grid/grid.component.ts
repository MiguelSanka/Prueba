import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getAuth } from '@firebase/auth';
import { DbServiceService } from 'src/services/db-service.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private http: HttpClient, private bd: DbServiceService) { }

  
  publicacionesU:any[] = [];
  keys:any[] = [];
  ngOnInit(): void {
    this.bd.getPublicaciones().subscribe((res: any)=>{
      const pubRes:any = res;
      const auth = getAuth();
       const user = auth.currentUser;
       const pubArray = Object.keys(res).forEach((key:any) =>{
         if(pubRes[key] != null)
         {
           if(pubRes[key].usuarioID == user?.uid)
           {
            (this.publicacionesU).push(pubRes[key]);
            (this.keys).push(key);
           }
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
