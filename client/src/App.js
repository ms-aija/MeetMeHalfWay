import { useState, useEffect } from 'react';

import './App.scss';
import { getAirportList } from './services/airportsService';
import { sortByDirectFlightCount } from './utils/sort';

import Navbar from './components/Navbar';
import Search from './components/Search';
import SearchResult from './components/SearchResult';


function App() {
  const [allAirports, setAllAirports] = useState([])
  const [originAirports, setOriginAirports] = useState([])
  const [destinationCities, setDestinationCities] = useState([])
  // console.log({originAirports});

  useEffect(() => {
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
      <Navbar/>
      <Search allAirports={allAirports} setOriginAirports={setOriginAirports} originAirports={originAirports} />
      <SearchResult/>
    </div>
  );
}

export default App;
