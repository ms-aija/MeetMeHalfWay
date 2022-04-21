// DESTINATIONS CONTROLLER

const destinationData = require('../assets/destinations.json');

async function getDestinationCityList(req, res) {
  try {
    const listOfDestinationCities = [];
    // Create an array or all destination city IATA codes
    // console.log('param: ',req.params.id);
    for (let element of destinationData) {
      // console.log('element origin: ',element.meta.origin);
      if (element.meta.origin === req.params.id) {
        // console.log('element.data: ',element.data)
        listOfDestinationCities.push(element.data)
        // for (let city of element.data) {
          // listOfDestinationCities.push(city);
        // }
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