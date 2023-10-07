import { useEffect, useState } from 'react';
import SearchField from './SearchField';
import { getDestinationCityList } from '../services/airportsService';
import { findCommonArrayEls } from '../utils/findCommon';
import { useAirportSearch } from '../context/airportContext';
import { IAirport } from '../interfaces/Airports';

function SearchPanel() {
  const [addInputDisabled, setAddInputDisabled] = useState<boolean>(false);
  const [missingOrigins, setMissingOrigins] = useState<boolean>(false);

  // get origin airports from context
  const { origins, setOrigins, setDestinationCities } = useAirportSearch()!;

  useEffect(() => {
    const checkForMissingOrigins = () => {
      for (let origin of origins) {
        if (!origin) {
          setMissingOrigins(true);
          return;
        }
      }
      setMissingOrigins(false);
    };

    checkForMissingOrigins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origins]);

  const handleSearch = () => {
    if (missingOrigins) {
      setDestinationCities([]);
      return;
    }
    let promises = [];
    for (let origin of origins) {
      origin && promises.push(getDestinationCityList(origin.iataCode));
    }

    // -- Get destinations for each origin city and find common destinations
    Promise.all(promises)
      .then((results) => {
        let commonDestinations = findCommonArrayEls(results);
        setDestinationCities(commonDestinations);
        // TODO: all logic that if any result.status === 500, send an alert to try again
      })
      .catch((err) => console.error(err));
  };

  const handleAddInput = () => {
    setOrigins((prev) => [...prev, null]);
    if (origins.length >= 4) {
      setAddInputDisabled(true);
    }
  };

  const handleRemoveOrigin = (origin: IAirport | null) => {
    setOrigins((prev) => {
      const updatedOrigins = prev.filter((it) => it?.name !== origin?.name);
      return updatedOrigins;
    });
  };

  const handleSelectOrigin = (
    selectedOption: IAirport | null,
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
        return (
          <SearchField
            key={`SearchField-${origin?.displayName} ${i}`}
            origin={origin}
            canDelete={i > 1}
            handleRemoveOrigin={() => handleRemoveOrigin(origin)}
            handleSelectOrigin={(selectedOption: IAirport | null) =>
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
