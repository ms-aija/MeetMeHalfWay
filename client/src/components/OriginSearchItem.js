import { useState } from 'react';

const OriginSearchItem = ({ allAirports, listId }) => {
  const [originInput, setOriginInput] = useState('');
  const filteredAirports = allAirports.filter(el => {
    return el.code.toLowerCase().includes(originInput.toLowerCase()) ||
    el.name.toLowerCase().includes(originInput.toLowerCase()) ||
    el.city.toLowerCase().includes(originInput.toLowerCase()) ||
    el.state.toLowerCase().includes(originInput.toLowerCase()) ||
    el.country.toLowerCase().includes(originInput.toLowerCase())
  })
  const shortlistFilteredAirports = filteredAirports.slice(0,7);
  // console.log({shortlistFilteredAirports});
  console.log({allAirports});
  console.log({filteredAirports});
  console.log({shortlistFilteredAirports});

  return (
    <div className='OriginSearchItem'>
      <label>
        Origin
        <input
          list={listId}
          name='airport-city'
          onChange={(e) => setOriginInput(e.target.value)}
        />
      </label>
      <datalist id={listId}>
        {shortlistFilteredAirports.map(airport => {
            return <option key={airport.code} value={airport.code}>{`${airport.name} (${airport.city}, ${airport.country})`}</option>
          })}
        {/* {api.filter((value){ if(value.includes(v))}).slice(0,10).map(city => return)} */}

        {/* Hardcoded data */}
        {/* <option value='RIX'>Riga (RIX)</option>
        <option value='BRL'>Berlin (BRL)</option>
        <option value='ARL'>Stockholm (ARL)</option>
        <option value='MAD'>Madrid (MAD)</option>
        <option value='Helsinki' />
        <option value='Paris' />
        <option value='Oslo' />
        <option value='Edinburgh' /> */}
      </datalist>
    </div>
  )
}

export default OriginSearchItem