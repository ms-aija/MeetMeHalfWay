import { useState, useEffect, useId } from 'react';
import { getAirportSearchData } from '../services/airportsService';
import { useDebounce } from '../hooks/useDebounce';
import { IAirport } from '../interfaces/Airports';

type SearchFieldProps = {
  origin: IAirport | null;
  canDelete: boolean;
  handleRemoveOrigin: () => void;
  handleSelectOrigin: (selectedOption: IAirport | null) => void;
};

const SearchField = function SearchField({
  origin,
  canDelete,
  handleRemoveOrigin,
  handleSelectOrigin,
}: SearchFieldProps) {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState<IAirport[] | null>(null);

  // On change sets searchInput, debounce it and query the API for origin airports only with debounced value
  const inputFieldId = useId();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  let debouncedInput = useDebounce(searchInput, 1000);
  // let debouncedInput = searchInput;

  useEffect(() => {
    setSearchInput(origin?.displayName || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchAirportData() {
      if (debouncedInput) {
        const data = await getAirportSearchData(debouncedInput);
        setSearchOptions(
          data.map((it) => ({
            ...it,
            displayName: `${it.address.cityName} (${it.iataCode})`,
          }))
        );
      } else {
        setSearchOptions(null);
      }
    }
    fetchAirportData();
  }, [debouncedInput]);

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const newValue = e.currentTarget.value;
    const selectedOption = searchOptions?.find(
      (it) => it.displayName === newValue
    );
    if (newValue === '') {
      handleSelectOrigin(null);
    } else if (selectedOption) {
      setSearchInput(newValue);
      handleSelectOrigin(selectedOption);
    } else {
      setSearchInput(newValue);
    }
  };

  return (
    // Input field for origin airport
    <div className="SearchField">
      <label>
        <input
          type="text"
          placeholder="Origin Airport / City..."
          list={inputFieldId}
          value={searchInput}
          onChange={handleChange}
          onInput={onInputChange}
          autoComplete="off"
          required
        />
      </label>
      {/* Dropdown list for the input field */}
      <datalist id={inputFieldId}>
        {searchOptions &&
          searchOptions.map((airport, i) => {
            return (
              <option key={`${airport.id}-${i}`} value={airport.displayName}>
                {`${airport.name}`}
              </option>
            );
          })}
      </datalist>
      {canDelete && (
        <button className="remove-button" onClick={handleRemoveOrigin}>
          x
        </button>
      )}
    </div>
  );
};

export default SearchField;
