import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';

const SearchResult = ({ originAirports, allAirports, destinationCities }) => {
  // console.log('destination cities in searchResult component: ', destinationCities)

  // -- Create an array of origin airports with geo-location
  let originAirportGeoLocation = [];
  for (let originCode of originAirports) {
    let airportLocation = {};
    for (let airport of allAirports) {
      // console.log({airport});
      if (airport.code === originCode) {
        airportLocation = {
          code: originCode,
          name: airport.name,
          lat: airport.lat,
          lon: airport.lon
        }
        originAirportGeoLocation.push(airportLocation)
      }
    }
  }
  // console.log({originAirportGeoLocation});

  // -- Create an array of destination cities with geo-location
  let destinationCityGeoLocation = [];
  // console.log('destination cities for geolocation: ', destinationCities);
  // console.log('destination cities length: ', destinationCities.length)
  let destCityLength = !destinationCities[0] ? 0 : destinationCities[0].length
  // console.log({destCityLength})
  for (let i = 0; i < destCityLength; i++) {
    let destCityLocation = {};
    for (let airport of allAirports) {
      // console.log({airport});
      // console.log('destCity in loop: ', destinationCities[0][i]);
      if (airport.code === destinationCities[0][i].iataCode) {
        destCityLocation = {
          code: airport.code,
          name: destinationCities[0][i].name,
          lat: airport.lat,
          lon: airport.lon
        }
        destinationCityGeoLocation.push(destCityLocation)
      }
    }
    // console.log({destCityLocation})
    if (!destCityLocation.code) {
      destinationCityGeoLocation.push({
        code: destinationCities[0][i].iataCode,
        name: destinationCities[0][i].name,
        lat: 9999,
        lon: 9999
      })
    }
  }
  // console.log({ destinationCityGeoLocation });

  // -- Custom icons
  const originIcon = new Icon({
    iconUrl: '/icons8-location-64.png',
    iconSize: [33, 33],
    // iconAnchor: [22, 94],
    // popupAnchor: [-0, -76]
  })
  const destIcon = new Icon({
    iconUrl: '/icons8-select-24.png',
    iconSize: [17, 17],
    // iconAnchor: [22, 94],
    // popupAnchor: [-0, -76]
  })


  // -- Dev

  return (
    <div className='SearchResult'>


      <MapContainer center={[30, 30]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Origin airport markers */}
        {originAirportGeoLocation.map(origin => {
          return <Marker key={origin.code} position={[origin.lat, origin.lon]} icon={originIcon}>
            <Popup>{origin.name} ({origin.code})</Popup>
          </Marker>
        })}

        {/* Destination city markers */}
        {destinationCityGeoLocation.map(destination => {
          return <Marker key={destination.name} position={[destination.lat, destination.lon]} icon={destIcon}>
            <Popup>
              {destination.name} ({destination.code})
              <br/><a href={`https://www.skyscanner.de/transport/flights/${originAirports[0]}/${destination.code}`} target="_blank">{originAirports[0]}-{destination.code}</a>
            </Popup>
          </Marker>
        })}
      </MapContainer>


      <section className='list-of-destination-city-names'>
        {(destinationCities.length > 0) && (destinationCities[0].map(city => {
          /* console.log('cities in mapping destination cities: ', city) */
          return <p key={city.name} className='destination-city-name'>{city.name}</p>
        }))}
      </section>


    </div>
  )
}

export default SearchResult