import { useState, useEffect, memo, useId } from "react";
import { getAirportSearchData } from "../services/airportsService";
import { useDebounce } from "../hooks/useDebounce";

import { IAirport } from "../interfaces/Airports";
import { IAirportInput } from "../interfaces/Airports";

type SearchFieldProps = {
  setOrigin: React.Dispatch<React.SetStateAction<IAirportInput>>
}

const SearchField = memo(function SearchField({setOrigin}: SearchFieldProps) {
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchInputResults, setSearchInputResults] = useState<IAirport[] | null>(null)

  // On change sets searchInput, debounce it and query the API for origin airports only with debounced value
  const inputFieldId = useId()
  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value)
    console.log('input field id: ',inputFieldId)
  }
  let debouncedInput = useDebounce(searchInput, 1000);
  useEffect(() => {
    async function fetchAirportData() {
      if (debouncedInput) {
        const data = await getAirportSearchData(debouncedInput);
        setSearchInputResults(data);
      }
    }
    fetchAirportData();
  }, [debouncedInput]);

  // Sets origin airport in context when a new result has been fetched
  // Set it to the first result in case there is more than one
  useEffect(() => {
    if (searchInputResults && searchInputResults.length > 0) {
      setOrigin({visible: true, content: searchInputResults && searchInputResults[0]})
    }
  }, [searchInputResults, setOrigin]);

  return (
    // Input field for origin airport
    <div className='SearchField'>
    <label>
      <input
        placeholder='Airport/City...'
        name='airport-city'
        list={inputFieldId}
        onChange={(e) => handleChange(e)}
      />
    </label>
    {/* Dropdown list for the input field */}
    <datalist id={inputFieldId}>
        {searchInputResults && searchInputResults.map((airport) => {
          return <option
            key={airport.id}
            value={`${airport.address.cityName} (${airport.iataCode})`}>
              {`${airport.name}`}
            </option>
        })}
      </datalist>
    </div>
  )
})

export default SearchField