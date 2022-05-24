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
const routes: Routes = [
  { path: 'header/:UID', component: AppComponent },
  { path: 'header/:UID/perfil', component: PerfilComponent },
  {path: 'header/:UID/feed', component: FeedComponent},
  {path: 'header/:UID/post', component: FeedComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'publicacion-usuario/:index', component: PublicacionUsuarioComponent},
  {path: 'publicacion/:index', component: PublicacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { 
  
}