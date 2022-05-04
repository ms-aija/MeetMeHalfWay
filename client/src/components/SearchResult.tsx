import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Airports, Destination } from '../interfaces';

interface Props {
  allAirports: Airports[];
  originAirports: string[];
  destinationCities: Destination[];
  latCen: number;
  lonCen: number;
  setLatCen: any;
  setLonCen: any;
}

interface Interface {
  code: string;
  name: string;
  lat: number;
  lon: number;
}

const SearchResult = ({
  originAirports,
  allAirports,
  destinationCities,
  latCen,
  lonCen,
}: Props) => {
  let originAirportGeoLocation: Interface[] = [];

  for (let originCode of originAirports) {
    let airportLocation: Interface;

    for (let airport of allAirports) {
      if (airport.code === originCode) {
        airportLocation = {
          code: originCode,
          name: airport.name,
          lat: Number(airport.lat),
          lon: Number(airport.lon),
        };
        originAirportGeoLocation.push(airportLocation);
      } else {
      }
    }
  }

  let destinationCityGeoLocation: Interface[] = [];
  let destCityLength = !destinationCities ? 0 : destinationCities.length;
  for (let i = 0; i < destCityLength; i++) {
    let destCityLocation: Interface;
    for (let airport of allAirports) {
      if (airport.code === destinationCities[i].iataCode) {
        destCityLocation = {
          code: airport.code,
          name: destinationCities[i].name,
          lat: Number(airport.lat),
          lon: Number(airport.lon),
        };
        destinationCityGeoLocation.push(destCityLocation);
        if (!destCityLocation.code) {
          destinationCityGeoLocation.push({
            code: destinationCities[i].iataCode,
            name: destinationCities[i].name,
            lat: 9999,
            lon: 9999,
          });
        }
      }
    }
  }

  // -- Custom icons
  const originIcon = new Icon({
    iconUrl: '/location-icon.png',
    iconSize: [17, 28],
  });
  const destIcon = new Icon({
    iconUrl: '/icons8-select-24.png',
    iconSize: [17, 17],
  });

  return (
    <div className="SearchResult">
      <MapContainer
        center={[37, 10]}
        zoom={2}
        scrollWheelZoom={true}
        className="map-container"
        minZoom={2}
        maxBounds={[
          [80, -190],
          [-75, 190],
        ]}
        maxZoom={6}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        />

        {originAirportGeoLocation.map((origin) => {
          return (
            <Marker
              key={origin.code}
              position={[origin.lat, origin.lon]}
              icon={originIcon}
            >
              <Popup>
                {origin.name} ({origin.code})
              </Popup>
            </Marker>
          );
        })}

        {destinationCityGeoLocation.map((destination) => {
          return (
            <Marker
              key={destination.name}
              position={[destination.lat, destination.lon]}
              icon={destIcon}
            >
              <Popup minWidth={70} maxWidth={70}>
                {destination.name} ({destination.code})
                <br />
                <div className="map-popup-flight-list">
                  ✈︎
                  {originAirports.map((airport) => {
                    return (
                      <div className="map-popup-flight-list-item">
                        <a
                          href={`https://www.skyscanner.de/transport/flights/${airport}/${destination.code}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          &nbsp;{airport}-{destination.code}&nbsp;
                        </a>
                        ✈︎
                      </div>
                    );
                  })}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <section className="list-of-destination-city-names" id="footer">
        {destinationCities.length > 0 &&
          destinationCities.map((city) => {
            return (
              <p key={city.name} className="destination-city-name">
                {city.name}
              </p>
            );
          })}
      </section>
    </div>
  );
};

export default SearchResult;
