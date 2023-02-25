const express = require('express');
const bodyparser = require('body-parser');
const { exec } = require('child_process');
require('dotenv').config();

const connection = require('./DB');

const app = express();

//routes
const dataRoutes = require('./routes/Data');
const filterRoutes = require('./routes/Filter');

//middlewares
app.use(bodyparser.json());

//routes middleware
app.use('/api', dataRoutes);
app.use('/api', filterRoutes);

const port:Number = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});