# GitHub Search

> An Angular monorepo structure example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

However many changes have been performed on it by following these guidelines of these articles:

* [The Angular MonoRepo (I): configurations](https://medium.com/@gesteira2046/the-angular-monorepo-i-configurations-2a2884da66ac)
* [The Angular MonoRepo (II): folders](https://medium.com/@gesteira2046/the-angular-monorepo-ii-folders-f902a44309ea)

By following this architecture we make our project much more scalable and at the same time makes much easier so sync all the packages. Now you only want an app to perform searches on users, but what if in the future you need other applications that are extremely similar but do other types of searches?..

Exactly...

## User Search App

It is simple: the home page shows a search section with a field to find users.

Let's see what happens when we look for "kaplan".

<img src="screenshots/github-user-search-home.png">

A routing navigation takes you to the users page with a detailed list about each of them.

The results are paginated by 10 and you can navigate to the next or the previous page.

A shared search form component appears in the header. It has the same functionality as the one in the home page.

If you click on the login name of a user a new tab with the corresponding GitHub Page gets open.

<img src="screenshots/github-user-search-users-list.png">
<img src="screenshots/github-user-search-users-prev-next-btns.png">

Oh, and if you want to go back to the home page just click on the GitHub Octicon at the top left corner.

## Up and running
Please make sure that you have NodeJS LTS installed in your machine.

Then clone the repo and run `npm i`. 

## Serve

Run `npm start` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Unit tests

Run `npm test` to test the project with [Jest](https://jestjs.io/).

## End-to-end tests

e2e testing may be provided in the future with [Cypress](https://www.cypress.io/)

## Folder structure

This project provides a suggested folder structure to implement [NGRX](https://ngrx.io/) in the future. This is the reason why many folders only contain a Typescript barrel file.

Nevertheless it is worth adoptinng this folder structure since it makes a very clear separation of concerns between container components and pure/presentational components. This way you can set `ChangeDetectionStrategy.OnPush` in all your components.

## Libraries

2 libraries have been created with the Angular CLI:

* `ng-kit` for Angular features (mostly declarations and services) that may be used by the various apps of the monorepo. For instance check out how `RouterEventsService` is implemented in `app.component.ts`. Or how `ConfigService` is implemented in `user.service.ts`: it takes all the api strings from a configuration file and this functionality can be shared across applications. 

* `test-kit` contains test utilities, e.g. `component-suite.ts` which generates all the boilerplate needed on both shallow and integration unit tests (`fixture`, `component`, `debugEl` and `nativeEl`). This saves a lot of lines of code and my specs are much more readable.

## CSS Framework

The `scss` folder in the `user-search` application takes care of all the necessary CSS infrastructure.

`reset.scss` is based on [Eric Meyer's reset](https://meyerweb.com/eric/tools/css/reset).

The rest of the files are partials to be imported in `styles.scss`:

- functions
- mixins
- \*rules
- variables

\*"rules" are utility classes to be declared on our templates.

There is also a Grid System implemented. It is pretty much Bootstrap-like but rows are now grid displayed divs. You can see how this declarations are done in `users-pure.component.html` for instance.

The main benefit we obtain is:

* Apart from the classical 12 column system we have the alternative of using a 10 column based one.
* We do not need to install any library.

Mobile first is the default approach but if we use the hidden rule we can use `hidden-xx-down` classes to think the opposite just for things that we do not intend to display on ocassions.

