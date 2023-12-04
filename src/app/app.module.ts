// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    ListaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({
      "projectId": "upsv1-2",
      "appId": "1:294097294392:web:87a3c8212748ff663382cd",
      "storageBucket": "upsv1-2.appspot.com",
      "apiKey": "AIzaSyC77KkbbRY_SIR7T5lBLGy84EOZhXFyY5Y",
      "authDomain": "upsv1-2.firebaseapp.com",
      "messagingSenderId": "294097294392"
    })),
    provideFirestore(() => getFirestore()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
