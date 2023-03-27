import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { LoginComponent } from './modales/login/login.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { CierreComponent } from './components/cierre/cierre.component';
import { LogoutComponent } from './modales/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { BannerComponent } from './components/banner/banner.component';
import { FotoBNComponent } from './components/foto-bn/foto-bn.component';
import { ModalFotoBNComponent } from './modales/modal-foto-bn/modal-foto-bn.component';
import { ModalBannerComponent } from './modales/modal-banner/modal-banner.component';
import { TituloSMComponent } from './components/botonesSobreMi/titulo-sm/titulo-sm.component';
import { SubtituloSMComponent } from './components/botonesSobreMi/subtitulo-sm/subtitulo-sm.component';
import { TextoSmComponent } from './components/botonesSobreMi/texto-sm/texto-sm.component';
import { ModaltituloSmComponent } from './modales/modaltitulo-sm/modaltitulo-sm.component';
import { ModalsubtSmComponent } from './modales/modalsubt-sm/modalsubt-sm.component';
import { ModaltexSmComponent } from './modales/modaltex-sm/modaltex-sm.component';
import { EditContComponent } from './components/botonesContacto/edit-cont/edit-cont.component';
import { EditLengComponent } from './components/botonesContacto/edit-leng/edit-leng.component';
import { ModalContactoComponent } from './modales/modal-contacto/modal-contacto.component';
import { ModalLenguajesComponent } from './modales/modal-lenguajes/modal-lenguajes.component';
import { TituloExpComponent } from './components/botonesExpLab/titulo-exp/titulo-exp.component';
import { SubtExpComponent } from './components/botonesExpLab/subt-exp/subt-exp.component';
import { TexExpComponent } from './components/botonesExpLab/tex-exp/tex-exp.component';
import { ModalExpTitComponent } from './modales/modal-exp-tit/modal-exp-tit.component';
import { ModalExpSubtComponent } from './modales/modal-exp-subt/modal-exp-subt.component';
import { ModalExpTexComponent } from './modales/modal-exp-tex/modal-exp-tex.component';
import { EditHabilComponent } from './components/botonHabilidades/edit-habil/edit-habil.component';
import { ModalHabilComponent } from './modales/modal-habil/modal-habil.component';
import { EditTitHistAcadComponent } from './components/botonesHistAcad/edit-tit-hist-acad/edit-tit-hist-acad.component';
import { EditSubtHistAcadComponent } from './components/botonesHistAcad/edit-subt-hist-acad/edit-subt-hist-acad.component';
import { ModalTitHistacadComponent } from './modales/modal-tit-histacad/modal-tit-histacad.component';
import { ModalSubtHistacadComponent } from './modales/modal-subt-histacad/modal-subt-histacad.component';
import { EditProyectosComponent } from './components/botonProyectos/edit-proyectos/edit-proyectos.component';
import { ModalProyectosComponent } from './modales/modal-proyectos/modal-proyectos.component';
import { EditHobbiesComponent } from './components/botonHobbies/edit-hobbies/edit-hobbies.component';
import { ModalHobbieComponent } from './modales/modal-hobbie/modal-hobbie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactoComponent,
    HabilidadesComponent,
    ProyectosComponent,
    Pagina404Component,
    LoginComponent,
    AccesoComponent,
    CierreComponent,
    LogoutComponent,
    HeaderComponent,
    SobreMiComponent,
    BannerComponent,
    FotoBNComponent,
    ModalFotoBNComponent,
    ModalBannerComponent,
    TituloSMComponent,
    SubtituloSMComponent,
    TextoSmComponent,
    ModaltituloSmComponent,
    ModalsubtSmComponent,
    ModaltexSmComponent,
    EditContComponent,
    EditLengComponent,
    ModalContactoComponent,
    ModalLenguajesComponent,
    TituloExpComponent,
    SubtExpComponent,
    TexExpComponent,
    ModalExpTitComponent,
    ModalExpSubtComponent,
    ModalExpTexComponent,
    EditHabilComponent,
    ModalHabilComponent,
    EditTitHistAcadComponent,
    EditSubtHistAcadComponent,
    ModalTitHistacadComponent,
    ModalSubtHistacadComponent,
    EditProyectosComponent,
    ModalProyectosComponent,
    EditHobbiesComponent,
    ModalHobbieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
