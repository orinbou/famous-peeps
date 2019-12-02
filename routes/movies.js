/* Copyright (c) 2019, Amazon Web Services, Inc */
'use strict'

module.exports = ({movieRouter}) => {
  // this is not async, it should be when it hits a real db
  movieRouter.get('famous peeps movies', '/', (ctx, next) => {
    ctx.body = 'famous peeps movies\n';
    ctx.starterMovies.forEach(element => {
      ctx.body += (element.name + ', ');
    });
    ctx.body = ctx.body.substr(0, ctx.body.length-2);
  });

  // as an exercise, write a POST route to add a new movie from OMDB, therefore increasing the number of famous peeps 
};