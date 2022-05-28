import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ImagenFeedComponent } from './imagen-feed/imagen-feed.component';

import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicacionUsuarioComponent } from './publicacion-usuario/publicacion-usuario.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LocalComponent } from './local/local.component';
const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent },
  {path: 'post', component: PostComponent},
  {path: 'map', component: MapComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'publicacion-usuario/:index', component: PublicacionUsuarioComponent},
  {path: 'publicacion/:index', component: PublicacionComponent},
  {path: 'local', component: LocalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { 
  
}