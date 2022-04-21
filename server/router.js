const { Router } = require('express');
const airportsController = require('./controllers/airports')

const router = Router();

// Routes
router.get('/airports', airportsController.getAirportList);
router.get('/destinations', (req, res) => {console.log('is in destinations controller')});


module.exports = router;