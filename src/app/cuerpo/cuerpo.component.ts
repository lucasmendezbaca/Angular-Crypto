import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  nombreMoneda = '';
  categoriaMoneda = '';

  constructor(private http: HttpClient) {

  }

  lanzaPeticion() {
    this.http.get('https://api.coingecko.com/api/v3/coins/bitcoin')
      .subscribe((data:any) => {
        console.log(data);
        this.nombreMoneda = data.name;
        this.categoriaMoneda = data.categories[0];
      });
  }
}
