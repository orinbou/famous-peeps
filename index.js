/* Copyright (c) 2019, Amazon Web Services, Inc */
'use strict'

const Koa = require('koa');
const logger = require('koa-logger');
const KoaRouter = require('koa-router');
const app = new Koa();

// log to terminal
app.use(logger());

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

// add some static data as a global object
app.context.starterMovies = [
  {id: "tt0137523", name: "Fight Club"},
  {id: "tt0058150", name: "Goldfinger"},
  {id: "tt2404435", name: "The Magnificent Seven"}
];

// get your own api key from OMDB, its free
app.context.omdbApiKey = 'c0081ae4';

// routes middleware
const router = new KoaRouter();
require ('./routes/basic')({router});
app.use(router.routes());
app.use(router.allowedMethods());

const movieRouter = new KoaRouter({prefix:'/movies'});
require ('./routes/movies')({movieRouter});
app.use(movieRouter.routes());
app.use(movieRouter.allowedMethods());

// start
const server = app.listen(3000, () => console.log('server running on 3000.'));
module.exports = server;
