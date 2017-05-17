import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer.model';
import { CustomerService } from './services/customer.service';
import { IContract } from "app/models/contract.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'User Interactions Demo';
  customers: Customer[];
  contracts: IContract[];
  userName: string;
  show: boolean = true;

  constructor(private customerService: CustomerService) {
  }

  customerChangeHandler($event: any) {
    const contracts = this.customerService.getCustomerContracts($event);
    const selectedCustomer = this.customerService.getCustomer($event); 
    this.userName = `${selectedCustomer.lastName}, ${selectedCustomer.firstName}`;
    this.contracts = (contracts && contracts.length > 0) ? 
      contracts : 
      [];
  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }
}
