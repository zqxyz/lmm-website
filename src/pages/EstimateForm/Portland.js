import React from 'react';
import axios from 'axios';
import ContainerSplitRight from '../../components/ContainerSplitRight';
import Contact from './PortlandFieldsets/Contact';
import ServiceType from './PortlandFieldsets/ServiceType';
import ServiceDate from './PortlandFieldsets/ServiceDate';
import Origin from './PortlandFieldsets/Origin';
import Destination from './PortlandFieldsets/Destination';
import AddlLocation from './PortlandFieldsets/AddlLocation';

// API documentation for SmartMoving
// https://smfilestore.blob.core.windows.net/docs/AdvancedWebsiteFormIntegration.pdf

// NOTE
// This will use React to submit form to API directly in React
// only in development, for testing. Final target is using
// server side submission using Express.js or PHP.

const Portland = () => {
  const [form, setForm] = React.useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Extension: '',
    Email: '',
    ServiceType: 'Moving',
    MoveDate: '',
    OriginStreet: '',
    OriginCity: '',
    OriginState: 'ME',
    OriginZip: '',
    DestinationStreet: '',
    DestinationCity: '',
    DestinationState: 'ME',
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
  const [complete, setComplete] = React.useState(false)
  const [postResponse, setPostResponse] = React.useState('')

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

  const handleFormChange = (event) => {
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
        bgColor='transparent'
      >
        <>
          Request an estimate for moving service from Local Muscle
          in <strong>Portland, Maine</strong>
          <br />
          <br />
          <p>
            {/* {JSON.stringify(form).split(',').map(item => <>{item}<br /></>)} */}
          </p>
        </>
        <div class="ui large form">
          <form onSubmit={handleSubmit}>
            <p style={{ color: 'rgb(55, 55, 55)', textAlign: 'right' }}>
              Required fields marks with *
            </p>

            <Contact
              form={form}
              handleFormChange={handleFormChange}
            />

            <ServiceType
              form={form}
              setForm={setForm}
            />

            <ServiceDate
              form={form}
              handleFormChange={handleFormChange}
            />

            <Origin
              form={form}
              handleFormChange={handleFormChange}
              originFloors={originFloors}
              setOriginFloors={setOriginFloors}
            />

            {(form.ServiceType === 'Moving') ?
              <Destination
                form={form}
                handleFormChange={handleFormChange}
                destinationFloors={destinationFloors}
                setDestinationFloors={setDestinationFloors}
              />
              : ''}

            <AddlLocation
              addlLocationNotes={addlLocationNotes}
              setAddlLocationNotes={setAddlLocationNotes}
            />

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