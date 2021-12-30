import React from 'react';
import axios from 'axios';
import ContainerSplitRight from '../../components/ContainerSplitRight';
import Contact from './PortlandFieldsets/Contact';
import ServiceType from './PortlandFieldsets/ServiceType';
import ServiceDate from './PortlandFieldsets/ServiceDate';
import Origin from './PortlandFieldsets/Origin';
import Destination from './PortlandFieldsets/Destination';
import AddlLocation from './PortlandFieldsets/AddlLocation';
import OtherNotes from './PortlandFieldsets/OtherNotes'
import Container from '../../components/Container';

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
  const [otherNotes, setOtherNotes] = React.useState('')
  const [dateWindow, setDateWindow] = React.useState('')
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

  React.useEffect(() => {
    setForm(prevState => ({ ...prevState, Notes: prepareNotes() }))
  }, [addlLocationNotes, otherNotes])

  const prepareNotes = () => {
    let notes = ''
    if (otherNotes.length > 0) notes += `"${otherNotes}"`
    if (addlLocationNotes.length > 0) notes += `\nLocation notes: ${addlLocationNotes}`
    if (dateWindow.length > 0) notes += `\nFlexibility: ${dateWindow}`
    if (Object.values(originFloors).includes(true)) {
      notes += `\nOrigin floors: ${Object.keys(originFloors).filter(key => originFloors[key] === true)}`
    }
    if (Object.values(destinationFloors).includes(true)) {
      notes += `\nDestination floors: ${Object.keys(destinationFloors).filter(k => destinationFloors[k] === true)}`
    }

    return notes
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post(URL, JSON.stringify(form))
      .then((response) => {
        setPostResponse(response.data.leadId);
        alert('Lead created: ' + response.data.leadId)
      })
      .catch(function (error) {
        if (error.response.data.message === 'This lead has already been submitted.  Please contact SmartMoving support.') {
          console.log('Duplicate')
          alert('Information already submitted')
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      })
  }

  return (
    <>
      <Container
        title='Estimate Request Form'
        bgColor='rgb(232, 236, 226)'
      >
        <p>
          Request an estimate for moving service from Local Muscle
          in <strong>Portland, Maine</strong>
        </p>
        <p>
          Required fields marks with *
        </p>
        <div
          class="ui large form"
          style={{ maxWidth: '800px', margin: '3em auto 0 auto' }}
        >
          <form onSubmit={handleSubmit}>

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
              dateWindow={dateWindow}
              setDateWindow={setDateWindow}
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

            <OtherNotes
              otherNotes={otherNotes}
              setOtherNotes={setOtherNotes}
            />

            {(complete === false) ? <p>Complete the required fields above to proceed</p> : ''}
            <button
              className={`ui ${(complete === true) ? 'blue' : 'grey'} button huge pop`}
              style={{ margin: '0.75em' }}
              disabled={(complete === true) ? false : true}
            >
              Submit
            </button>


          </form>
        </div>
      </Container>


    </>
  )
}

export default Portland