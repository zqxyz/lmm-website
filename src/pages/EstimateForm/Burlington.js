import React from 'react';
import mail from '../../mail';
import Container from '../../components/Container';
import Contact from './Fieldsets/Contact';
import ServiceType from './Fieldsets/ServiceType';
import ServiceDate from './Fieldsets/ServiceDate';
import AddressTemplate from './Fieldsets/AddressTemplate'
import NumberOfSites from './Fieldsets/NumberOfSites';
import AddlLocation from './Fieldsets/AddlLocation';
import OtherNotes from './Fieldsets/OtherNotes'
import NumberOfRooms from './Fieldsets/NumberOfRooms';


const Burlington = () => {
  /**
   *     State
   *    Getters
   *      and
   *    Setters
   */
  const [complete, setComplete] = React.useState(false)
  const [addlLocationNotes, setAddlLocationNotes] = React.useState('')
  const [otherNotes, setOtherNotes] = React.useState('')
  const [dateWindow, setDateWindow] = React.useState('')
  const [siteCount, setSiteCount] = React.useState(2)
  const [roomCount, setRoomCount] = React.useState(1)
  const [form, setForm] = React.useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Extension: '',
    Email: '',
    ServiceType: 'Moving',
    RepeatCustomer: false,
    MoveDate: '',
    Flexibility: null,
    Services: [],
    Notes: ''
  });


  /**
   * Synchronize site count state
   */
  React.useEffect(() => {
    if (form.ServiceType === 'LoadingOnly') {
      setSiteCount(1)
    } else {
      setSiteCount(2)
    }
  }, [form.ServiceType])


  /**
   *    Formatting and validation with debounce;
   *    sets "complete" state object to true if
   *    conditions are met
   */
  const debounceTime = 500 // ms before validation is triggered
  React.useEffect(() => {
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
        { // This trims off an extra digit
          // that otherwise can show up in some
          // cases
          ...form, PhoneNumber: form.PhoneNumber
            .replaceAll(/[^\d]/g, '')
            .substring(0, 10)
        })

      validateForm()

    }, debounceTime)

    return () => {
      clearTimeout(timerId)
    }
  }, [form])


  /**
   *    Rendered sites
   *    based on user selection
   */
  const renderSites = () => {
    // Builds an array to access .map
    // for simple rendering code
    const sites = []
    for (let i = 0; i < siteCount; i++) {
      sites[i] = i + 1;
    }

    return sites.map(site => {
      return (
        <AddressTemplate
          key={`address${site}`}
          form={form}
          handleFormChange={handleFormChange}
          siteNumber={site}
        />
      )
    })

  }


  /*
   *  Form Change
   *       and
   *    Form Submission
   *  functions
   * 
   */
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const date = Date.now()

    const to = 'code@zquint.xyz'
    const subject = `802 New Lead from ${form.FirstName} ${form.LastName} on ${date}`
    let mailBody
    for (const [key, value] of Object.entries(form)) {
      mailBody += `${key}: ${value}\n`
    }

    mail(to, subject, mailBody)
  }


  /**
   *    Render body
   */
  return (
    <>
      <Container
        title='Estimate Request Form'
        bgColor='rgba(72, 74, 68, 0.94)'
        lightText
      >
        <p>
          Request an estimate for moving service from Local Muscle
          in <strong>Burlington, VT</strong>.
        </p>
        <p>
          <strong>Estimated completion time: 10-15 minutes.</strong><br />
          Required fields marked with *
        </p>

        <div
          className="ui large form"
          style={{ maxWidth: '800px', margin: '3em auto 0 auto' }}
        >
          <form onSubmit={handleSubmit}>

            <Contact
              form={form}
              handleFormChange={handleFormChange}
              dark
            />

            <ServiceDate
              form={form}
              handleFormChange={handleFormChange}
              dateWindow={dateWindow}
              setDateWindow={setDateWindow}
              dark
            />

            <ServiceType
              form={form}
              setForm={setForm}
              dark
            />

            {(form.ServiceType === 'Moving') ?
              <NumberOfSites
                siteCount={siteCount}
                setSiteCount={setSiteCount}
                dark
              /> : null}

            {renderSites()}

            <AddlLocation
              addlLocationNotes={addlLocationNotes}
              setAddlLocationNotes={setAddlLocationNotes}
            />

            <NumberOfRooms
              roomCount={roomCount}
              setRoomCount={setRoomCount}
              dark
            />

            <OtherNotes
              otherNotes={otherNotes}
              setOtherNotes={setOtherNotes}
            />

            <button
              className={`ui ${(complete === true) ? 'blue' : 'grey'} button huge pop`}
              style={{ margin: '0.75em' }}
              disabled
            >
              Submit
            </button>

          </form>
        </div>
      </Container>


    </>
  )
}

export default Burlington