import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';

const SearchResult = ({ destinationCities }) => {

  console.log('destination cities in searchResult component: ', destinationCities)

  return (
    <div className='SearchResult'>
      <h4>Common destinations</h4>

      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[0, 0]}>
          <Popup> A pretty CSS3 popup. <br /> Easily customizable.</Popup>
        </Marker>
      </MapContainer>


      <section className='list-of-destination-city-names'>
        {(destinationCities.length > 0) && (destinationCities[0].map(city => {
          console.log('cities in mapping destination cities: ', city)
          return <p className='destination-city-name'>{city.name}</p>
        }))}
      </section>
    </div>
  )
}

export default SearchResult