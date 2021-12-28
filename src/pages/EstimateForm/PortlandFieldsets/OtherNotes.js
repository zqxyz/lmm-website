import React from 'react';

const AddlLocation = ({ otherNotes, setOtherNotes }) => {
  return (
    <fieldset>
      <legend>
        Other Notes
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
      <label htmlFor='otherNotes'>
        Summary of service or anything else we should know.<br /><br />
      </label>
      <textarea
        id="otherNotes"
        name="OtherNotes"
        rows='3'
        value={otherNotes}
        onChange={(event) => {
          setOtherNotes(event.target.value)
        }}
      />
    </fieldset>
  )
}

export default AddlLocation