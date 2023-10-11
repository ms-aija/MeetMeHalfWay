// import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useAirportSearch } from '../context/airportContext';

const SearchResult = () => {
  const { origins } = useAirportSearch()!;
  const { destinationCities } = useAirportSearch()!;

  // -- Custom icons
  const originIcon = new Icon({
    iconUrl: '/icons8-location-64.png',
    iconSize: [33, 33],
  });
  const destIcon = new Icon({
    iconUrl: '/icons8-select-24.png',
    iconSize: [17, 17],
  });

  return (
    <div className="SearchResult">
      <MapContainer center={[47, 15]} zoom={4} scrollWheelZoom={true}>
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />

        {/* Origin airport markers */}
        {origins &&
          origins.map((origin) => {
            if (origin) {
              return (
                origin && (
                  <Marker
                    key={origin.id}
                    position={[
                      origin.geoCode.latitude,
                      origin.geoCode.longitude,
                    ]}
                    icon={originIcon}
                  >
                    <Popup>
                      {origin.name} ({origin.iataCode})
                    </Popup>
                  </Marker>
                )
              );
            }
            return null;
          })}

        {/* Destination city markers */}
        {destinationCities &&
          destinationCities.map((destination) => {
            if (destination) {
              return (
                <Marker
                  key={destination.name}
                  position={[
                    destination.geoCode.latitude,
                    destination.geoCode.longitude,
                  ]}
                  icon={destIcon}
                >
                  {/* @ts-ignore */}
                  <Popup width={70}>
                    {destination.name} ({destination.iataCode})
                    <br />
                    <div className="map-popup-flight-list">
                      ✈︎
                      {origins.map((airport) => {
                        if (airport) {
                          return (
                            <div
                              key={airport?.iataCode}
                              className="map-popup-flight-list-item"
                            >
                              <a
                                href={`https://www.skyscanner.de/transport/flights/${airport}/${destination.iataCode}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                &nbsp;{airport!.name}-{destination.iataCode}
                                &nbsp;
                              </a>
                              ✈︎
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </Popup>
                </Marker>
              );
            }
            return null;
          })}
      </MapContainer>

      {/* List of destination cities */}
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
