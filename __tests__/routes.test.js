/* Copyright (c) 2019, Amazon Web Services, Inc */
'use strict'

const request = require('supertest');
const server = require('../index.js');

beforeAll(async () => {
  console.log('jest is starting.');
});

afterAll(() => {
  server.close();
  console.log('server closed.');
});

describe('route tests', () => {
  test('route GET famous-peeps', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('famous peeps');
  });
  
  test('route GET health', async () => {
    const response = await request(server).get('/health');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('alive');
  });
});

describe('famous peeps movies route tests', () => {
  test('route GET famous-peeps movies', async () => {
    const response = await request(server).get('/movies');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('famous peeps movies');
  });
});