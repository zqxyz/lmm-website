import React from 'react';
import axios from 'axios';
import ContainerSplitRight from '../../components/ContainerSplitRight';

const Portland = () => {
  const [postResponse, setPostResponse] = React.useState()
  const [complete, setComplete] = React.useState(false)
  const [form, setForm] = React.useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Extension: '',
    Email: ''
  })


  const URL =
    `https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=2f400089-28bf-46c7-8a17-adfd01096041`;

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
        setPostResponse({...response.data});
      });
  }

  return (
    <>

      <ContainerSplitRight
        title='Estimate Request Form'
        bgColor='#b6cca7'
      >
        <>
          Request an estimate for moving service from Local Muscle
          in <strong>Portland, Maine</strong>.
          {postResponse}
        </>
        <div class="ui large form">
          <form onSubmit={handleSubmit}>

            <fieldset style={{ marginBottom: '1em', border: '1px solid rgb(212, 225, 213)' }}>
              <legend>Name</legend>
              <div className="inline fields">
                <div className="eight wide field">
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
            </fieldset>

            <fieldset style={{ marginBottom: '1em', border: '1px solid rgb(212, 225, 213)' }}>
              <legend>Phone</legend>
              <div className="inline fields">
                <div className="twelve wide field">
                  <input required
                    type="number"
                    className="form-control"
                    name="PhoneNumber"
                    id="phoneNumber"
                    placeholder='Phone Number'
                    value={form.PhoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="four wide field">
                  <label for='Extension'>Ext.</label>
                  <input
                    type="number"
                    className="form-control"
                    name="Extension"
                    id="phoneExt"
                    placeholder='#'
                    value={form.Extension}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset style={{ marginBottom: '1em', border: '1px solid rgb(212, 225, 213)' }}>
              <legend>Email</legend>
              <div className="field">
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
            </fieldset>

            {(complete === true) ?
              <button
                className={`ui ${(complete === true) ? 'blue' : 'grey'} button huge`}
                style={{ margin: '0.75em' }}
              >
                Submit
              </button>
              : <em>Name, phone number, and email are required fields</em>
            }


          </form>
        </div>
      </ContainerSplitRight>


    </>
  )
}

export default Portland