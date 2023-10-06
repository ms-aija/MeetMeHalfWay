import { useState } from 'react';
import SearchField from './SearchField';
import { getDestinationCityList } from '../services/airportsService';
import { findCommonArrayEls } from '../utils/findCommon';
import { useAirportSearch } from '../context/airportContext';
import { IAirport } from '../interfaces/Airports';

function SearchPanel() {
  const [addInputDisabled, setAddInputDisabled] = useState<boolean>(false);

  // get origin airports from context
  const { origins, setOrigins, setDestinationCities } = useAirportSearch()!;

  const handleSearch = () => {
    let promises = [];
    for (let origin of origins) {
      origin && promises.push(getDestinationCityList(origin.iataCode));
    }

    // -- Get destinations for each origin city and find common destinations
    Promise.all(promises)
      .then((results) => {
        console.log({ results });
        let commonDestinations = findCommonArrayEls(results);
        setDestinationCities(commonDestinations);
        // TODO: all logic that if any result.status === 500, send an alert to try again
      })
      .catch((err) => console.error(err));
  };

  const handleAddInput = () => {
    console.log('handle add input');
    setOrigins((prev) => [...prev, null]);
    if (origins.length >= 4) {
      setAddInputDisabled(true);
    }
  };

  const handleRemoveOrigin = (origin: IAirport | null) => {
    console.log('handleRemoveOrigin', origin);
    setOrigins((prev) => {
      const updatedOrigins = prev.filter((it) => it?.name !== origin?.name);
      console.log({ updatedOrigins });
      return updatedOrigins;
    });
  };

  const handleSelectOrigin = (
    selectedOption: IAirport,
    selectedIndex: number
  ) => {
    setOrigins((prev) => {
      return prev.map((item, i) =>
        i === selectedIndex ? selectedOption : item
      );
    });
  };

  return (
    <div className={'SearchPanel'}>
      {origins.map((origin, i) => {
        console.log('searchField:', origin?.name, i);
        return (
          <SearchField
            key={`SearchField-${origin?.displayName} ${i}`}
            origin={origin}
            canDelete={i > 1}
            handleRemoveOrigin={() => handleRemoveOrigin(origin)}
            handleSelectOrigin={(selectedOption: IAirport) =>
              handleSelectOrigin(selectedOption, i)
            }
          />
        );
      })}
      <button
        className="add-button"
        disabled={addInputDisabled}
        onClick={handleAddInput}
      >
        Add origin city
      </button>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchPanel;
