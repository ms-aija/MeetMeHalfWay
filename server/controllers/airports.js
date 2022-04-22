// AIRPORTS CONTROLLER

// No DB or models. Data coming directly from a json file.
const airportsData = require('../assets/airports.json');

async function getAirportList(req, res) {
  try {
    // console.log('is in getAirportList');
    // console.log('airport data sample: ',airportsData.slice(0,2));
    const listOfAirports = [];
    const minDirectFlightsFromAirport = 30;
    // Create a list of airports containing only the chosen properties
    for (let element of airportsData) {
      // console.log({element});
      if (element.direct_flights >= minDirectFlightsFromAirport) {
        itemToAdd = {
          code: element.code,
          name: element.name,
          city: element.city,
          state: element.state,
          country: element.country,
          direct_flights: element.direct_flights,
          lat: element.lat,
          lon: element.lon

        };
        listOfAirports.push(itemToAdd);
      }
    }
    // Response
    res.json(listOfAirports);
    res.status(200);
  } catch (err) {
    res.status(500);
    console.error(err);
  }
}

module.exports = { getAirportList };