# Criticize!

> Little Project aimed to allow people criticize stuff being anonymous.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Heroku configuration

### Environment Variables
We want to compile and build Vue's /dist folder directly onto the server, so we need to set

``` bash
NPM_CONFIG_PRODUCTION = false
```
