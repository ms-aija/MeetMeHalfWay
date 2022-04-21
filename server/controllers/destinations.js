// DESTINATIONS CONTROLLER

const destinationData = require('../assets/destinations.json');

async function getDestinationCityList(req, res) {
  try {
    const listOfDestinationCities = [];
    // Create an array or all destination city IATA codes
    for (let element of destinationData) {
      // console.log('element origin: ',element.meta.origin);
      // console.log('param: ',req.params.iataCode);
      if (element.meta.origin === req.params.iataCode) {
        for (let city of element.data) {
          listOfDestinationCities.push(city);
        }
      }
    }
    // Response
    res.json(listOfDestinationCities);
    res.status(200);
  } catch (err) {
    res.status(500);
    console.error(err);
  }
}

module.exports = { getDestinationCityList };