import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sortByDirectFlightCount } from '../utils/sort';

import { Airport } from '../interfaces/Airports';
import { AmadeusDestinationCity } from '../interfaces/DestinationCities';

import Navbar from '../components/Navbar';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import SearchPanel from '../components/SearchPanel';


// function App() {
function HomePage() {

  return (
    <div className="App">
      <div className='navbar-search-container'>
        <Navbar />
        {/* <Search
          allAirports={allAirports}
          setDestinationCities={setDestinationCities}
          setOriginAirports={setOriginAirports}
          queryParamsArray={queryParamsArray}
          setSearchParams={setSearchParams}
        /> */}
      </div>
      <div className="search-panel-container">
        <SearchPanel/>
        <SearchResult/>
      </div>
    </div>
  );
};


export default HomePage;
