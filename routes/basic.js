/* Copyright (c) 2019, Amazon Web Services, Inc */
'use strict'

const request = require('superagent');
const omdbApiPrefix = 'http://www.omdbapi.com/?apikey=';

module.exports = ({router}) => {
  router.get('health', '/health', (ctx, next) => {
    ctx.body = "alive.";  
  });
  
  router.get('famous-peeps', '/', async (ctx, next) => {
    let omdbApi = omdbApiPrefix + ctx.omdbApiKey + '&i=';
    
    ctx.body = 'famous peeps\n'; 
    let movie;
    for (movie of ctx.starterMovies) {
      await request
      .get(omdbApi + movie.id)
      .then(res => {
        ctx.body += (res.body.Actors + '\n');
      })
      .catch(err => {
        console.log(err);
      });
    }
  });
};