import { Customers } from './../models/customers.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private dbPath = '/customers';

  customersRef: AngularFirestoreCollection<Customers>;

  constructor(private db: AngularFirestore) {
    this.customersRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Customers> {
    return this.customersRef;
  }

  create(customers: Customers): any {
    return this.customersRef.add({ ...customers });
  }

  update(id: string, data: any): Promise<void> {
    return this.customersRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.customersRef.doc(id).delete();
  }
}
