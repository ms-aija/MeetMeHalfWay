import OriginSearchItem from "./OriginSearchItem";
import { useRef } from "react";

const Search = ({ allAirports, setOriginAirports, setDestinationCities, destinationCities, setCommonDestinations }) => {
  const origin1Ref = useRef('');
  const origin2Ref = useRef('');

  const handleSearch = () => {
    console.log('origin 1 ref: ',origin1Ref.current.value)
    console.log('origin 2 ref: ',origin2Ref.current.value)
    // Reset destination city state
    setDestinationCities([]);
    // Update origin city state which will trigger update of destination city state for the new origin cities
    setOriginAirports([origin1Ref.current.value, origin2Ref.current.value])
  }

  return (
    <div className='Search'>
      <section className='origin-input-container'>
        {/* <WrappedOrigin /> */}
        <OriginSearchItem allAirports={allAirports} fieldref={origin1Ref} listId='list1' />
        <OriginSearchItem allAirports={allAirports} fieldref={origin2Ref} listId='list2' />
      </section>
      <button onClick={handleSearch} >Search</button>
    </div>
  )
}

export default Search