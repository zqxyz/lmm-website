import React from 'react';
import axios from 'axios';
import ContainerSplitRight from '../../components/ContainerSplitRight';
import Columns from '../../components/Columns'
import States from './States';

const Portland = () => {
  const [postResponse, setPostResponse] = React.useState('')
  const [complete, setComplete] = React.useState(false)
  const [form, setForm] = React.useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Extension: '',
    Email: '',
    OriginStreet: '',
    OriginCity: '',
    OriginState: '',
    OriginZip: '',
    DestinationStreet: '',
    DestinationCity: '',
    DestinationState: '',
    DestinationZip: '',
    Notes: ''
  })

  const [originFloors, setOriginFloors] = React.useState({
    basement: false,
    first: false,
    second: false,
    third: false,
    fourthPlus: false,
    elevator: false
  })

  const [destinationFloors, setDestinationFloors] = React.useState({
    basement: false,
    first: false,
    second: false,
    third: false,
    fourthPlus: false,
    elevator: false
  })

  const [addlLocationNotes, setAddlLocationNotes] = React.useState('')

  const [otherNotes, setOtherNotes] = React.useState('')

  const [serviceType, setServiceType] = React.useState('Moving')

  // today, probably
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;


  const URL =
    `https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=2f400089-28bf-46c7-8a17-adfd01096041`;

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

  const validate = () => {
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    if (form.FirstName !== ''
      && form.LastName !== ''
      && form.PhoneNumber !== ''
      && form.Email !== '') {
      setComplete(emailRegex.test(form.Email))
    } else { setComplete(false) }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm(prevState => ({ ...prevState, [name]: value }))
    validate()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    axios.post(URL, JSON.stringify(form))
      .then((response) => {
        setPostResponse({ ...response.data });
      });
  }

  return (
    <>

      <ContainerSplitRight
        title='Estimate Request Form'
        bgColor='rgb(66, 89, 76)'
        lightText
      >
        <>
          Request an estimate for moving service from Local Muscle
          in <strong>Portland, Maine</strong>
          {/* <br />
          <br />
          {JSON.stringify(form).split(',').map(blob => <> {blob} <br /> </>)}
          <br />
          <br />
          {JSON.stringify(originFloors).split(',').map(blob => <> {blob} <br /> </>)}
          <br />
          <br />
          {JSON.stringify(destinationFloors).split(',').map(blob => <> {blob} <br /> </>)}
          <br />
          <br />
          {addlLocationNotes}
          <br />
          <br />
          {otherNotes}
          <br />
          <br />
          {serviceType} */}
        </>
        <div class="ui large form">
          <form onSubmit={handleSubmit}>
            <p style={{ color: '#d2d2d2', textAlign: 'right' }}>
              Required fields marks with *
            </p>

            <fieldset>
              <legend>
                Contact Information
                &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="currentColor" class="bi bi-person-fill"
                  viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3
                  3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </legend>
              <div className="fields">
                <div className="eight wide field">
                  <label htmlFor='firstName'>First Name*</label>
                  <input required
                    type="text"
                    className="form-control"
                    name="FirstName"
                    id="firstName"
                    placeholder='First Name'
                    value={form.FirstName}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>
                Service Type
                &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="currentColor" class="bi bi-truck"
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
              <div className="fields">

                <div className="field">
                  <button
                    className={`ui button pop${(serviceType === 'Moving') ? ' green' : ''}`}
                    id="serviceMultiLocation"
                    onClick={(e) => { e.preventDefault(); setServiceType('Moving') }}
                  >
                    Multiple Location (Moving with our trucks)
                    {(serviceType === 'Moving') ? ' ✔' : ''}
                  </button>
                  <br />
                  <button
                    className={`ui button pop${(serviceType === 'SingleSite') ? ' green' : ''}`}
                    id="serviceMultiLocation"
                    onClick={(e) => { e.preventDefault(); setServiceType('SingleSite') }}
                  >
                    Single Location (Rearrangement, U-Haul, Container load)
                    {(serviceType === 'SingleSite') ? ' ✔' : ''}
                  </button>
                </div>

              </div>
            </fieldset>

            <fieldset>
              <legend>
                Service Date
                &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
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
              </legend>
              <div className="fields">
                <div className="field">
                  <label htmlFor='desiredDate'>
                    Desired date
                  </label>
                  <input
                    type="date"
                    id="desiredDate"
                    name="DesiredDate"
                    min={today}
                  />
                </div>
                <div className="field">
                  <label htmlFor='dateRange'>
                    Flexibility
                  </label>
                  <select>
                    <option>
                      By the end of this month
                    </option>
                    <option>
                      1 week from now
                    </option>
                    <option>
                      2 weeks from now
                    </option>
                    <option>
                      1 month from now
                    </option>
                    <option>
                      More than one month
                    </option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>
                Origin
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Columns>
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

            {(serviceType === 'Moving') ?
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
                <div className="inline fields">
                  <div className="ten wide field">
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="DestinationStreet"
                      id="DestinationStreet"
                      placeholder='67 Forinstance Ave.'
                      value={form.DestinationStreet}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="six wide field">
                    <input required
                      type="text"
                      className="form-control"
                      name="DestinationCity"
                      id="DestinationCity"
                      placeholder='City'
                      value={form.DestinationCity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inline fields">
                  <div className="twelve wide field">
                    <select required
                      type="text"
                      className="form-control"
                      name="DestinationState"
                      id="DestinationState"
                      placeholder='ME'
                      value={form.DestinationState}
                      onChange={handleChange}
                    >
                      <States />
                    </select>
                  </div>
                  <div className="four wide field">
                    <input required
                      type="text"
                      className="form-control"
                      name="DestinationZip"
                      id="DestinationZip"
                      placeholder='ZIP'
                      value={form.DestinationZip}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Columns>
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
              : ''}

            <fieldset>
              <legend>
                Additional Location Notes
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

            <fieldset>
              <legend>
                Other Service Notes
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
                Summary of requested service, or anything else you'd like us to know.<br /><br />
              </label>
              <textarea
                id="otherNotes"
                name="OtherNotes"
                placeholder='Optional service notes'
                rows='3'
                value={otherNotes}
                onChange={(event) => {
                  setOtherNotes(event.target.value)
                }}
              />
            </fieldset>

            {(complete === true) ?
              <button
                className={`ui ${(complete === true) ? 'blue' : 'grey'} button huge pop`}
                style={{ margin: '0.75em' }}
              >
                Submit
              </button>
              : <em>Complete form to proceed</em>
            }


          </form>
        </div>
      </ContainerSplitRight>


    </>
  )
}

export default Portland