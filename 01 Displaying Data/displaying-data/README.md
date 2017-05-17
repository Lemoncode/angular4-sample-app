# Displaying data

In this sample we will install Bootstrap, add some styles and create some custom data to display a table in our app.
We will take as starting point the sample 00 Hello World.

## Summary
- Add Bootstrap
- Create customer entity
- Add some customers to our main component and change the component template

### Add Bootstrap

To add Bootstrap to the project open a command prompt, first locate yourself inside the project folder and execute:

```shell
npm install bootstrap --save
```

Next let's create a `styles.css` file under `src` folder, import Bootstrap and add some basic style:

```css
/* You can add global styles to this file, and also import other style files */
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

body {
  padding: 50px;
}
```

### Create customer entity

Now we have set up some styles let's create a `models` folder inside `src/app` and create a `customer.model.ts` file. This entity will have some basic info and a method to get the age:

```ts
export class Customer {
  firstName: string;
  lastName: string;
  birthdate: Date;
  imageUrl?: string;

  constructor(firstName?: string,
    lastName?: string,
    birthdate?: string,
    imageUrl?: string) {
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

### Add some customers to our application

First let's change the title for something more descriptive like _Displaying Data Demo_.

```diff
  export class AppComponent implements OnInit {
-   title = 'app works!';
+   title = 'Displaying Data Demo';
```

Next let's create a customer array as a private property to hold some data and initialize it in the constructor:

```diff
  export class AppComponent implements OnInit {
    title = 'Displaying Data Demo';
+   private customers: Customer[];
+
+   constructor() {
+     this.customers = [
+       new Customer('Jai', 'Sal', '25 June 1981', 'http://vignette2.wikia.nocookie.+et/disney/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?+b=20150615084744'),
+       new Customer('Fer', 'Sal', '25 November 1984'),
+       new Customer('Lau', 'Sal', '04 March 2013')
+     ];
+   }
...
```

Then let's add the main customer we're going to display. It will be a public property called `customer` and will be initialized in `ngOnInit` method lyfecycle:

```diff
  export class AppComponent implements OnInit {
    title = 'Displaying Data Demo';
    private customers: Customer[];
+   customer: Customer;

    constructor() {
      ...
    }

    ngOnInit() {
+     this.customer = this.customers[0];
    }
  }
```

Finally let's change the `app.component.html` template to display the customer info. We'll use Bootstrap basic layout to display a row showing the first name, last name, age and an image showing the avatar:

```diff
  <h1>
    {{title}}
  </h1>
+
+ <div class="row">
+   <div class="col-md-3">
+     <label>First Name:</label>
+     <span>{{customer.firstName}}</span>
+   </div>
+   <div class="col-md-3">
+     <label>Last Name:</label>
+     <span>{{customer.lastName}}</span>
+   </div>
+   <div class="col-md-3">
+     <label>Age:</label>
+     <span>{{customer.getAge()}}</span>
+   </div>
+   <div class="col-md-3">
+     <img class="img-reponsive" alt="Customer Image" [src]="customer.imageUrl"/>
+   </div>
+ </div>
```

To see the result execute `npm start` (or `ng serve`) in the command prompt and open [http://localhost:4200](http://localhost:4200).

In the next sample we will display the customers collection by creating a new component that will render each row.

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
