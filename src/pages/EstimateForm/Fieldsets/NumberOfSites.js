import React from 'react';
import SectionHeader from './SectionHeader';


const NumberOfSites = ({ siteCount, setSiteCount, dark }) => {
  const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    fill="black" class="bi bi-house" viewBox="0 -1 16 16">
    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0
  .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5
  1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0
  0 1 .5.5z" />
    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414
  0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5
  0 1 1-.708-.708L7.293 1.5z" />
  </svg>;

  return (
    <fieldset
      className={(dark) ? 'dark' : ''}
    >
      <SectionHeader
        icon={icon}
        title='Number of Sites'
      />
      <div className="field">
        <label htmlFor='numberOfSites'>
          How many locations will we be visiting?*
        </label>
        <select
          value={siteCount}
          onChange={(e) => { setSiteCount(e.target.value) }}
          id='numberOfSites'
          name='NumberOfSites'
          required
        >
          <option value='2'>
            Two
          </option>
          <option value='3'>
            Three
          </option>
          <option value='4'>
            Four
          </option>
          <option value='5'>
            Five
          </option>
          <option value='6'>
            Six
          </option>
        </select>
      </div>


    </fieldset >
  )
}

export default NumberOfSites