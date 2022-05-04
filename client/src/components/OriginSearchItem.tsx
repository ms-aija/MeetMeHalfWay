import { useState } from 'react';
import { Airports } from '../interfaces';

interface Props {
  allAirports: Airports[];
  listId: string;
  itemId: string;
  listDefaultVal: string;
}

const OriginSearchItem = ({
  allAirports,
  listId,
  itemId,
  listDefaultVal,
}: Props) => {
  const [originInput, setOriginInput] = useState('');

  const filteredAirports = allAirports.filter((el) => {
    const lowerCaseOriginInput = originInput.toLowerCase();
    return (
      el.code.toLowerCase().includes(lowerCaseOriginInput) ||
      el.name.toLowerCase().includes(lowerCaseOriginInput) ||
      el.city.toLowerCase().includes(lowerCaseOriginInput) ||
      el.state.toLowerCase().includes(lowerCaseOriginInput) ||
      el.country.toLowerCase().includes(lowerCaseOriginInput)
    );
  });
  const shortlistFilteredAirports = filteredAirports;

  return (
    <div className="OriginSearchItem">
      <label>
        <input
          defaultValue={listDefaultVal}
          id={itemId}
          placeholder="Airport/City..."
          list={listId}
          name="airport-city"
          onChange={(e) => {
            setOriginInput(e.target.value);
          }}
        />
      </label>
      <datalist id={listId}>
        {shortlistFilteredAirports.map((airport) => {
          return (
            <option
              key={airport.code}
              value={airport.code}
            >{`${airport.name} (${airport.city}, ${airport.country})`}</option>
          );
        })}
      </datalist>
    </div>
  );
};

export default OriginSearchItem;
