import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ImagenFeedComponent } from './imagen-feed/imagen-feed.component';

import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicacionUsuarioComponent } from './publicacion-usuario/publicacion-usuario.component';
import { PostComponent } from './post/post.component';
const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'post', component: PostComponent },
  {path: 'publicacion-usuario/:index', component: PublicacionUsuarioComponent},
  {path: 'publicacion/:index', component: PublicacionComponent},
  { path: '**', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { 
  
}