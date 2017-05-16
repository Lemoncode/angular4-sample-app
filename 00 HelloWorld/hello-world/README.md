# Hello World

In this sample we are going to set up the boilerplate for an Angular 4 project using [Angular CLI](https://github.com/angular/angular-cli).

## Summary

1. Install Node.js and Angular CLI packages.
2. Initialize a new Angular app using Angular CLI.
3. Start app to view the result.

## Steps

### Installing Node.js and Angular CLI

First of all install [Node.js and npm](http://nodejs.org) on your computer following the link instructions. You can check if you have Node.js installed by opening a command prompt and executing:

```shell
npm -v
```

It should show you something like `4.2.0`, for instance.

and:

```shell
node -v
```

It should show you something like `v7.10.0`, for instance.

> Given versions may not match with these examples. It's fine if you have newer versions of these packages or you have the latest LTS version.

Once you have Node.js installed let's install [Angular CLI](https://github.com/angular/angular-cli) by opening a command prompt and executing:

```shell
npm install -g @angular/cli@latest
```

You can check its version by executing:

```shell
ng -v
```

It should show you among other things at least version `1.0.2`.


### Initialize Angular project

Now you have installed Angular CLI open a command prompt and locate yourself in any folder you want to create the Angular project and execute:

```shell
ng new hello-world
```

After executing the command, `ng` will create some files into a `hello-world` folder and will start installing dependencies. You should end with the next structure:

```
.
├── .angular-cli.json
├── e2e/
├── .editorconfig
├── .git/
├── .gitignore
├── karma.conf.js
├── node_modules/
├── package.json
├── protractor.conf.js
├── README.md
├── src/
├── tsconfig.json
└── tslint.json
```

### Start the project

Finally locate yourself inside `hello-world` folder using the command prompt and execute:

```shell
npm start
```

It will automatically execute `ng serve` to start the Angular application. Open your favourite browser and navigate to [http://localhost:4200](http://localhost:4200) to see the Angular app in action. If it started correctly you'll see an heading with the message `app works`.

In the next sample we will make changes in our Angular app, we will install Bootstrap to give it a nice lookand add some custom data to display.

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
