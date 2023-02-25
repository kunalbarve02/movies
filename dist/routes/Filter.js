"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex = require('express');
const route = ex.Router();
const { filterAndSort } = require('../controllers/Filter');
route.get('/filter', filterAndSort);
module.exports = route;
