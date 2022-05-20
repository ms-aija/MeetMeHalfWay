// -- DESTINATIONS CONTROLLER
// -- Destination data from Amadeus API
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

function getDestinationCityList(req, res) {
  amadeus.client.get('/v1/airport/direct-destinations', { departureAirportCode: req.params.id, max: 300 })
    .then(function (response) {
      res.json(response.data);
      res.status(200);
    })
    .catch(function (error) {
      res.status(500);
      console.error(error);
    });
}

module.exports = { getDestinationCityList };