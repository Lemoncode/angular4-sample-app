# User Interactions

In this sample we will create some events emitters to toggle the customers list visibility and show its contracts. We'll also create a simple service that will supply customers instead of initially having them in AppComponent.
We will take as starting point the sample 02 Displaying Collections.

## Summary
- Create a `customerService` to hold customers and contracts. Inject the `customerService` in `AppComponent` to retrieve customers.
- Create `Contract` model and add  itto `Customer` model as an Array.
- Create a button to toggle customer list visibility.
- Create a customer row handler to display extra customer info.

## Steps

### Cleaning AppComponent

Let's start by adding a new property called `id` to our `Customer` model to give them an unique identifier:

```diff
  export class Customer {
+   id: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    imageUrl?: string;

-   constructor(firstName?: string,
+   constructor(id: number,
+     firstName?: string,
      lastName?: string,
      birthdate?: string,
      imageUrl?: string) {
+     this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdate = new Date(birthdate);
      this.imageUrl = imageUrl;
    }

    getAge(): number {
      const millisecondsDiff: number = Date.now() - this.birthdate.getTime();
      const ageDate = new Date(millisecondsDiff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }

```

next we are going to create the `customerService`. Add a new folder in `src/app` called `services` and create a `customer.service.ts` file. This service will hold the customers data and it will expose a `getCustomers()` method to return the customers:

```ts
import { Injectable  } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerService {
  getCustomers(): Customer[] {
    return CUSTOMERS;
  }
}

const CUSTOMERS : Customer[] = [
  new Customer(1, 'Jai', 'Sal', '25 June 1981',
  'http://vignette2.wikia.nocookie.net/disney/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150615084744'),
  new Customer(2, 'Fer', 'Sal', '25 November 1984',
  'http://vignette4.wikia.nocookie.net/disney/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20150615091236'),
  new Customer(3, 'Lau', 'Sal', '04 March 2013',
  'https://vignette2.wikia.nocookie.net/pixar/images/e/ed/Joy-Inside-Out-borders.jpg/revision/latest?cb=20150718214419')
];
```

> The `@Injectable()` decorator marks a class as available to an injector for instantiation. This means when the injectable class will be instanced once and that instance will automatically be suplied in all needed components instead of generating a new service.

Next we need to declare the new service in `app.module.ts` to be available in the main module in a `providers` section:

```diff
  ...
  import { CustomerContractsComponent } from './customer/customer-contracts.component';
+ import { CustomerService } from './services/customer.service';

  @NgModule({
    declarations: [
      AppComponent,
      CustomerSummaryComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule
    ],
+   providers: [
+     CustomerService
+   ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

Then we can add the new service in our `AppComponent`. We'll add it in the `constructor`, remove the customers initialization and call the service to initialize customers:

```diff
  import { Component, OnInit } from '@angular/core';
  import { Customer } from './models/customer.model';
+ import { CustomerService } from './services/customer.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
-   title = 'Displaying Collections Demo';
+   title = 'User Interactions Demo';
    customers: Customer[];

-   constructor() {
+   constructor(private customerService: CustomerService) {
    }

    ngOnInit() {
-     this.customers = [
-       new Customer('Jai', 'Sal', '25 June 1981',
-       'http://vignette2.wikia.nocookie.net/disney/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150615084744'),
-       new Customer('Fer', 'Sal', '25 November 1984',
-       'http://vignette4.wikia.nocookie.net/disney/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20150615091236'),
-       new Customer('Lau', 'Sal', '04 March 2013',
-       'https://vignette2.wikia.nocookie.net/pixar/images/e/ed/Joy-Inside-Out-borders.jpg/revision/latest?cb=20150718214419')
-     ];
-   }
+   this.customers = this.customerService.getCustomers();
  }
```

### Creating a new model

Let's create now a `Contract` model to give customers more information. Create a new file in `src/app/models` folder called `contract.model.ts`. It will expose an interface representing the contract data:

```ts
export interface IContract {
  id: number;
  priceMonthly: number;
  start: Date;
  isActive: boolean;
}
```

Next we'll edit the `Customer` model to optionally include an array of contracts:

```diff
+ import { IContract } from './contract.model';

  export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    imageUrl?: string;
+   contracts?: IContract[];

    constructor(id: number,
      firstName?: string,
      lastName?: string,
      birthdate?: string,
-     imageUrl?: string) {
+     imageUrl?: string,
+     contracts?: IContract[]) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdate = new Date(birthdate);
      this.imageUrl = imageUrl;
+     this.contracts = contracts;
    }

    getAge(): number {
      const millisecondsDiff: number = Date.now() - this.birthdate.getTime();
      const ageDate = new Date(millisecondsDiff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
```

Then we can add in the `customerService` some contracts to our customers. We can expose now `getCustomer` and `getCustomerContracts` methods to retrieve a customer and its contracts:

```diff
  import { Injectable  } from '@angular/core';
  import { Customer } from '../models/customer.model';
+ import { IContract } from "app/models/contract.model";

  @Injectable()
  export class CustomerService {
    getCustomers(): Customer[] {
      return CUSTOMERS;
    }
+   getCustomer(customerId: number) {
+     return CUSTOMERS.find(customer => customer.id == customerId);
+   }
+
+   getCustomerContracts(customerId: number): IContract[] {
+     return CUSTOMERS.find(customer => customer.id == customerId).contracts; ;
+   }
  }

  const CUSTOMERS : Customer[] = [
    new Customer(1, 'Jai', 'Sal', '25 June 1981',
-    'http://vignette2.wikia.nocookie.net/disney/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150615084744'),
+   'http://vignette2.wikia.nocookie.net/disney/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150615084744',
+   [
+     { id: 1, priceMonthly: 30.56, start: new Date('27 June 2015'), isActive: true },
+     { id: 2, priceMonthly: 20.20, start: new Date('27 June 2010'), isActive: false },
+     { id: 3, priceMonthly: 10.00, start: new Date('27 June 2005'), isActive: false }
+   ]),
    new Customer(2, 'Fer', 'Sal', '25 November 1984',
-   'http://vignette4.wikia.nocookie.net/disney/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20150615091236'),
+   'http://vignette4.wikia.nocookie.net/disney/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20150615091236',
+   [
+     { id: 4, priceMonthly: 30.56, start: new Date('27 June 2012'), isActive: false },
+     { id: 5, priceMonthly: 18.60, start: new Date('27 June 2008'), isActive: true },
+     { id: 6, priceMonthly: 9.38, start: new Date('27 June 2002'), isActive: true }
+   ]),
    new Customer(3, 'Lau', 'Sal', '04 March 2013',
    'https://vignette2.wikia.nocookie.net/pixar/images/e/ed/Joy-Inside-Out-borders.jpg/revision/latest?cb=20150718214419')
  ];
```







---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Note

Starts from previous demo.

## Steps

In this demo we are going to create our first service. We already have customers hardcoding in our
app component. First we will extract this to a service, although is goin to still being hardcoding
data.
