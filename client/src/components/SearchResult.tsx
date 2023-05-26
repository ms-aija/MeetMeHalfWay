import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import { useAirportSearch } from '../context/airportContext';
import { IAirport } from '../interfaces/Airports';

const SearchResult = () => {
  const { origin1, origin2, origin3 } = useAirportSearch()!
  const {destinationCities} = useAirportSearch()!

  const [originAirports, setOriginAirports] = useState<(IAirport | null)[]>([]);

  useEffect(() => {
    console.log('origin1: ', origin1)
    console.log('origin2: ', origin2)
    console.log('origin3: ', origin3)
    const originAirports = [origin1.content, origin2.content, origin3.content]
    setOriginAirports(originAirports);
  }, [origin1, origin2, origin3])


  // -- Create an array of destination cities with geo-location

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
        {originAirports && originAirports.map(origin => {
          return origin && <Marker key={origin.id} position={[origin.geoCode.latitude, origin.geoCode.longitude]} icon={originIcon}>
            <Popup>{origin.name} ({origin.iataCode})</Popup>
          </Marker>
        })}

        {/* Destination city markers */}
        {destinationCities && destinationCities.map(destination => {
          return <Marker key={destination.name} position={[destination.geoCode.latitude, destination.geoCode.longitude]} icon={destIcon}>
            {/* @ts-ignore */}
            <Popup width={70}>
              {destination.name} ({destination.iataCode})
              <br />
              <div className='map-popup-flight-list'>
              ✈︎
              {originAirports.map(airport => {
                return <div className='map-popup-flight-list-item'>
                  <a
                    href={`https://www.skyscanner.de/transport/flights/${airport}/${destination.iataCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    &nbsp;{airport!.name}-{destination.iataCode}&nbsp;
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