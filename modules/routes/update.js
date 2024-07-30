const express = require('express');
const route = express.Router();

const updatecontroller = require('./../controllers/update');

route.get('/lastversion',updatecontroller.lastversion);
route.post('/add',updatecontroller.add);


module.exports = route;