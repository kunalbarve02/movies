"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { postData, resetData } = require('../controllers/Data');
router.post('/data/seed', postData);
router.delete('/data/reset', resetData);
module.exports = router;
