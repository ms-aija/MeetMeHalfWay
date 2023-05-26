import { useState, useEffect } from "react"
import { useId } from "react"
import { useQuery } from "@tanstack/react-query";
import { getAirportSearchData } from "../services/airportsService"

import { IAirport } from "../interfaces/Airports"
import { IAirportInput } from "../interfaces/Airports";
import { useDebounce } from "../hooks/useDebounce"

type SearchFieldProps = {
  setOrigin: React.Dispatch<React.SetStateAction<IAirportInput>>
}

function SearchField({setOrigin}: SearchFieldProps) {
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchInputResults, setSearchInputResults] = useState<IAirport[] | null>(null)

  // On change sets searchInput, debounces it and queries the API for origin airports
  const inputFieldId = useId()
  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value)
    console.log('input field id: ',inputFieldId)
  }
  let debouncedInput = useDebounce(searchInput, 1000);

  // useQuery({
  //   queryKey: [`airport-search-${inputFieldId}`, debouncedInput],
  //   queryFn: async () => {
  //     console.log('Querying API for: ', debouncedInput);
  //     let result: IAirport[] = await getAirportSearchData(debouncedInput);
  //     console.log('Query result: ', result);
  //     setSearchInputResults(result);
  //     return result;
  //   },
  //   staleTime: 60000
  // });

  useEffect(() => {
    console.log('in useEffect with debouncedInput: ', debouncedInput)
    let res = getAirportSearchData(debouncedInput)
    setSearchInputResults(res);
  }, [debouncedInput])

  // Sets origin airport in context when a new result has been fetched
  // Set it to the first result in case there is more than one
  useEffect(() => {
    console.log('in useEffect for searchInputResults')
    searchInputResults &&console.log('setting origin for input field with ', searchInputResults)
    searchInputResults && setOrigin({visible: true, content: searchInputResults && searchInputResults[0]})
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
            value={airport.address.cityName + ', ' + airport.name}>
              {`${airport.name} (${airport.address.cityName}, ${airport.address.countryName})`}
            </option>
        })}
      </datalist>
    </div>
  )
}

export default SearchField