import * as expressModule from 'express';
const ex = require('express');
const route = ex.Router();
const { filterAndSort } = require('../controllers/Filter');

route.get('/filter', filterAndSort)

module.exports = route;