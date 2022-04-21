import OriginSearchItem from "./OriginSearchItem"

const Search = ({ allAirports }) => {
  return (
    <div className='Search'>
      <OriginSearchItem allAirports={allAirports} listId='list1' />
      <OriginSearchItem allAirports={allAirports} listId='list2' />
    </div>
  )
}

export default Search