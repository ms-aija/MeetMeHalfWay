import SearchField from './SearchField';
import { getDestinationCityList } from '../services/airportsService';
import { findCommonArrayEls } from '../utils/findCommon';
import { useAirportSearch } from '../context/airportContext';

function SearchPanel() {
  // get origin airports from context
  const {origin1, origin2, origin3, setOrigin1, setOrigin2, setOrigin3} = useAirportSearch()!
  const {setDestinationCities} = useAirportSearch()!

  const handleSearch = () => {
    let promises = [];
    origin1.content && promises.push(getDestinationCityList(origin1.content.iataCode));
    origin2.content && promises.push(getDestinationCityList(origin2.content.iataCode));
    origin3.content && promises.push(getDestinationCityList(origin3.content.iataCode));

    // -- Get destinations for each origin city and find common destinations
    Promise.all(promises)
      .then(results => {
        console.log({results});
        let commonDestinations = findCommonArrayEls(results);
        setDestinationCities(commonDestinations);
        // TODO: all logic that if any result.status === 500, send an alert to try again
      })
      .catch(err => console.error(err))
  }

  return (
    <div className={'SearchPanel'}>
      <SearchField key={'SearchField1'} setOrigin={setOrigin1}/>
      <SearchField key={'SearchField2'} setOrigin={setOrigin2}/>
      <SearchField key={'SearchField3'} setOrigin={setOrigin3}/>
      <button className="add-button">Add origin city</button>
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchPanel