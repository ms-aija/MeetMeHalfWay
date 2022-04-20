const Search = () => {
  return (
    <div className='Search'>
      <label>
        Origin 1
        <input list='airport-city-list' name='airport-city' />
      </label>
      <datalist id='airport-city-list'>
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

export default Search