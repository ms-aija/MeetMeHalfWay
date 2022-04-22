const SearchResult = ({ destinationCities }) => {

  console.log('destination cities in searchResult component: ', destinationCities)

  return (
    <div className='SearchResult'>
      <h4>Common destinations</h4>
      <section className='list-of-destination-city-names'>
      {destinationCities[0].map(city => {
        console.log('cities in mapping destination cities: ', city)
          return <p className='destination-city-name'>{city.name}</p>
      })}
      </section>
    </div>
  )
}

export default SearchResult