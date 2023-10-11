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
    res.json(response.data);
    res.status(200);
  } catch (err) {
    const errorMsg = {
      description:
        'The server could not return the list of airports at this time',
      message: 'Not available',
    };
    res.json(errorMsg);
    res.status(500);
    console.error(err);
  }
}
