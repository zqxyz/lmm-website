import React from 'react';
import States from '../States';
import Columns from '../../../components/Columns';

const Origin = ({ form, handleFormChange, originFloors, setOriginFloors }) => {
  return (
    <fieldset>
      <legend>
        <svg xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" fill="black" class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10
          6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        &nbsp;
        Origin
      </legend>
      <div className="fields">
        <div className="ten wide field">
          <label htmlFor='originStreet'>
            Street Address*
          </label>
          <input required
            type="text"
            className="form-control"
            name="OriginStreet"
            id="originStreet"
            placeholder='12 Example St.'
            value={form.OriginStreet}
            onChange={handleFormChange}
          />
        </div>
        <div className="six wide field">
          <label htmlFor='originCity'>
            City*
          </label>
          <input required
            type="text"
            className="form-control"
            name="OriginCity"
            id="originCity"
            placeholder='City'
            value={form.OriginCity}
            onChange={handleFormChange}
          />
        </div>
      </div>
      <div className="fields">
        <div className="twelve wide field">
          <label htmlFor='originState'>
            State*
          </label>
          <select required
            type="text"
            className="form-control"
            name="OriginState"
            id="originState"
            placeholder='ME'
            value={form.OriginState}
            onChange={handleFormChange}
          >
            <States />
          </select>
        </div>
        <div className="four wide field">
          <label htmlFor='originZip'>
            ZIP*
          </label>
          <input required
            type="text"
            className="form-control"
            name="OriginZip"
            id="originZip"
            placeholder='ZIP'
            value={form.OriginZip}
            onChange={handleFormChange}
          />
        </div>
      </div>

      <Columns style={{paddingBottom: '1em'}}>
        <column>
          <div class="ui checkbox">
            <input
              type="checkbox"
              name="OriginFloorsBasement"
              id="OriginFloorsBasement"
              checked={originFloors.basement}
              onChange={() => setOriginFloors(prevState =>
                ({ ...prevState, 'basement': !originFloors.basement }))
              }
            />
            <label htmlFor="OriginFloorsBasement">Basement</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name="OriginFloorsFirst"
              id='originFloorsFirst'
              checked={originFloors.first}
              onChange={() => setOriginFloors(prevState =>
                ({ ...prevState, 'first': !originFloors.first }))
              }
            />
            <label htmlFor='originFloorsFirst'>1st Floor / Ground Level</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name="OriginFloorsSecond"
              id='originFloorsSecond'
              checked={originFloors.second}
              onChange={() => setOriginFloors(prevState =>
                ({ ...prevState, 'second': !originFloors.second }))
              }
            />
            <label htmlFor='originFloorsSecond'>2nd Floor</label>
          </div><br />
        </column>

        <column>
          <div class="ui checkbox">
            <input
              type="checkbox"
              name="OriginFloorsThird"
              id='originFloorsThird'
              checked={originFloors.third}
              onChange={() => setOriginFloors(prevState =>
                ({ ...prevState, 'third': !originFloors.third }))
              }
            />
            <label htmlFor='originFloorsThird'>3rd Floor</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name="OriginFloorsFourth"
              id='originFloorsFourth'
              checked={originFloors.fourthPlus}
              onChange={() => setOriginFloors(prevState =>
                ({ ...prevState, 'fourthPlus': !originFloors.fourthPlus }))
              }
            />
            <label htmlFor='originFloorsFourth'>4th Floor or Greater</label>
          </div><br />

          <div class="ui checkbox">
            <input
              type="checkbox"
              name="OriginFloorsElevator"
              id='originFloorsElevator'
              checked={originFloors.elevator}
              onChange={() => setOriginFloors(prevState =>
                ({ ...prevState, 'elevator': !originFloors.elevator }))
              }
            />
            <label htmlFor='originFloorsElevator'>Elevator</label>
          </div><br />
        </column>
      </Columns>
    </fieldset>
  )
}

export default Origin