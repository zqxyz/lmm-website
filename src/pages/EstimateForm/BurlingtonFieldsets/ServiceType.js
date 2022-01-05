import React from 'react';


const ServiceType = ({ form, setForm }) => {

  const setServiceType = evt => {
    const serviceType = evt.target.value
    evt.preventDefault()
    setForm(prevState => ({ ...prevState, ServiceType: serviceType }))
  }

  return (
    <fieldset className="dark">
      <legend>
        Service Type
        &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" fill="black" className="bi bi-truck"
          viewBox="0 0 16 16">
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
        </svg>
      </legend>


        <div className="field">
          <button
            className={`ui button large std${(form.ServiceType === 'Moving') ? ' blue' : ''}`}
            id="serviceMultiLocation"
            value='Moving'
            onClick={setServiceType}
          >
            Multiple Location (Moving with our trucks)
            {(form.ServiceType === 'Moving') ? ' ✓' : ''}
          </button>
          <br />
          <button
            className={`ui button large std${(form.ServiceType === 'LoadingOnly') ? ' blue' : ''}`}
            id="serviceMultiLocation"
            value='LoadingOnly'
            onClick={setServiceType}
          >
            Single Location (Rearrangement, U-Haul, Container load)
            {(form.ServiceType === 'LoadingOnly') ? ' ✓' : ''}
          </button>
        </div>


    </fieldset >
  )
}

export default ServiceType