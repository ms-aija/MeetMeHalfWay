import { useState, useEffect } from 'react';

import './App.scss';
import { getAirportList } from './services/airportsService';

import Navbar from './components/Navbar';
import Search from './components/Search';
import SearchResult from './components/SearchResult';


function App() {
  const [allAirports, setAllAirports] = useState([])

  useEffect(() => {
    getAirportList()
    .then(result => {
      if (result.status === 500) {
        alert('Oops, something went wrong. Please try again');
      } else {
        console.log('is in getAirportList in App.js');
        return setAllAirports(result);
      }
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Search allAirports={allAirports} />
      <SearchResult/>
    </div>
  );
}

export default App;
