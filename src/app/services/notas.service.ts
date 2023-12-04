import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Nota from '../lista/nota.interface';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private firestore: Firestore) { }

  addNotas(nota: Nota){
    const notaRef = collection(this.firestore, 'Notas');
    return addDoc(notaRef, nota);

  }



}
