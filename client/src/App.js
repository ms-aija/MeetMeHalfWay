// import { useState, useEffect } from 'react';
// import {reactDOM, render} from 'react-dom';

import './App.scss';
// import { getAirportList } from './services/airportsService';
// import { sortByDirectFlightCount } from './utils/sort';

// import Navbar from './components/Navbar';
// import Search from './components/Search';
// import SearchResult from './components/SearchResult';
import Index from './components/Index';


function App() {
  // const [allAirports, setAllAirports] = useState([]);
  // const [originAirports, setOriginAirports] = useState([]);
  // const [destinationCities, setDestinationCities] = useState([]);
  // console.log({ originAirports });
  // console.log({ destinationCities });


  // // -- Get list of all airports on initial page load
  // useEffect(() => {
  //   // console.log('is in getting all airport list')
  //   getAirportList()
  //     .then(result => {
  //       if (result.status === 500) {
  //         alert('Oops, something went wrong. Please try again');
  //       } else {
  //         // console.log('is in getAirportList in App.js');
  //         return setAllAirports(sortByDirectFlightCount(result));
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }, [])

  return (
    <Index />
    // <div className="App">
    //   <div className='navbar-search-container'>
    //   <Navbar />
    //   <Search
    //     allAirports={allAirports}
    //     setDestinationCities={setDestinationCities}
    //     setOriginAirports={setOriginAirports}
    //   />
    //   </div>
    //   <SearchResult
    //     destinationCities={destinationCities}
    //     originAirports={originAirports}
    //     allAirports={allAirports}
    //   />
    // </div>
  );
}

export default App;
