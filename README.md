# Simple-angular-starter

This project provides a simple and reliable application skeleton for an Angular 5 application. You can use it for quikly start your application. The watchword of 'simple-angular-starter' is SIMPLE !

'Simple-angular-starter' is based on Webpack. Unlike Angular-CLI, you use customize your project as you want. 

`angular-seed` provides the following features:

- Allows you to manage different environments (DEV, PROD, ...).
- **Ahead-of-time** compilation even in dev mode.
- **Tree-Shaking** with Ugligy and Webpack.
- **build optimizer** contains Angular optimizations to Javascript code
- Unit tests with Jasmine and Karma + code coverage via Istanbul;
- Development server with LiveReload.
- Code Quality with tslint and Codelyzer for the best pratice Angular. 


## Getting Started

To get you started you can simply clone the `simple-angular-starter` repository and install the dependencies:

### Prerequisites

You need git to clone the `simple-angular-starter` repository. You can get git from [here][git].

Now, you can clone the `simple-angular-starter` repository using git:

```
git clone https://github.com/wKoza/simple-angular-starter.git
cd simple-angular-starter
```

If you just want to start a new project without the `simple-angular-starter` commit history then you can do:

```
git clone --depth=1 https://github.com/wKoza/simple-angular-starter.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

You should have to download dependencies via npm like this :

```
npm install
```

## Run the Application

`simple-angular-starter` come with a development server. The simplest way to start this server is:

```
npm start
```

Now browse to the app at http//localhost:8080

## Using environment-specific variables 

`simple-angular-starter` offers a system for manage environment-specific variables in your application. There is two files that manage two configurations : 

src/environments/
                environment.dev.ts
                environment.prod.ts

You can use them to put your backend url for example. By default, in development, the file `environment.dev.ts` is used. You can change that by adding ENV=prod before your command :  

```
ENV=prod npm start
```

Now browse to the app at http//localhost:8080


## Running tests

`simple-angular-starter` comes with [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/).
You can run yours tests with the command : 

```
npm test
```

## Running lint

`simple-angular-starter` use [tslint](https://palantir.github.io/tslint/) and [Codelyzer](http://codelyzer.com/) for the linting. You can check this with the command : 

```
npm run lint
```

## And in production ?

You can generate a set of bundle for the production. This command make the job : 

```
npm run build
```

After that, your application is available in the `dist` folder.
