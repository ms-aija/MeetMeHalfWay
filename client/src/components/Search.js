import OriginSearchItem from "./OriginSearchItem";
import { useState } from "react";
import { getDestinationCityList } from "../services/airportsService";
import { findCommonArrayEls } from "../utils/findCommon";
// import { Button } from 'react-bootstrap';

const Search = ({ allAirports, setOriginAirports, setDestinationCities, queryParamsArray, setSearchParams }) => {

  const [cityComponents, setCityComponents] = useState(() => {
    let initialState = [];
    if (queryParamsArray[0] === null && queryParamsArray[1] === null) {
      initialState = [
        { index: 1, itemId: 'item1', listId: 'list1' },
        { index: 2, itemId: 'item2', listId: 'list2' },
      ]
    } else {
      let counter = 1;
      for (let el of queryParamsArray) {
        if (el !== null) {
          let city = {
            index: counter,
            itemId: `item${counter}`,
            listId: `list${counter}`
          }
          initialState.push(city);
          counter++;
        }
      }
    }
    return initialState;
  })

  const handleAddCity = () => {
    let counter = cityComponents.length + 1;
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
  // console.log({ cityComponents })

  const handleRemoveCity = () => {
    // let counter = cityComponents.length;
    // console.log({ counter })
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

    // -- Reset destination city state to get rid of previous search results
    setDestinationCities([]);
    setOriginAirports(origins);

    // -- Update query params
    console.log({origins})
    let queryParamsObject = {}
    let counter = 1
    for (let el of origins) {
      let name = `origin${counter}`
      counter++
      queryParamsObject[name] = el
    }
    console.log({queryParamsObject})
    setSearchParams(queryParamsObject);

    // -- Get destinations for each origin city and find common destinations
    Promise.all(promises)
      .then(results => {
        // console.log('results from promise.all in handleSearch ftion: ', results);
        let commonDestinations = findCommonArrayEls(results);
        // console.log('common destinations in handleSearch ftion: ', commonDestinations[0]);
        setDestinationCities(commonDestinations[0]);
        // TODO: all logic that if any result.status === 500, send an alert to try again
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='Search'>
      {/* <section className="origin-input-container"> */}
      <section className="origin-city-input-container">
        <div className="origin-input-cities">
          {cityComponents.map(el => {
            return <OriginSearchItem key={el.index} allAirports={allAirports} itemId={el.itemId} listId={el.listId} />
          })}
        </div>
        {/* </section> */}
        <section className="add-remove-search-buttons">
          <>
            {(cityComponents.length >= 3) && <button className="search-button small-button" onClick={handleRemoveCity}>-</button>}
            {(cityComponents.length >= 2) && (cityComponents.length <= 5) && <button className="search-button small-button" onClick={handleAddCity}>+</button>}
          </>

          <button className='search-button' onClick={handleSearch} >Search</button>
        </section>
      </section>
    </div>
  )
}

export default Search