import * as expressModule from 'express';
const express = require('express') as typeof expressModule;

const router = express.Router();
const { postData, resetData } = require('../controllers/Data')

router.post('/data/seed',postData)
router.delete('/data/reset',resetData)

module.exports = router;