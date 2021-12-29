import React from 'react';
import States from '../States';
import Columns from '../../../components/Columns';

const Destination = ({ form, handleFormChange, destinationFloors, setDestinationFloors }) => {
  return (
    <fieldset>
      <legend>
        Destination
        &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" fill="currentColor" class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10
        6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
      </legend>
      <div className="fields">
        <div className="ten wide field">
          <label htmlFor='destinationStreet'>
            Street Address*
          </label>
          <input
            required
            type="text"
            className="form-control"
            name="DestinationStreet"
            id="destinationStreet"
            placeholder='67 Forinstance Ave.'
            value={form.DestinationStreet}
            onChange={handleFormChange}
          />
        </div>
        <div className="six wide field">
          <label htmlFor='destinationCity'>
            City*
          </label>
          <input required
            type="text"
            className="form-control"
            name="DestinationCity"
            id="destinationCity"
            placeholder='City'
            value={form.DestinationCity}
            onChange={handleFormChange}
          />
        </div>
      </div>
      <div className="fields">
        <div className="twelve wide field">
          <label htmlFor='destinationState'>
            State*
          </label>
          <select required
            type="text"
            className="form-control"
            name="DestinationState"
            id="destinationState"
            placeholder='ME'
            value={form.DestinationState}
            onChange={handleFormChange}
          >
            <States />
          </select>
        </div>
        <div className="four wide field">
          <label htmlFor='destinationZip'>
            ZIP*
          </label>
          <input required
            type="text"
            className="form-control"
            name="DestinationZip"
            id="destinationZip"
            placeholder='ZIP'
            value={form.DestinationZip}
            onChange={handleFormChange}
          />
        </div>
      </div>
      <Columns style={{paddingBottom: '1em'}}>
        <column>
          <div class="ui checkbox">
            <input
              type="checkbox"
              name="DestinationFloorsBasement"
              id="DestinationFloorsBasement"
              checked={destinationFloors.basement}
              onChange={() => setDestinationFloors(prevState =>
                ({ ...prevState, 'basement': !destinationFloors.basement }))
              }
            />
            <label htmlFor="DestinationFloorsBasement">Basement</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name="DestinationFloorsFirst"
              id='DestinationFloorsFirst'
              checked={destinationFloors.first}
              onChange={() => setDestinationFloors(prevState =>
                ({ ...prevState, 'first': !destinationFloors.first }))
              }
            />
            <label htmlFor='DestinationFloorsFirst'>1st Floor / Ground Level</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name="DestinationFloorsSecond"
              id='DestinationFloorsSecond'
              checked={destinationFloors.second}
              onChange={() => setDestinationFloors(prevState =>
                ({ ...prevState, 'second': !destinationFloors.second }))
              }
            />
            <label htmlFor='DestinationFloorsSecond'>2nd Floor</label>
          </div><br />
        </column>

        <column>
          <div class="ui checkbox">
            <input
              type="checkbox"
              name="DestinationFloorsThird"
              id='DestinationFloorsThird'
              checked={destinationFloors.third}
              onChange={() => setDestinationFloors(prevState =>
                ({ ...prevState, 'third': !destinationFloors.third }))
              }
            />
            <label htmlFor='DestinationFloorsThird'>3rd Floor</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name="DestinationFloorsFourth"
              id='DestinationFloorsFourth'
              checked={destinationFloors.fourthPlus}
              onChange={() => setDestinationFloors(prevState =>
                ({ ...prevState, 'fourthPlus': !destinationFloors.fourthPlus }))
              }
            />
            <label htmlFor='DestinationFloorsFourth'>4th Floor or Greater</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name="DestinationFloorsElevator"
              id='DestinationFloorsElevator'
              checked={destinationFloors.elevator}
              onChange={() => setDestinationFloors(prevState =>
                ({ ...prevState, 'elevator': !destinationFloors.elevator }))
              }
            />
            <label htmlFor='DestinationFloorsElevator'>Elevator</label>
          </div><br />
        </column>
      </Columns>
    </fieldset>
  )
}

export default Destination