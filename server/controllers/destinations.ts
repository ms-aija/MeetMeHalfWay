// -- DESTINATIONS CONTROLLER
// -- Destination data from Amadeus API
import Amadeus from 'amadeus';
import { AmadeusDestinationResult, AmadeusDestinationError } from 'amadeus'
import Express from 'express';


const amadeus = new (Amadeus as any)({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  hostname: 'test'
});

export function getDestinationCityList(req: Express.Request, res: Express.Response) {
  amadeus.client.get('/v1/airport/direct-destinations', { departureAirportCode: req.params.id, max: 300 })
    .then(function (response: AmadeusDestinationResult) {
      res.json(response.data);
      res.status(200);
    })
    .catch(function (error: AmadeusDestinationError) {
      res.status(500);
      console.error(error);
    });
}
