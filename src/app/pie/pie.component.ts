import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
    datosBD: Observable<any[]>;

    constructor(firestore: Firestore) {
      const collectionBD = collection(firestore, 'nombres');
      this.datosBD = collectionData(collectionBD);
    }

}
