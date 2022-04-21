const OriginSearchItem = () => {


  return (
    <div>
      <label>
        Origin
        <input list='airport-city-list' name='airport-city' />
      </label>
      <datalist id='airport-city-list'>
      {/* {api.filter((value){ if(value.includes(v))}).slice(0,10).map(city => return)} */}
        <option value='RIX'>Riga (RIX)</option>
        <option value='BRL'>Berlin (BRL)</option>
        <option value='ARL'>Stockholm (ARL)</option>
        <option value='MAD'>Madrid (MAD)</option>
        <option value='Helsinki' />
        <option value='Paris' />
        <option value='Oslo' />
        <option value='Edinburgh' />
      </datalist>
    </div>
  )
}

export default OriginSearchItem