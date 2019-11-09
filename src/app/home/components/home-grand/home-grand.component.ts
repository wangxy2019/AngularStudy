import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  public obj = {
    productId: 2,
    productName: 'Iphone',
    model: 'phone',
    type: '全面屏'
  };

  public date: Date;

  public price: number = 22.3363;

  public data = [1, 2, 3, 4, 5];


  constructor() { }

  ngOnInit() {
    this.date = this.minusDays(new Date(), 60);
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
