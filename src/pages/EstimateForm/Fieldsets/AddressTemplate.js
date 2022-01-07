import React from 'react';
import States from '../States';
import Columns from '../../../components/Columns';

const AddressTemplate = ({ form, handleFormChange, siteNumber, siteCount }) => {
  const [floors, setFloors] = React.useState({
    basement: false,
    first: false,
    second: false,
    third: false,
    fourthPlus: false,
    elevator: false
  })
  return (
    <fieldset>
      <legend
        align='right'
        style={{ margin: '0' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" fill="black" class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10
          6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        &nbsp;
        {(siteCount > 1) ? `Site ${siteNumber}` : 'Site'}
      </legend>
      <div className="fields">
        <div className="ten wide field">
          <label htmlFor={`site${siteNumber}Street`}>
            Street Address*
          </label>
          <input required
            type="text"
            className="form-control"
            name={`Site${siteNumber}Street`}
            id={`site${siteNumber}Street`}
            placeholder='12 Example St.'
            value={form[`Site${siteNumber}Street`]}
            onChange={handleFormChange}
          />
        </div>
        <div className="six wide field">
          <label htmlFor={`site${siteNumber}City`}>
            City*
          </label>
          <input required
            type="text"
            className="form-control"
            name={`Site${siteNumber}City`}
            id={`site${siteNumber}City`}
            placeholder='City'
            value={form[`Site${siteNumber}City`]}
            onChange={handleFormChange}
          />
        </div>
      </div>
      <div className="fields">
        <div className="twelve wide field">
          <label htmlFor={`site${siteNumber}State`}>
            State*
          </label>
          <select required
            type="text"
            className="form-control"
            name={`Site${siteNumber}State`}
            id={`site${siteNumber}State`}
            placeholder='ME'
            value={form[`Site${siteNumber}State`] || "VT"}
            onChange={handleFormChange}
          >
            <States/>
          </select>
        </div>
        <div className="four wide field">
          <label htmlFor={`site${siteNumber}Zip`}>
            ZIP*
          </label>
          <input required
            type="text"
            className="form-control"
            name={`Site${siteNumber}Zip`}
            id={`site${siteNumber}Zip`}
            placeholder='ZIP'
            value={form[`Site${siteNumber}Zip`]}
            onChange={handleFormChange}
          />
        </div>
      </div>


      {/*     FLOORS     */}
      {/******************/}
      <Columns style={{paddingBottom: '1em'}}>
        <column>
          <div class="ui checkbox">
            <input
              type="checkbox"
              name={`Site${siteNumber}Basement`}
              id={`site${siteNumber}Basement`}
              checked={floors.basement}
              onChange={() => setFloors(prevState =>
                ({ ...prevState, basement: !floors.basement }))
              }
            />
            <label htmlFor={`site${siteNumber}Basement`}>Basement</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name={`Site${siteNumber}First`}
              id={`site${siteNumber}First`}
              checked={floors.first}
              onChange={() => setFloors(prevState =>
                ({ ...prevState, 'first': !floors.first }))
              }
            />
            <label htmlFor={`site${siteNumber}First`}>1st Floor / Ground Level</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name={`Site${siteNumber}Second`}
              id={`site${siteNumber}Second`}
              checked={floors.second}
              onChange={() => setFloors(prevState =>
                ({ ...prevState, 'second': !floors.second }))
              }
            />
            <label htmlFor={`site${siteNumber}Second`}>2nd Floor</label>
          </div><br />
        </column>

        <column>
          <div class="ui checkbox">
            <input
              type="checkbox"
              name={`Site${siteNumber}Third`}
              id={`site${siteNumber}Third`}
              checked={floors.third}
              onChange={() => setFloors(prevState =>
                ({ ...prevState, 'third': !floors.third }))
              }
            />
            <label htmlFor={`site${siteNumber}Third`}>3rd Floor</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name={`Site${siteNumber}FourthPlus`}
              id={`site${siteNumber}FourthPlus`}
              checked={floors.fourthPlus}
              onChange={() => setFloors(prevState =>
                ({ ...prevState, 'fourthPlus': !floors.fourthPlus }))
              }
            />
            <label htmlFor={`site${siteNumber}FourthPlus`}>4th Floor or Greater</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name={`Site${siteNumber}Elevator`}
              id={`site${siteNumber}Elevator`}
              checked={floors.elevator}
              onChange={() => setFloors(prevState =>
                ({ ...prevState, 'elevator': !floors.elevator }))
              }
            />
            <label htmlFor={`site${siteNumber}Elevator`}>Elevator</label>
          </div><br />
        </column>
      </Columns>
    </fieldset>
  )
}

export default AddressTemplate