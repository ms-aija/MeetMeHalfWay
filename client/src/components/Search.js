import OriginSearchItem from "./OriginSearchItem";
import { useRef } from "react";
import { getDestinationCityList } from "../services/airportsService";
import { findCommonArrayEls } from "../utils/findCommon"

const Search = ({ allAirports, setDestinationCities }) => {
  const origin1Ref = useRef('');
  const origin2Ref = useRef('');

  const handleSearch = () => {
    // console.log('origin 1 ref: ', origin1Ref.current.value)
    // console.log('origin 2 ref: ', origin2Ref.current.value)
    // -- (1) Reset destination city state to get rid of previous search results
    setDestinationCities([]);
    // -- (2) Get destination cities for each of the searched airports
    // -- (3) Update destination city state with common destinations
    Promise.all([
      getDestinationCityList(origin1Ref.current.value).catch(err => {return err}),
      getDestinationCityList(origin2Ref.current.value).catch(err => {return err})
    ]).then(results => {
      // console.log('results from promise.all in handleSearch ftion: ', results);
      let commonDestinations = findCommonArrayEls(results);
      // console.log('common destinations in handleSearch ftion: ', commonDestinations[0]);
      setDestinationCities(commonDestinations[0]);
      // TODO: all logic that if any result.status === 500, send an alert to try again
    })
  }

  return (
    <div className='Search'>
      <section className='origin-input-container'>
        <OriginSearchItem allAirports={allAirports} fieldref={origin1Ref} listId='list1' />
        <OriginSearchItem allAirports={allAirports} fieldref={origin2Ref} listId='list2' />
      </section>
      <button onClick={handleSearch} >Search</button>
    </div>
  )
}

export default Search