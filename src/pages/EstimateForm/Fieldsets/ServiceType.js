import React from 'react';
import SectionHeader from './SectionHeader';



const ServiceType = ({ form, setForm, dark, handleFormChange, moveSize, setMoveSize }) => {


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
          required
          value={moveSize}
          onChange={(e) => setMoveSize(e.target.value)}
          id="moveSize"
          name='MoveSize'
        >
          <option selected hidden>
            Select a size
          </option>
          <option value="Single Room or Less">
            Single Room or Less (Under 600 SQFT)
          </option >
          <option disabled>---</option>
          <option value="Small Commercial Space">
            Small Commercial Space (Under 600 SQFT)
          </option>
          <option value="Medium Commerical Space">
            Medium Commerical Space (600-1000 SQFT)
          </option>
          <option value="Large Commercial Space">
            Large Commercial Space (1000-1500 SQFT)
          </option>
          <option value="Very Large Commercial Space">
            Very Large Commercial Space (1500 - 2000 SQFT)
          </option>
          <option value="Jumbo Commercial Space">
            Jumbo Commercial Space (Over 2000 SQFT)
          </option>
          <option disabled>---</option>
          <option value="Studio Apartment">
            Studio Apartment (Under 600 SQFT)
          </option>
          <option value="1 Bedroom Apartment">
            1 Bedroom Apartment (600 - 1000 SQFT)
          </option>
          <option value="2 Bedroom Apartment">
            2 Bedroom Apartment (1001 - 1400 SQFT)
          </option>
          <option value="3 Bedroom Apartment">
            3 Bedroom Apartment (1401 - 2000 SQFT)
          </option>
          <option disabled>---</option>
          <option value="1 Bedroom House">
            1 Bedroom House (800 - 1000 SQFT)
          </option>
          <option value="1 Bedroom House (Large)">
            1 Bedroom House (Large) (1000 - 1200 SQFT)
          </option>
          <option value="2 Bedroom House">
            2 Bedroom House (1400 - 1600 SQFT)
          </option>
          <option value="2 Bedroom House (Large)">
            2 Bedroom House (Large) (1600 - 1800 SQFT)
          </option>
          <option value="3 Bedroom House">
            3 Bedroom House (2000 - 2200 SQFT)
          </option>
          <option value="3 Bedroom House (Large)">
            3 Bedroom House (Large) (2200 - 2400 SQFT)
          </option>
          <option value="4 Bedroom House">
            4 Bedroom House (2600 - 2800 SQFT)
          </option>
          <option value="4 Bedroom House (Large)">
            4 Bedroom House (Large) (2800 - 3000 SQFT)
          </option>
          <option value="5 Bedroom House">
            5 Bedroom House (3300 - 3600 SQFT)
          </option>
          <option value="5 Bedroom House (Large)">
            5 Bedroom House (Large) (3600 - 4000 SQFT)
          </option>
          <option disabled>---</option>
          <option value="5 x 10 Storage Unit">
            5 x 10 Storage Unit
          </option>
          <option value="5 x 15 Storage Unit">
            5 x 15 Storage Unit
          </option>
          <option value="10 x 10 Storage Unit">
            10 x 10 Storage Unit
          </option>
          <option value="10 x 15 Storage Unit">
            10 x 15 Storage Unit
          </option>
          <option value="10 x 20 Storage Unit">
            10 x 20 Storage Unit
          </option>
        </select>
      </div>
      <div className="field">
        <label>
          Type*
        </label>
        <button
          className={`ui labeled icon std large button${(form.ServiceType === 'Moving') ? ' green' : ' '}`}
          id="serviceMultiLocation"
          value='Moving'
          onClick={setServiceType}
        >
          Moving with our trucks
          {(form.ServiceType === 'Moving') ?
            <i class="icon">
              <div style={{padding: '0.7em'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </div>
            </i>
            : <i class="icon"></i>}


        </button>
        <br />
        <button
          className={`ui labeled icon std large button${(form.ServiceType === 'InnerHouse') ? ' green' : ' '}`}
          id="serviceMultiLocation"
          value='InnerHouse'
          onClick={setServiceType}
        >
          Single Site Rearrangement
          {(form.ServiceType === 'InnerHouse') ?
            <i class="icon">
            <div style={{padding: '0.7em'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            </div>
          </i>
            : <i class="icon"></i>}
        </button>
        <br />
        <button
          className={`ui labeled icon std large button${(form.ServiceType === 'LoadOnly') ? ' green' : ' '}`}
          id="serviceMultiLocation"
          value='LoadOnly'
          onClick={setServiceType}
        >
          Storage/Rental Load Only
          {(form.ServiceType === 'LoadOnly') ?
            <i class="icon">
            <div style={{padding: '0.7em'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            </div>
          </i>
            : <i class="icon"></i>}
        </button>
        <br />
        <button
          className={`ui labeled icon std large button${(form.ServiceType === 'UnloadOnly') ? ' green' : ' '}`}
          id="serviceMultiLocation"
          value='UnloadOnly'
          onClick={setServiceType}
        >
          Storage/Rental Unload Only
          {(form.ServiceType === 'UnloadOnly') ?
            <i class="icon">
            <div style={{padding: '0.7em'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            </div>
          </i>
            : <i class="icon"></i>}
        </button>
      </div>


    </fieldset >
  )
}

export default ServiceType