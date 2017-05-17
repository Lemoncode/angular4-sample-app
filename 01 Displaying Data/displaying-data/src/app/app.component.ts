import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Displaying Data Demo';
  private customers: Customer[];
  customer: Customer;

  constructor() {
    this.customers = [
      new Customer('Jai', 'Sal', '25 June 1981',
      'http://vignette2.wikia.nocookie.net/disney/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150615084744'),
      new Customer('Fer', 'Sal', '25 November 1984'),
      new Customer('Lau', 'Sal', '04 March 2013')
    ];
  }

  ngOnInit() {
    this.customer = this.customers[0];
  }
}
