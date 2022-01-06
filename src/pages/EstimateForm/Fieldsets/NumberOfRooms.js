import React from 'react';


const NumberOfRooms = ({ roomCount, setRoomCount, dark }) => {

  return (
    <fieldset
      className={(dark) ? 'dark' : ''}
    >
      <legend>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="black" class="bi bi-door-open" viewBox="0 0 16 16">
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5
          1-.224 1-.5 1z" />
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13
          2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0
          1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5
          0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
        </svg>
        &nbsp;
        Number of Rooms
      </legend>


      <div className="field">
        <label for='numberOfRooms'>
          How many rooms contain items that we'll be handling?*
        </label>
        <select
          required
          value={roomCount}
          onChange={(e) => { setRoomCount(e.target.value) }}
          id='numberOfRooms'
          name='NumberOfRooms'
          required>
          <option value='1'>
            One
          </option>
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
          <option value='7'>
            Seven
          </option>
          <option value='8'>
            Eight
          </option>
          <option value='9'>
            Nine
          </option>
          <option value='10'>
            Ten
          </option>
          <option value='11'>
            Eleven
          </option>
          <option value='12'>
            Twelve
          </option>
          <option value='13'>
            Thirteen
          </option>
          <option value='14'>
            Fourteen
          </option>
          <option value='15'>
            Fifteen
          </option>
          <option value='16'>
            Sixteen
          </option>
        </select>
      </div>


    </fieldset >
  )
}

export default NumberOfRooms