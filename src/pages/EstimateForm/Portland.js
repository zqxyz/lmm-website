import React from 'react';
import axios from 'axios';
import Contact from './Fieldsets/Contact';
import ServiceType from './Fieldsets/ServiceType';
import ServiceDate from './Fieldsets/ServiceDate';
import Origin from './Fieldsets/Origin';
import Destination from './Fieldsets/Destination';
import AddlLocation from './Fieldsets/AddlLocation';
import OtherNotes from './Fieldsets/OtherNotes'
import Container from '../../components/Container';

// API documentation for SmartMoving
// https://smfilestore.blob.core.windows.net/docs/AdvancedWebsiteFormIntegration.pdf

const Portland = () => {

  /**
   *         Scroll on load +
   *      auto focus first field
   */
  const scrollRef = React.useRef()
  const focusRef = React.useRef()
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollIntoView({ behavior: "smooth" })
    if (focusRef.current) focusRef.current.focus()
  }, [])

  /**
   *     State
   *    Getters
   *      and
   *    Setters
   */
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
  // const [postResponse, setPostResponse] = React.useState('')

  /**
   * Formatting and validation with debounce,
   * sets "complete" state object to true if
   * conditions are met
   */
  React.useEffect(() => {
    const debounceTime = 500 // milliseconds
    const validateForm = () => {
      const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      if (form.FirstName !== ''
        && form.LastName !== ''
        && form.PhoneNumber !== ''
        && form.Email !== '') {
        setComplete(emailRegex.test(form.Email))
      } else { setComplete(false) }
    }
    const timerId = setTimeout(() => {
      setForm(
        {
          ...form, 'PhoneNumber': form.PhoneNumber
            .replaceAll(/[^\d]/g, '')
            .substring(0, 10)
        })
      validateForm()
    }, debounceTime)

    return () => {
      clearTimeout(timerId)
    }
  }, [form])


  /*
   *    Form change handler for input states
   */
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  /**
   *    Assemble "notes" for API shortcomings
   */
  React.useEffect(() => {
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
    setForm(prevState => ({ ...prevState, Notes: prepareNotes() }))
  }, [addlLocationNotes, otherNotes, dateWindow, destinationFloors, originFloors])


  /**
   *    Form submission
   *     using axios
   */
  const URL =
    `https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=2f400089-28bf-46c7-8a17-adfd01096041`;
  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post(URL, JSON.stringify(form))
      .then((response) => {
        // setPostResponse(response.data.leadId);
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
      <Container bgColor='rgba(204, 208, 196, 0.8)'>
        <h1 ref={scrollRef}>Estimate Request Form</h1>
        <p>
          Request an estimate for moving service from
          <span className="cowboy"> Local Muscle </span>
          in Portland, Maine
        </p>
        <p>
          Required fields marked with *
        </p>
        <div
          class="ui large form"
          style={{ maxWidth: '800px', margin: '3em auto 0 auto' }}
        >
          <form onSubmit={handleSubmit}>

            <Contact
              form={form}
              handleFormChange={handleFormChange}
              focusRef={focusRef}
            />

            <ServiceDate
              form={form}
              handleFormChange={handleFormChange}
              dateWindow={dateWindow}
              setDateWindow={setDateWindow}
            />

            <ServiceType
              form={form}
              setForm={setForm}
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
              disabled={!complete}
            >
              {(!complete) ? 'Complete form before submitting' : 'Submit'}
            </button>


          </form>
        </div>
      </Container>


    </>
  )
}

export default Portland