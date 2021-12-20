import React from 'react';
import axios from 'axios';
import ContainerSplitRight from '../../components/ContainerSplitRight';
import Columns from '../../components/Columns'
import States from './States';

const Portland = () => {
  const [postResponse, setPostResponse] = React.useState()
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
  })

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
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
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
          {postResponse}
        </>
        <div class="ui large form">
          <form onSubmit={handleSubmit}>

            <fieldset>
              <legend>Contact Information</legend>
              <div className="fields">
                <div className="eight wide field">
                  <label>First Name</label>
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
                  <label>Last Name</label>
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
                  <label>Phone</label>
                  <input required
                    type="tel"
                    pattern="[0-9]*"
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
                  <label>Email</label>
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
              <legend>Origin</legend>
              <div className="inline fields">
                <div className="ten wide field">
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
              <div className="inline fields">
                <div className="twelve wide field">
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
                    <input type="checkbox" name="OriginFloorsBasement" id="OriginFloorsBasement" />
                    <label htmlFor="OriginFloorsBasement">Basement</label>
                  </div><br />

                  <div class="ui checkbox">
                    <input type="checkbox" name="OriginFloorsFirst" id='originFloorsFirst' />
                    <label htmlFor='originFloorsFirst'>1st Floor / Ground Level</label>
                  </div><br />

                  <div class="ui checkbox">
                    <input type="checkbox" name="OriginFloorsSecond" id='originFloorsSecond' />
                    <label htmlFor='originFloorsSecond'>2nd Floor</label>
                  </div><br />
                </column>

                <column>
                  <div class="ui checkbox">
                    <input type="checkbox" name="OriginFloorsThird" id='originFloorsThird' />
                    <label htmlFor='originFloorsThird'>3rd Floor</label>
                  </div><br />

                  <div class="ui checkbox">
                    <input type="checkbox" name="OriginFloorsFourth" id='originFloorsFourth' />
                    <label htmlFor='originFloorsFourth'>4th Floor or Greater</label>
                  </div><br />

                  <div class="ui checkbox">
                    <input type="checkbox" name="OriginFloorsElevator" id='originFloorsElevator' />
                    <label htmlFor='originFloorsElevator'>Elevator</label>
                  </div><br />
                </column>
              </Columns>
            </fieldset>

            <fieldset>
              <legend>Destination</legend>
              <div className="inline fields">
                <div className="ten wide field">
                  <input required
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
                    <input type="checkbox" name="DestinationFloorsBasement" id="DestinationFloorsBasement" />
                    <label htmlFor="DestinationFloorsBasement">Basement</label>
                  </div><br />

                  <div class="ui checkbox">
                    <input type="checkbox" name="DestinationFloorsFirst" id='DestinationFloorsFirst' />
                    <label htmlFor='DestinationFloorsFirst'>1st Floor / Ground Level</label>
                  </div><br />

                  <div class="ui checkbox">
                    <input type="checkbox" name="DestinationFloorsSecond" id='DestinationFloorsSecond' />
                    <label htmlFor='DestinationFloorsSecond'>2nd Floor</label>
                  </div><br />
                </column>

                <column>
                  <div class="ui checkbox">
                    <input type="checkbox" name="DestinationFloorsThird" id='DestinationFloorsThird' />
                    <label htmlFor='DestinationFloorsThird'>3rd Floor</label>
                  </div><br />

                  <div class="ui checkbox">
                    <input type="checkbox" name="DestinationFloorsFourth" id='DestinationFloorsFourth' />
                    <label htmlFor='DestinationFloorsFourth'>4th Floor or Greater</label>
                  </div><br />

                  <div class="ui checkbox">
                    <input type="checkbox" name="DestinationFloorsElevator" id='DestinationFloorsElevator' />
                    <label htmlFor='DestinationFloorsElevator'>Elevator</label>
                  </div><br />
                </column>
              </Columns>
            </fieldset>

            {(complete === true) ?
              <button
                className={`ui ${(complete === true) ? 'blue' : 'grey'} button huge`}
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