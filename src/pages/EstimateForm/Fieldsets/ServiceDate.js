import React from 'react';

const ServiceDate = ({ form, handleFormChange, dateWindow, setDateWindow, dark }) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;

  return (
    <fieldset
      className={(dark) ? 'dark' : ''}
    >
      <legend>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="black" class="bi bi-calendar3" viewBox="0 0 16 16">
          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0
          2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1
          .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552
          0-1-.384-1-.857V3.857z" />
          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1
          0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1
          1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3
          0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0
          2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0
          0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        &nbsp;
        Service Date
      </legend>
      <div className="fields">
        <div className="field">
          <label htmlFor='desiredDate'>
            Desired date*
          </label>
          <input
            required
            type="date"
            id="desiredDate"
            name="MoveDate"
            min={today}
            placeholder='mm/dd/yyyy'
            value={form.MoveDate}
            onChange={handleFormChange}
          />
        </div>
        <div className="field">
          <label htmlFor='dateRange'>
            Flexibility*
          </label>
          <select
            value={dateWindow}
            onChange={(e) => setDateWindow(e.target.value)}
            id='dateRange'
            name='DateRange'
            required>
            <option selected hidden>
              How soon do you need service?
            </option>
            <option>
              Within 1 week
            </option>
            <option>
              Within 2 weeks
            </option>
            <option>
              Within 30 days
            </option>
            <option>
              By the end of this month
            </option>
            <option>
              More than one month
            </option>
          </select>
        </div>
      </div>
    </fieldset>
  )
}

export default ServiceDate