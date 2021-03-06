import React from 'react';
import SectionHeader from './SectionHeader';

const formatPhoneNumber = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)
    }-${phoneNumber.slice(6, 10)}`;
}

const Contact = ({ form, handleFormChange, dark, focusRef }) => {
  const icon =
    <svg xmlns="http://www.w3.org/2000/svg" width="24"
      height="24" fill="black" class="bi bi-person-fill"
      viewBox="0 0 15 15">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3
    3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>;

  return (
    <>
      <fieldset
        className={(dark) ? 'dark' : ''}
      >
        <SectionHeader
          title='Contact Info'
          icon={icon}
        />
        <div className="fields">
          <div className="eight wide field">
            <label htmlFor='firstName'>First Name*</label>
            <input
              ref={focusRef}
              required
              type="text"
              className="form-control"
              name="FirstName"
              id="firstName"
              placeholder='First Name'
              value={form.FirstName}
              onChange={handleFormChange}
            />
          </div>
          <div className="eight wide field">
            <label htmlFor='lastName'>Last Name*</label>
            <input required
              type="text"
              className="form-control"
              name="LastName"
              id="lastName"
              placeholder='Last Name'
              value={form.LastName}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className="fields">
          <div className="twelve wide field">
            <label htmlFor='phoneNumber'>Phone*</label>
            <input required
              type="tel"
              pattern="(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}"
              className="form-control"
              name="PhoneNumber"
              id="phoneNumber"
              placeholder='(123) 555-6789'
              value={formatPhoneNumber(form.PhoneNumber)}
              onChange={handleFormChange}
              onWheel={(e) => e.target.blur()}
            />
          </div>
          <div className="four wide field">
            <label htmlFor='phoneExt'>Ext.</label>
            <input
              type="tel"
              pattern="[0-9]*"
              className="form-control"
              name="Extension"
              id="phoneExt"
              placeholder='#'
              value={form.Extension}
              onChange={handleFormChange}
              onWheel={(e) => e.target.blur()}
            />
          </div>
        </div>
        <div className="fields">
          <div className="sixteen wide field">
            <label htmlFor='email'>Email*</label>
            <input required
              type="text"
              className="form-control"
              name="Email"
              id="email"
              placeholder='you@example.com'
              value={form.Email}
              onChange={handleFormChange}
            />
          </div>
        </div>
      </fieldset>
    </>
  )
}

export default Contact