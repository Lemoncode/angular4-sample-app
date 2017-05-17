import { Injectable  } from '@angular/core';
import { Customer } from '../models/customer.model';
import { IContract } from "app/models/contract.model";

@Injectable()
export class CustomerService {
    getCustomers(): Customer[] {
        return CUSTOMERS;
    }

    getCustomer(customerId: number) {
        return CUSTOMERS.find(customer => customer.id == customerId);
    }

    getCustomerContracts(customerId: number): IContract[] {
        return CUSTOMERS.find(customer => customer.id == customerId).contracts; ;
    }
}

const CUSTOMERS : Customer[] = [
    new Customer(1, 'Jai', 'Sal', '25 June 1981',
    'http://vignette2.wikia.nocookie.net/disney/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150615084744',
    [
        { id: 1, priceMonthly: 30.56, start: new Date('27 June 2015'), isActive: true },
        { id: 2, priceMonthly: 20.20, start: new Date('27 June 2010'), isActive: false },
        { id: 3, priceMonthly: 10.00, start: new Date('27 June 2005'), isActive: false }
    ]),
    new Customer(2, 'Fer', 'Sal', '25 November 1984',
    'http://vignette4.wikia.nocookie.net/disney/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20150615091236',
    [
        { id: 4, priceMonthly: 30.56, start: new Date('27 June 2012'), isActive: false },
        { id: 5, priceMonthly: 18.60, start: new Date('27 June 2008'), isActive: true },
        { id: 6, priceMonthly: 9.38, start: new Date('27 June 2002'), isActive: true }
    ]),
    new Customer(3, 'Lau', 'Sal', '04 March 2013',
    'https://vignette2.wikia.nocookie.net/pixar/images/e/ed/Joy-Inside-Out-borders.jpg/revision/latest?cb=20150718214419')
];
