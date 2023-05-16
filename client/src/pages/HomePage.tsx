import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAirportList } from '../services/airportsService';
import { sortByDirectFlightCount } from '../utils/sort';

import { Airport } from '../interfaces/Airports';
import { AmadeusDestinationCity } from '../interfaces/DestinationCities';

import Navbar from '../components/Navbar';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import SearchPanel from '../components/SearchPanel';


// function App() {
function HomePage() {
  const [allAirports, setAllAirports] = useState<Airport[]>([]);
  const [originAirports, setOriginAirports] = useState<string[]>([]);
  const [destinationCities, setDestinationCities] = useState<AmadeusDestinationCity[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const origin1 = searchParams.get('origin1' || '');
  const origin2 = searchParams.get('origin2' || '');
  const origin3 = searchParams.get('origin3' || '');
  const origin4 = searchParams.get('origin4' || '');
  const origin5 = searchParams.get('origin5' || '');
  const origin6 = searchParams.get('origin6' || '');
  let queryParamsArray: (string | null )[] = [origin1, origin2, origin3, origin4, origin5, origin6];

  // -- Get list of all airports on initial page load
  // useEffect(() => {
  //   getAirportList()
  //     .then(result => {
  //       if (result.status === 500) {
  //         alert('Oops, something went wrong. Please try again');
  //       } else {
  //         return setAllAirports(sortByDirectFlightCount(result));
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }, [])

  return (
    <div className="App">
      <div className='navbar-search-container'>
        <Navbar />
        <Search
          allAirports={allAirports}
          setDestinationCities={setDestinationCities}
          setOriginAirports={setOriginAirports}
          queryParamsArray={queryParamsArray}
          setSearchParams={setSearchParams}
        />
      </div>
      <div className="search-panel-container">
        <SearchPanel/>
        <SearchResult
          destinationCities={destinationCities}
          originAirports={originAirports}
          allAirports={allAirports}
        />
      </div>
    </div>
  );
};


export default HomePage;
