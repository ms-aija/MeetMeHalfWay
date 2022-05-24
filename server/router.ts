'use strict'

import { Router } from 'express';
import { getAirportList } from './controllers/airports';
import { getDestinationCityList } from './controllers/destinations';

const router = Router();

// -- Routes
router.get('/airports', getAirportList);
router.get('/destinations/:id', getDestinationCityList);

export default router;