import React from 'react';

const AddlLocation = ({ addlLocationNotes, setAddlLocationNotes }) => {
  return (
    <fieldset>
      <legend>
        Location Notes
        &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0
          0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5
          1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
          />
          <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3
          8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0
          1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </legend>
      <label htmlFor='addlLocationNotes'>
        Special precautions for locations or addtional pickup/dropoff spots.<br /><br />
      </label>
      <textarea
        id="addlLocationNotes"
        name="AddlLocationNotes"
        placeholder='Optional location notes'
        rows='3'
        value={addlLocationNotes}
        onChange={(event) => {
          setAddlLocationNotes(event.target.value)
        }}
      />
    </fieldset>
  )
}

export default AddlLocation