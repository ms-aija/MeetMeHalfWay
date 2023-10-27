'use strict';
import amadeus from '../util/AmadeusAPI';
import Express from 'express';

export async function getAirports(req: Express.Request, res: Express.Response) {
  try {
    const airportName = req.params.airportName;
    const response = await amadeus.referenceData.locations.get({
      keyword: airportName,
      subType: 'AIRPORT',
    });
    res.json({ status: 'OK', data: response.data });
    res.status(200);
  } catch (err) {
    res.json({
      status: 'FAILED',
      data: 'Failed to get list of airports. Try again.',
    });
    res.status(500);
    console.error(err);
  }
}
