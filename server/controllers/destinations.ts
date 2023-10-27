import amadeus from '../util/AmadeusAPI';
import { AmadeusDestinationResult, AmadeusDestinationError } from 'amadeus';
import Express from 'express';

export function getDestinationCityList(
  req: Express.Request,
  res: Express.Response
) {
  amadeus.client
    .get('/v1/airport/direct-destinations', {
      departureAirportCode: req.params.id,
      max: 300,
    })
    .then(function (response: AmadeusDestinationResult) {
      res.json({ status: 'OK', data: response.data });
      res.status(200);
    })
    .catch(function (error: AmadeusDestinationError) {
      res.json({
        status: 'FAILED',
        data: {
          error:
            'The server could not return the list of destination cities at this time',
        },
      });
      res.status(500);
      console.error(error);
    });
}
