var express = require('express');
var router = express.Router();
const data = require('../helpers/excel');
const carOwnerController = require('../controllers/carOwner');

/* GET home page. */
router.get('/', carOwnerController.getCarOwnersByFilter);
router.get('/filters',carOwnerController.getFilters);

module.exports = router;
