// notas.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, DocumentData, addDoc, collectionData, deleteDoc, updateDoc } from '@angular/fire/firestore';
import Nota from '../lista/nota.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private firestore: Firestore) { }

  addNotas(nota: Nota) {
    const notaRef = collection(this.firestore, 'Notas');
    return addDoc(notaRef, nota);
  }

  getNotas(): Observable<Nota[]> {
    const notaRef = collection(this.firestore, 'Notas');
    return collectionData(notaRef, { idField: 'id' }) as Observable<Nota[]>;
  }

  getNotaById(id: string): Observable<Nota | null> {
    const placeDocRef = doc(this.firestore, `Notas/${id}`);
    return new Observable<Nota | null>((observer) => {
      getDoc(placeDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          const nota = docSnap.data() as Nota;
          observer.next({ id: docSnap.id, ...nota });
        } else {
          observer.next(null);
        }
        observer.complete();
      });
    });
  }

  deleteNotas(nota: Nota) {
    const placeDocRef = doc(this.firestore, `Notas/${nota.id}`);
    return deleteDoc(placeDocRef);
  }

  editarNotas(nota: Nota) {
    const placeDocRef = doc(this.firestore, `Notas/${nota.id}`);
    const { id, ...notaSinId } = nota;
    return updateDoc(placeDocRef, notaSinId);
  }
}
