# Story book presentation

## Technical stack

* [Babel](https://babeljs.io/)
* [ESLint](http://eslint.org/)
* [i18next](https://www.i18next.com/)
* [Prettier](https://prettier.io/)
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [SASS](http://sass-lang.com/)
* [StyleLint](http://stylelint.io/user-guide/configuration/)
* [Webpack](http://webpack.github.io/)

## Development, build and testing

### Installation

* You'll need to have [git](https://git-scm.com/), [node](https://nodejs.org/en/) and
  [yarn](https://yarnpkg.com/) installed in your system.
* Fork and clone the project, then install the dependencies:

```
yarn
```

And copy configuration:

```
cp .env.example .env
```

### Development

To run project on your localhost (will use `3000` port per default, you can change that in `.env`
file):

```
yarn dev
```

### Build

Production build produce production bundle ready to deploy in `public` directory:

```
yarn build
```

#### Test build

You can test the build by run directly a web-server with compiled files:

```
yarn start
```

### Testing

#### Unit tests

```
$ yarn test
```

To update tests:

```
$ yarn test -u
```

#### ESLint

```
$ yarn lint:js
```

#### StyleLint

```
$ yarn lint:css
```

### React

* React components are located into the folder `src`.

* React components should be written as **Stateless Functional components** when possible.
