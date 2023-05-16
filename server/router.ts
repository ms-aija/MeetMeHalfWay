'use strict'

import { Router } from 'express';
import { getAirportList } from './controllers/airports';
import {  getAirports } from './controllers/airports';
import { getDestinationCityList } from './controllers/destinations';

const router = Router();

// -- Routes
router.get('/airports/:airportName', getAirports); // gets n airports from Amadeus API
// router.get('/airports', getAirportList); // gets all airpots from the json file
router.get('/destinations/:id', getDestinationCityList); // gets all destinations for a given airport

export default router;