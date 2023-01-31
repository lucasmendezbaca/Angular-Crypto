import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  nombreInput = '';
  allCoins = new Array();
  filterCoins = new Array();
  favoriteCoins = new Array();

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.lanzaPeticion();
  }

  lanzaPeticion() {
    this.http.get('https://api.coingecko.com/api/v3/coins/list')
      .subscribe((data:any) => {
        this.allCoins = data;
        console.log(data);
        // console.log(data[0].name);
      });
  }

  filtrar() {
    if(this.nombreInput.length > 2) {
      this.filterCoins = this.allCoins.filter(coin => coin.name.toLowerCase().startsWith(this.nombreInput.toLowerCase()));
    } else {
      this.filterCoins = new Array();
    }
  }

  addFavorite(coin:any) {
    this.favoriteCoins.push(coin);
  }

  deleteFavorite(coin:any) {
    const index = this.favoriteCoins.indexOf(coin);
    this.favoriteCoins.splice(index, 1);
  }
}
