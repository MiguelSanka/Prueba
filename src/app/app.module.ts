import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { GridComponent } from './grid/grid.component';
import { TabsComponent } from './tabs/tabs.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { ImagenFeedComponent } from './imagen-feed/imagen-feed.component';

import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from './popover/popover.component';
import { PostComponent } from './post/post.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaContenidosComponent } from './historia-contenidos/historia-contenidos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { PublicacionUsuarioComponent } from './publicacion-usuario/publicacion-usuario.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocalComponent } from './local/local.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    PublicacionesComponent,
    PublicacionComponent,
    PublicacionUsuarioComponent,
    TabsComponent,
    GridComponent,
    ImagenFeedComponent,
    PopoverComponent,
    PostComponent,
    HistoriasComponent,
    HistoriaContenidosComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent, 
    MapComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: [RoutesModule]
})
export class AppModule { }
