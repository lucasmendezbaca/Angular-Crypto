import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent {
  @Input() id = '';
  name = '';
  category = '';
  current_price = '';
  description = '';
  ranking = '';
  genesis_date = '';
  image = '';


  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.lanzaPeticion();
  }

  lanzaPeticion() {
    this.http.get('https://api.coingecko.com/api/v3/coins/' + this.id)
      .subscribe((data:any) => {
        console.log(data);
        this.name = data.name;
        this.category = data.categories[0];
        this.description = data.description.en;
        this.ranking = data.market_cap_rank;
        this.genesis_date = data.genesis_date;
        this.image = data.image.small;
        this.current_price = data.market_data.current_price.usd;
      });
  }
}
