import { useState, useEffect } from 'react';

import './App.scss';
import { getAirportList } from './services/airportsService';
import { getDestinationCityList } from './services/airportsService';
import { sortByDirectFlightCount } from './utils/sort';
import { findCommonArrayEls } from './utils/findCommon';

import Navbar from './components/Navbar';
import Search from './components/Search';
import SearchResult from './components/SearchResult';


function App() {
  const [allAirports, setAllAirports] = useState([]);
  const [originAirports, setOriginAirports] = useState([]);  // contains only iata codes
  const [destinationCities, setDestinationCities] = useState([]);
  // const [commonDestinations, setCommonDestinations] = useState([]);
  // console.log({originAirports});
  console.log({destinationCities});
  // console.log({commonDestinations});

  // -- Get list of all airports
  useEffect(() => {
    // console.log('is in useEffect for all airports')
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

  // -- Get list of destination cities for each origin, fetched only when origin state changes
  useEffect(() => {
    // console.log('is in useEffect for destinations')
    // console.log('originAirports in useEffect to get destination: ', originAirports)
    for (let origin of originAirports) {
      // console.log('origin code: ', origin)
      getDestinationCityList(origin)
      .then(result => {
        if (result.status === 500) {
          alert('Oops, something went wrong. Please try again');
        } else {
          console.log('result in useEffect: ', result)
          // -- Return two arrays
          return setDestinationCities(prev => [...prev, result]);
          // -- Return two arrays merged into one (not working)
          // return setDestinationCities(prev => findCommonArrayEls([...prev, result]));
        }
      })
      .catch(err => {
        console.error(err);
      })
    }
  }, [originAirports, setOriginAirports])

  return (
    <div className="App">
      <Navbar />
      <Search
        allAirports={allAirports}
        setOriginAirports={setOriginAirports}
        setDestinationCities={setDestinationCities}
        destinationCities={destinationCities}
        // setCommonDestinations={setCommonDestinations}
      />
      <SearchResult />
    </div>
  );
}

export default App;
