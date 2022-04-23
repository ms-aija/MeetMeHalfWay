import OriginSearchItem from "./OriginSearchItem";
import { useState, useEffect } from "react";
import { getDestinationCityList } from "../services/airportsService";
import { findCommonArrayEls } from "../utils/findCommon"

const Search = ({ allAirports, setOriginAirports, setDestinationCities }) => {

  const [cityComponents, setCityComponents] = useState(
    [
      { index: 1, itemId: 'item1', listId: 'list1' },
      { index: 2, itemId: 'item2', listId: 'list2' },
    ]
  )

  const handleAddCity = () => {
    let counter = cityComponents.length+1;
    let city = {
      index: counter,
      itemId: `item${counter}`,
      listId: `list${counter}`
    }
    let cityComp = [...cityComponents];
    cityComp.push(city)
    // console.log({cityComp})
    setCityComponents(cityComp);
  }
  console.log({ cityComponents })

  const handleRemoveCity = () => {
    let counter = cityComponents.length;
    console.log({counter})
    let cityComp = [...cityComponents];
    cityComp.pop();
    setCityComponents(cityComp);
  }

  const handleSearch = () => {
    let promises = [];
    let origins = [];
    for (let el of cityComponents) {
      promises.push(getDestinationCityList(document.getElementById(el.itemId).value));
      origins.push(document.getElementById(el.itemId).value);
    }

    // -- (1) Reset destination city state to get rid of previous search results
    setDestinationCities([]);
    setOriginAirports(origins);

    Promise.all(promises)
      .then(results => {
        console.log('results from promise.all in handleSearch ftion: ', results);
        let commonDestinations = findCommonArrayEls(results);
        // console.log('common destinations in handleSearch ftion: ', commonDestinations[0]);
        setDestinationCities(commonDestinations[0]);
        // TODO: all logic that if any result.status === 500, send an alert to try again
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='Search'>
      <section className='origin-input-container'>
        {cityComponents.map(el => {
          return <OriginSearchItem key={el.index} allAirports={allAirports} itemId={el.itemId} listId={el.listId} />
        })}
        <>
          {(cityComponents.length >= 2) && (cityComponents.length <= 5) && <button className="small-button" onClick={handleAddCity}>+</button>}
          {(cityComponents.length >= 3) && <button className="small-button" onClick={handleRemoveCity}>-</button>}
        </>
        <button onClick={handleSearch} >Search</button>
      </section>
    </div>
  )
}

export default Search