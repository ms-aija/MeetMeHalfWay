import { useState } from "react"
import { useId } from "react"
import { getAirportSearchData } from "../services/airportsService"

import { IAirport } from "../interfaces/Airports"

type SearchFieldProps = {
  setOriginAirports: React.Dispatch<React.SetStateAction<IAirport[] | null>>
}


function SearchField({setOriginAirports} : SearchFieldProps) {
  const [searchField, setSearchField] = useState<IAirport[] | null>()
  const inputFieldId = useId()


  async function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    let searchResults = await getAirportSearchData(e.target.value);
    console.log(searchResults);
    setSearchField(searchResults);
  }

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
        {searchField && searchField.map((airport) => {
          return <option
            key={airport.id}
            value={airport.name}>
            {`${airport.name} (${airport.address.cityName}, ${airport.address.countryName})`}
            </option>
        })}
      </datalist>
    </div>
  )
}

export default SearchField