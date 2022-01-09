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
import RoomTemplate from './Fieldsets/RoomTemplate';


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
  const [inventory, setInventory] = React.useState({})
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
   *    Synchronize site count state
   */
  React.useEffect(() => {
    if (form.ServiceType === 'LoadingOnly') {
      setSiteCount(1)
    } else {
      setSiteCount(2)
    }
  }, [form.ServiceType])


  /**
   *    Debounce wrapped functions;
   *    FORMATTING and VALIDATION:
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
   *    Render sites fieldsets
   *    based on specified count
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
          siteCount={siteCount}
        />
      )
    })
  }


  /**
  *    Render room fieldsets
  *    based on specified count
  */
  const renderRooms = () => {
    // Builds an array to access .map
    // for simple rendering code
    const rooms = []
    for (let i = 0; i < roomCount; i++) {
      rooms[i] = i + 1;
    }
    return rooms.map(room => {
      return (
        <RoomTemplate
          key={`room${room}`}
          inventory={inventory}
          setInventory={setInventory}
          roomNumber={room}
        />
      )
    })
  }


  /*
   *    Form change handler for input states
   */
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setForm(prevState => ({ ...prevState, [name]: value }))
  }


  /**
   *    Form submission
   *       using mail() api,
   *         plus
   *     string formatting functions
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    // Timestamp + uniqid clone from PHP (for consistent Invoice ID)
    const now = new Date()
    const timestamp =
      `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ` +
      `${now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})}`
    const uniqid_likePhp = (prefix = "", random = false) => {
      const sec = Date.now() * 1000 + Math.random() * 1000;
      const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
      return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}` : ""}`;
    };

    // Combine inventories into a string for submission to mail()
    const inventoryString = () => {
      let str = ''
      for (const key in inventory) {
        str += inventory[key] + "\n\n"
      }
      setForm({ ...form, Inventory: str })
    }

    // Build string based on number of sites
    const siteString = () => {
      let str = ''
      for (let i = 0; i < siteCount; i++) {
        str += form[`Site${i+1}Street`] + '\n'
        str += form[`Site${i+1}City`] + ', '
        str += form[`Site${i+1}State`] + '\xa0\xa0'
        str += form[`Site${i+1}Zip`]
        if (i !== (siteCount - 1)) str += '\n\n'
      }
      return str
    }

    // Submission
    const to = 'code@zquint.xyz'
    const subject = `802 REF: ${form.LastName}, ${form.FirstName} (${timestamp})`

    const mailBody = // ACTUAL REF EMAIL FORMAT AND CONTENTS
      `Invoice ID: ${uniqid_likePhp(form.LastName)}\n\n` +
      // Contact info
      `Name: ${form.LastName}, ${form.FirstName}\n` +
      `Phone: ${form.PhoneNumber}\n` +
      `${(form.Extension) ? `Extension: ${form.Extension}\n` : ''}` +
      `Email: ${form.Email}\n` +
      `Returning customer: ${form.RepeatCustomer}\n` +
      '\n' +
      // Service
      `Preferred date: ${form.MoveDate}\n` +
      `Flexibility: ${dateWindow}\n` +
      `Service type: ${form.ServiceType}\n` +
      `${(otherNotes !== '') ? `Customer notes: ${otherNotes}\n` : ``}` +
      '\n' +
      // Locations
      'Locations:\n-----------------\n' +
      siteString() + '\n' +
      // Inventory
      '\n\nInventory:\n-----------------\n' +
      inventoryString()

    mail(to, subject, mailBody)
  }


  /**
   *    Render body
   */
  return (
    <>
      <Container
        title='Estimate Request Form'
        bgColor='rgba(72, 74, 68, 0.8)'
        lightText
      >
        <p>
          Request an estimate for moving service from Local Muscle
          in <strong>Burlington, VT</strong>.
        </p>
        <p>
          <strong>Estimated completion time: 10-15
            minutes.</strong> {/* <a href="#">Clear and reset form.</a> */}
          <br />Required fields marked with *
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

            {(siteCount === 1)
              ? <h1>Location</h1>
              : <h1>Locations</h1>
            }
            <div className="ui segment fieldsetGroup">
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
            </div>

            <h1>Inventory</h1>
            <p>
              Please note: Gathering inventory details is the most involved
              part of this process, and the more specific detail you're
              able to provide us, the more accurate our estimate will be.
              We wish that providing a good estimate was as simple as
              getting a general idea of our customers' needs, but experience
              has taught us that specifics can vary a great deal even
              between "typical" moves of the same type.
            </p>
            <div className="ui segment fieldsetGroup">
              <NumberOfRooms
                roomCount={roomCount}
                setRoomCount={setRoomCount}
                dark
              />
              {renderRooms()}
            </div>

            <OtherNotes
              otherNotes={otherNotes}
              setOtherNotes={setOtherNotes}
            />

            <p>
              Thanks for taking a moment to fill out our estimate form!
            </p>

            <button
              className={`ui ${(complete === true) ? 'blue' : 'grey'} button huge pop`}
              style={{ margin: '0.75em' }}
              disabled
            >
              Submit
            </button>

          </form>
        </div>
      </Container >


    </>
  )
}

export default Burlington