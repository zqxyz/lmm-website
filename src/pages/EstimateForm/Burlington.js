import React from 'react';
import mail from '../../mail';
import Container from '../../components/Container';
import Contact from './BurlingtonFieldsets/Contact';
import ServiceType from './BurlingtonFieldsets/ServiceType';


const Burlington = () => {
  const debounceTime = 500 // milliseconds

  const [form, setForm] = React.useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Phone2: '',
    ServiceType: 'Moving',
    RepeatCustomer: false,
    MoveDate: '',
    Flexibility: null,
    Services: [],
    Notes: ''
  });

  /**
   * Formatting and validation with debounce,
   * sets "complete" state object to true if
   * conditions are met
   */
  React.useEffect(() => {
    const validateForm = () => {
      const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      if (form.FirstName !== ''
        && form.LastName !== ''
        && form.Phone !== ''
        && form.Email !== '') {
        setComplete(emailRegex.test(form.Email))
      } else { setComplete(false) }
    }
    const timerId = setTimeout(() => {
      setForm(
        {
          ...form, 'Phone': form.Phone
            .replaceAll(/[^\d]/g, '')
            .substring(0, 10)
        })
      validateForm()
    }, debounceTime)

    return () => {
      clearTimeout(timerId)
    }
  }, [form])

  const [complete, setComplete] = React.useState(false)

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

  return (
    <>
      <Container
        title='Estimate Request Form'
        bgColor='rgba(62, 61, 60, 0.94)'
        lightText
      >
        <p>
          Request an estimate for moving service from Local Muscle
          in <strong>Burlington, VT</strong>
        </p>
        <p>
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
            />

            <ServiceType
              form={form}
              setForm={setForm}
            />

            <button
              className={`ui ${(complete === true) ? 'blue' : 'grey'} button huge pop`}
              style={{ margin: '0.75em' }}
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