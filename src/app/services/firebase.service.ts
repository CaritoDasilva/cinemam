import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  //Crea un nuevo gato
  public createClient(data: { nameClient: string, emailClient: string, cellphoneClient: number, rewardClient: string }) {
    return this.firestore.collection('clients').add(data);
  }

  //Actualiza un gato
  public updateClient(documentId: string, data: any) {
    return this.firestore.collection('clients').doc(documentId).set(data);
  }


}
