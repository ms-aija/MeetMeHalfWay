import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAirportList } from '../services/airportsService';
import { sortByDirectFlightCount } from '../utils/sort';
import { Airports, Destination } from '../interfaces';

import Navbar from './Navbar';
import Search from './Search';
import SearchResult from './SearchResult';

function Index() {
  const [allAirports, setAllAirports] = useState<Airports[]>([]);
  const [originAirports, setOriginAirports] = useState<string[]>([]);
  const [destinationCities, setDestinationCities] = useState<Destination[]>([]);
  const [baseZoom, setBaseZoom] = useState<number>(2);

  const [searchParams, setSearchParams] = useSearchParams();
  const origin1 = searchParams.get('origin1' || '');
  const origin2 = searchParams.get('origin2' || '');
  const origin3 = searchParams.get('origin3' || '');
  const origin4 = searchParams.get('origin4' || '');
  let queryParamsArray = [origin1, origin2, origin3, origin4];

  // -- Get list of all airports on initial page load
  useEffect(() => {
    console.log(baseZoom);
    getAirportList()
      .then((result) => {
        if (result.status === 500) {
          alert('Oops, something went wrong. Please try again');
        } else {
          return setAllAirports(sortByDirectFlightCount(result));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [baseZoom]);

  return (
    <div className="App">
      <div>{/* <h1>{baseZoom}</h1> */}</div>
      <div className="navbar-search-container">
        <Navbar />
        <Search
          allAirports={allAirports}
          setDestinationCities={setDestinationCities}
          setOriginAirports={setOriginAirports}
          setBaseZoom={setBaseZoom}
          queryParamsArray={queryParamsArray}
          setSearchParams={setSearchParams}
        />
      </div>
      <SearchResult
        destinationCities={destinationCities}
        originAirports={originAirports}
        allAirports={allAirports}
        baseZoom={baseZoom}
      />
    </div>
  );
}

export default Index;
