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

  const [searchParams, setSearchParams] = useSearchParams();
  const origin1 = searchParams.get('origin1' || '');
  const origin2 = searchParams.get('origin2' || '');
  const origin3 = searchParams.get('origin3' || '');
  const origin4 = searchParams.get('origin4' || '');
  const origin5 = searchParams.get('origin5' || '');
  const origin6 = searchParams.get('origin6' || '');
  let queryParamsArray = [origin1, origin2, origin3, origin4, origin5, origin6];
  const [latCen, setLatCen] = useState(37);
  const [lonCen, setLonCen] = useState(10);

  // -- Get list of all airports on initial page load
  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <div className="navbar-search-container">
        <Navbar />
        <Search
          allAirports={allAirports}
          setDestinationCities={setDestinationCities}
          setOriginAirports={setOriginAirports}
          queryParamsArray={queryParamsArray}
          setSearchParams={setSearchParams}
          setLatCen={setLatCen}
          setLonCen={setLonCen}
        />
      </div>
      <SearchResult
        destinationCities={destinationCities}
        originAirports={originAirports}
        allAirports={allAirports}
        latCen={latCen}
        lonCen={lonCen}
        setLatCen={setLatCen}
        setLonCen={setLonCen}
      />
    </div>
  );
}

export default Index;
