import { useState } from "react"
import { useId } from "react"
import { useQuery } from "@tanstack/react-query";
import { getAirportSearchData } from "../services/airportsService"

import { IAirport } from "../interfaces/Airports"
import { useDebounce } from "../hooks/useDebounce"

type SearchFieldProps = {
  setOriginAirports: React.Dispatch<React.SetStateAction<IAirport[] | null>>
}


function SearchField({setOriginAirports} : SearchFieldProps) {
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchResults, setSearchResults] = useState<IAirport[] | null>(null)
  const inputFieldId = useId()

  async function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  let debouncedInput = useDebounce(searchInput, 1000);

  const { error, data } = useQuery({
    queryKey: [`airport-search-${inputFieldId}`, debouncedInput],
    queryFn: async () => {
      let result: IAirport[] = await getAirportSearchData(debouncedInput)
      console.log({result})
      setSearchResults(result);
    },
  })

  return (
    // input field for origin airport
    <div className='SearchField'>
    <label>
      <input
        placeholder='Airport/City...'
        name='airport-city'
        list={inputFieldId}
        onChange={(e) => handleChange(e)}
      />
    </label>
    <datalist id={inputFieldId}>
        {searchResults && searchResults.map((airport) => {
          return <option
            key={airport.id}
            value={airport.address.cityName + ' ' + airport.name}>
              {`${airport.name} (${airport.address.cityName}, ${airport.address.countryName})`}
            </option>
        })}
      </datalist>
    </div>
  )
}

export default SearchField