import React from 'react';
import SectionHeader from './SectionHeader';
import moveSizes from '../../../config/moveSizes.json'



const ServiceType = ({ form, setForm, dark, handleFormChange }) => {

  const MoveSizeSelect = () => {
    return (
      moveSizes.map(size => {
        return (
          <option
            value={size.name}
          >
            {`${size.name}${(size.sqft) ? ` (${size.sqft})` : ''}`}
          </option>)
      })
    )
  }

  const setServiceType = evt => {
    const serviceType = evt.target.value
    evt.preventDefault()
    setForm(prevState => ({ ...prevState, ServiceType: serviceType }))
  }

  const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24"
    height="24" fill="black" class="bi bi-truck"
    viewBox="0 -1 16 16">
    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0
      1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5
      1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2
      0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0
      10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01
      2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0
      0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732
      1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5
      0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1
      1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>;

  return (
    <fieldset
      className={(dark) ? 'dark' : ''}
    >
      <SectionHeader
        icon={icon}
        title='Service Details'
      />
      <div className="field">
        <label htmlFor='moveSize'>
          Size*
        </label>
        <select
          id="moveSize"
          value={form.MoveSize}
          onChange={handleFormChange}
          name='MoveSize'
          required
        >
          <MoveSizeSelect />
        </select>
      </div>
      <div className="field">
        <label>
          Type*
        </label>
        <button
          className={`ui button large std${(form.ServiceType === 'Moving') ? ' blue' : ''}`}
          id="serviceMultiLocation"
          value='Moving'
          onClick={setServiceType}
        >
          Moving with our trucks
          {(form.ServiceType === 'Moving') ? ' ✓' : ''}
        </button>
        <br />
        <button
          className={`ui button large std${(form.ServiceType === 'InnerHouse') ? ' blue' : ''}`}
          id="serviceMultiLocation"
          value='InnerHouse'
          onClick={setServiceType}
        >
          Single Location Rearrangement
          {(form.ServiceType === 'InnerHouse') ? ' ✓' : ''}
        </button>
        <br />
        <button
          className={`ui button large std${(form.ServiceType === 'LoadOnly') ? ' blue' : ''}`}
          id="serviceMultiLocation"
          value='LoadOnly'
          onClick={setServiceType}
        >
          Container/Rental Vehicle Load Only
          {(form.ServiceType === 'LoadOnly') ? ' ✓' : ''}
        </button>
        <br />
        <button
          className={`ui button large std${(form.ServiceType === 'UnloadOnly') ? ' blue' : ''}`}
          id="serviceMultiLocation"
          value='UnloadOnly'
          onClick={setServiceType}
        >
          Container/Rental Vehicle Unload Only
          {(form.ServiceType === 'UnloadOnly') ? ' ✓' : ''}
        </button>
      </div>


    </fieldset >
  )
}

export default ServiceType