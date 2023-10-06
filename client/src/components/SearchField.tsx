import { useState, useEffect, useRef, useId } from 'react';
import { getAirportSearchData } from '../services/airportsService';
import { useDebounce } from '../hooks/useDebounce';
import { useAirportSearch } from '../context/airportContext';
import { IAirport } from '../interfaces/Airports';

type SearchFieldProps = {
  index: number;
};

const SearchField = function SearchField({ index }: SearchFieldProps) {
  const [searchInput, setSearchInput] = useState<string>('');
  // const [selectionMade, setSelectionMade] = useState<boolean>(false);
  const [searchInputResults, setSearchInputResults] = useState<
    IAirport[] | null
  >(null);
  const { setOrigins } = useAirportSearch()!;

  // On change sets searchInput, debounce it and query the API for origin airports only with debounced value
  const inputFieldId = useId();
  const inputFieldRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('handleChange: ', e.target.value);
    setSearchInput(e.target.value);
  }

  let debouncedInput = useDebounce(searchInput, 1000);

  useEffect(() => {
    async function fetchAirportData() {
      if (debouncedInput) {
        const data = await getAirportSearchData(debouncedInput);
        setSearchInputResults(data);
      } else {
        setSearchInputResults(null);
      }
    }
    fetchAirportData();
    // setSearchInput('');
  }, [debouncedInput]);

  const handleRemove = () => {
    console.log({ inputFieldRef });
    setOrigins((prev) => {
      console.log({ prev });
      const newOrigins = [...prev];
      newOrigins.splice(index, 1);
      console.log({ newOrigins });
      return newOrigins;
    });
  };

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (searchInputResults && searchInputResults.length > 0) {
      setOrigins((prev) => {
        const newOrigins = [...prev];
        newOrigins[index] = searchInputResults[0];
        return newOrigins;
      });
    }
    setSearchInput((e.target as HTMLInputElement)?.value || '');
  };

  return (
    // Input field for origin airport
    <div className="SearchField">
      <label>
        <input
          ref={inputFieldRef}
          type="text"
          placeholder="Origin Airport / City..."
          name={`airport-city-${index}`}
          list={inputFieldId}
          value={searchInput}
          onChange={handleChange}
          autoComplete="off"
          onInput={onInputChange}
        />
      </label>
      {/* Dropdown list for the input field */}
      <datalist id={inputFieldId}>
        {searchInputResults &&
          searchInputResults.map((airport) => {
            return (
              <option
                key={airport.id}
                value={`${airport.address.cityName} (${airport.iataCode})`}
                onChange={() => {
                  console.log('+++> change');
                }}
              >
                {`${airport.name}`}
              </option>
            );
          })}
      </datalist>
      {index > 1 && (
        <button className="remove-button" onClick={handleRemove}>
          x
        </button>
      )}
    </div>
  );
};

export default SearchField;
