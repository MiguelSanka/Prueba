import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DbServiceService } from 'src/services/db-service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ThisReceiver } from '@angular/compiler';
import { getAuth } from '@firebase/auth';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  constructor(private http: HttpClient, private db: DbServiceService, 
    private ruta: ActivatedRoute, private auth: AuthService) { }

  IUD: string = this.ruta.snapshot.params['UID'];
  publicaciones:any = []
  keys: any = []
  ngOnInit(): void {
    this.cargarPublicaciones();
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

  editado: boolean = false;

  editar() {
    this.editado = !this.editado;
  }


  borrar(idPub : number)  {
    this.db.deletePublicacion(idPub).subscribe(res => {
      this.cargarPublicaciones();
      console.log(res);
    })
    window.location.reload();
  }

  guardar(idPub: number, nuevaCaption: any) {
    this.db.updatePublicacion(idPub, nuevaCaption).subscribe(res => {
      console.log("Se actualizó la BD")
    });
  }

  userLogged=this.auth.getUserLogged();


}
