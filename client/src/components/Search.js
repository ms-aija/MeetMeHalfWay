import OriginSearchItem from "./OriginSearchItem"

const Search = ({ allAirports }) => {
  return (
    <div className='Search'>
      <OriginSearchItem allAirports={allAirports} />
      <OriginSearchItem allAirports={allAirports} />
    </div>
  )
}

export default Search