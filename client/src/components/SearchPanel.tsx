import { useState } from 'react'
import SearchField from './SearchField'

// import { IAirport } from '../interfaces/Airports';

function SearchPanel() {
  const [originAirports, setOriginAirports] = useState<any>([]);

  return (
    <div className={'SearchPanel'}>
      <div>SearchPanel</div>
      <SearchField setOriginAirports={setOriginAirports}/>
    </div>
  )
}

export default SearchPanel