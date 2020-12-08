const express = require('express');

const carsRouter = require('./cars/cars-router.js');

// const db = require('../data/dbConfig');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'the api is running' });
});

module.exports = server;
