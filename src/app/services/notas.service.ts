import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import Nota from '../lista/nota.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private firestore: Firestore) { }

  addNotas(nota: Nota){
    const notaRef = collection(this.firestore, 'Notas');
    return addDoc(notaRef, nota);
  }

  getNotas():Observable<Nota[]>{
    const notaRef = collection(this.firestore, 'Notas');
    return collectionData(notaRef,{idField: 'id'}) as Observable <Nota[]>;
  }



}
