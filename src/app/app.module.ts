import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NotasComponent } from './notas/notas.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"upsv1-2","appId":"1:294097294392:web:87a3c8212748ff663382cd","storageBucket":"upsv1-2.appspot.com","apiKey":"AIzaSyC77KkbbRY_SIR7T5lBLGy84EOZhXFyY5Y","authDomain":"upsv1-2.firebaseapp.com","messagingSenderId":"294097294392"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
