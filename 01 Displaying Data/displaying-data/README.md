# DisplayingData

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

In this demo we are going to display some customers in a list. We will create a Customer entity and add mocked data in our App component. We'll also add Bootstrap to help us style the project.

1. First of all, install Bootstrap by using `npm install bootstrap --save`.
2. Next, create a `styles.css` file under `src/app` folder and import Bootstrap.

    ```css
    /* You can add global styles to this file, and also import other style files */
    @import '../node_modules/bootstrap/dist/css/bootstrap.css';

    .portrait img {
        width: 50px;
    }
    ```

3. Add a new folder called `models` under `src/app` and create a `customer.model.ts` file it.
