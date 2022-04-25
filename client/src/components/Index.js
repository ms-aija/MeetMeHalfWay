import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAirportList } from '../services/airportsService';
import { sortByDirectFlightCount } from '../utils/sort';

import Navbar from './Navbar';
import Search from './Search';
import SearchResult from './SearchResult';


// function App() {
function Index() {
  const [allAirports, setAllAirports] = useState([]);
  const [originAirports, setOriginAirports] = useState([]);
  const [destinationCities, setDestinationCities] = useState([]);
  console.log({ originAirports });
  console.log({ destinationCities });



  const [searchParams, setSearchParams] = useSearchParams();
  const origin1 = searchParams.get('origin1' || '');
  const origin2 = searchParams.get('origin2' || '');
  const origin3 = searchParams.get('origin3' || '');
  const origin4 = searchParams.get('origin4' || '');
  const origin5 = searchParams.get('origin5' || '');
  const origin6 = searchParams.get('origin6' || '');
  let queryParamsArray = [origin1, origin2, origin3, origin4, origin5, origin6];
  // console.log({searchParams});
  // console.log({queryParamsArray});


  // -- Get list of all airports on initial page load
  useEffect(() => {
    // console.log('is in getting all airport list')
    getAirportList()
      .then(result => {
        if (result.status === 500) {
          alert('Oops, something went wrong. Please try again');
        } else {
          // console.log('is in getAirportList in App.js');
          return setAllAirports(sortByDirectFlightCount(result));
        }
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

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
      <SearchResult
        destinationCities={destinationCities}
        originAirports={originAirports}
        allAirports={allAirports}
      />
    </div>
  );
}

export default Index;
