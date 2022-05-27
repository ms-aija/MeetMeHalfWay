import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';

const SearchResult = ({ originAirports, allAirports, destinationCities }) => {

  // -- Create an array of origin airports with geo-location
  let originAirportGeoLocation = [];
  for (let originCode of originAirports) {
    let airportLocation = {};
    for (let airport of allAirports) {
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

  // -- Create an array of destination cities with geo-location
  let destinationCityGeoLocation = [];
  let destCityLength = !destinationCities ? 0 : destinationCities.length
  for (let i = 0; i < destCityLength; i++) {
    let destCityLocation = {};
    for (let airport of allAirports) {
      if (airport.code === destinationCities[i].iataCode) {
        destCityLocation = {
          code: airport.code,
          name: destinationCities[i].name,
          lat: airport.lat,
          lon: airport.lon
        }
        destinationCityGeoLocation.push(destCityLocation)
      }
    }

    if (!destCityLocation.code) {
      destinationCityGeoLocation.push({
        code: destinationCities[i].iataCode,
        name: destinationCities[i].name,
        lat: 9999,
        lon: 9999
      })
    }
  }

  // -- Custom icons
  const originIcon = new Icon({
    iconUrl: '/icons8-location-64.png',
    iconSize: [33, 33],
    // iconAnchor: [1, 1],
    // popupAnchor: [-0, -76]
  })
  const destIcon = new Icon({
    iconUrl: '/icons8-select-24.png',
    iconSize: [17, 17],
    // iconAnchor: [22, 94],
    // popupAnchor: [-0, -76]
  })

  return (
    <div className='SearchResult'>


      <MapContainer center={[37, 10]} zoom={3} scrollWheelZoom={true}>
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
            <Popup width={70}>
              {destination.name} ({destination.code})
              <br />
              <div className='map-popup-flight-list'>
              ✈︎
              {originAirports.map(airport => {
                return <div className='map-popup-flight-list-item'>
                  <a
                    href={`https://www.skyscanner.de/transport/flights/${airport}/${destination.code}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    &nbsp;{airport}-{destination.code}&nbsp;
                  </a>
                  ✈︎
                </div>
              }
              )}
              </div>
            </Popup>
          </Marker>
        })}
      </MapContainer>


      <section className='list-of-destination-city-names' id='footer'>
        {(destinationCities.length > 0) && (destinationCities.map(city => {
          return <p key={city.name} className='destination-city-name'>{city.name}</p>
        }))}
      </section>


    </div>
  )
}

export default SearchResult