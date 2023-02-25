import * as express from 'express';
const route = express.Router();
const { filterAndSort } = require('../controllers/Filter');

route.get('/filter', filterAndSort)

module.exports = route;