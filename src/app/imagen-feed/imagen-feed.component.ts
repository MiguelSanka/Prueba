import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/services/db-service.service';

@Component({
  selector: 'app-imagen-feed',
  templateUrl: './imagen-feed.component.html',
  styleUrls: ['./imagen-feed.component.css']
})
export class ImagenFeedComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private db: DbServiceService, private http: HttpClient) {}

  rutaPub: string = this.ruta.snapshot.params['id'];
  publicaciones:any = [];
  pub: any = {};
  index: string = '';

  ngOnInit(): void {
   }
   

}
