import SearchField from './SearchField'
import { useAirportSearch } from '../context/airportContext'

function SearchPanel() {
  // get origin airports from context
  const {origin1, origin2, origin3, setOrigin1, setOrigin2, setOrigin3} = useAirportSearch()!

  function handleClick() {
    console.log('clicked')
    console.log({origin1})
    console.log({origin2})
    console.log({origin3})
  }

  return (
    <div className={'SearchPanel'}>
      <div>SearchPanel</div>
      <SearchField setOrigin={setOrigin1}/>
      <SearchField setOrigin={setOrigin2}/>
      <SearchField setOrigin={setOrigin3}/>
      <button>+</button>
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchPanel