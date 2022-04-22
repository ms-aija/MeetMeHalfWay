const { Router } = require('express');
const airportsController = require('./controllers/airports');
const destinationController = require('./controllers/destinations');

const router = Router();

// -- Routes
router.get('/airports', airportsController.getAirportList);
router.get('/destinations/:id', destinationController.getDestinationCityList);


module.exports = router;