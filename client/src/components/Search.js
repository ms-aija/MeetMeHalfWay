import OriginSearchItem from "./OriginSearchItem";
import { getDestinationCityList } from "../services/airportsService";
import { useRef } from "react";

const Search = ({ allAirports, originAirports, setOriginAirports }) => {
  const origin1Ref = useRef('');
  const origin2Ref = useRef('');

  const handleSearch = () => {
    console.log('origin 1 ref: ',origin1Ref.current.value)
    console.log('origin 2 ref: ',origin2Ref.current.value)
    setOriginAirports([origin1Ref.current.value, origin2Ref.current.value])
    // for (let origin of originAirports) {

    // }
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