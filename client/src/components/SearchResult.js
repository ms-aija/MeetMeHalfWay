import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';

const SearchResult = ({ originAirports, allAirports, destinationCities }) => {
  // console.log('destination cities in searchResult component: ', destinationCities)

  // -- Create an array of origin airport with geo-location
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


  return (
    <div className='SearchResult'>
      <h4>Common destinations</h4>

      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {originAirportGeoLocation.map(origin => {
          return <Marker key={origin.code} position={[origin.lat, origin.lon]}>
            <Popup>{origin.name} ({origin.code})</Popup>
          </Marker>
        })}
      </MapContainer>


      <section className='list-of-destination-city-names'>
        {(destinationCities.length > 0) && (destinationCities[0].map(city => {
          {/* console.log('cities in mapping destination cities: ', city) */ }
          return <p key={city.name} className='destination-city-name'>{city.name}</p>
        }))}
      </section>
    </div>
  )
}

export default SearchResult