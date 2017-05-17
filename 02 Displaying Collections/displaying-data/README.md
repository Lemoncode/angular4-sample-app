# Displaying collections

In this sample we will make some changes to our main component to display a customer collection. We will create a new component that will be used by our main component to dynamically display each customer.
We will take as starting point the sample 01 Displaying Data.

## Summary
- Change main component customers
- Create new component with template
- Use the new component to display each customer in our main component's template

### Make some cleaning

Let's start by changing the `AppComponent.title` to show something more apropiated for this example:

```diff
...
  export class AppComponent implements OnInit {
-   title = 'Displaying Data Demo';
+   title = 'Displaying Collections Demo';
    private customers: Customer[];
    customer: Customer;
...
```

Next we'll remove the `customer` reference and make `customers` collection public. We also add an avatar for each customer:

```diff
...
  export class AppComponent implements OnInit {
-   private customers: Customer[];
-   customer: Customer;
    title = 'Displaying Collections Demo';
+   customers: Customer[];

    constructor() {}

    ngOnInit() {
      this.customers = [
        new Customer('Jai', 'Sal', '25 June 1981',
        'http://vignette2.wikia.nocookie.net/disney/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150615084744'),
-       new Customer('Fer', 'Sal', '25 November 1984'),
-       new Customer('Lau', 'Sal', '04 March 2013')
+       new Customer('Fer', 'Sal', '25 November 1984',
+       'http://vignette4.wikia.nocookie.net/disney/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20150615091236'),
+       new Customer('Lau', 'Sal', '04 March 2013',
+       'https://vignette2.wikia.nocookie.net/pixar/images/e/ed/Joy-Inside-Out-borders.jpg/revision/latest?cb=20150718214419')
      ];
    }
  }
```

### Creating a row component

To make some separation of concepts we will create a new component that receives a customer and shows its personal info. To achieve this let's start by creating a new folder inside `src/app` called `customer` and create a new `customer-summary.component.ts`:

```ts
import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer.model';
// We can use prefix for all our components.
@Component({
    selector: 'app-customer-summary',
    templateUrl: './customer-summary.component.html'
})
export class CustomerSummaryComponent {
    @Input() customer: Customer;
}
```

This component will receive a `Customer` entity and will reference it with the `@Input` decorator to store its reference in the `customer` property. This component will render a template to the customer information, so let's create a `customer-summary.component.html` beside the new component:

```html
<div class="row">
  <div class="col-md-3">
    <label>First Name:</label>
    <span>{{customer.firstName}}</span>
  </div>
  <div class="col-md-3">
    <label>Last Name:</label>
    <span>{{customer.lastName}}</span>
  </div>
  <div class="col-md-3">
    <label>Age:</label>
    <span>{{customer.getAge()}}</span>
  </div>
  <div class="col-md-3">
    <div class="portrait">
      <img class="img-reponsive" alt="Customer Image" [src]="customer.imageUrl"/>
    </div>
  </div>
</div>
```

Now we have the new `CustomerSummaryComponent` let's declare it in our app's module `declarations` section to be available as a dependency:

```diff
  ...
  import { AppComponent } from './app.component';
+ import { CustomerSummaryComponent } from './customer/customer-summary.component';

  @NgModule({
    declarations: [
-     AppComponent
+     AppComponent,
+     CustomerSummaryComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

Finally we can use the new `CustomerSummaryComponent` in our `AppComponent` template directly. Let's remove the customer rendering logic and use the `CustomerSummaryComponent` template `app-customer-summary`:

```diff
  <h1>
    {{title}}
  </h1>

- <div class="row">
-   <div class="col-md-3">
-     <label>First Name:</label>
-     <span>{{customer.firstName}}</span>
-   </div>
-   <div class="col-md-3">
-     <label>Last Name:</label>
-     <span>{{customer.lastName}}</span>
-   </div>
-   <div class="col-md-3">
-     <label>Age:</label>
-     <span>{{customer.getAge()}}</span>
-   </div>
-   <div class="col-md-3">
-     <img class="img-reponsive" alt="Customer Image" [src]="customer.imageUrl"/>
-   </div>
- </div>
+ <!--Show how works ngFor-->
+ <div class="container" *ngFor="let customer of customers">
+   <app-customer-summary [customer]=customer>
+   </app-customer-summary>
+ </div>
```

As you can see we are iterating through the `AppComponent's customer` collection and feeding each `customer` to the `CustomerSummaryComponent` via `customer` attribute.

> Note we use `<app-customer-summary>` tag instead of `<customer-summary-component>`. That's why we declared the `selector` as `app-customer-summary` in `CustomerSummaryComponen's @Component` decorator and the tag name must be the same as `selector` name.

Finally let's edit `styles.css` file to make the images smaller:

```diff
- body {
-   padding: 50px;
- }
+ .portrait img {
+   width: 150px;
+ }
```

To see the result open a command prompt and locate yourself into the project folder and execute `npm start` (or `ng serve`) and open [http://localhost:4200](http://localhost:4200) in the browser;

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
