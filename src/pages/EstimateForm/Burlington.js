import React from 'react';
import mail from '../../mail';
import Container from '../../components/Container';
import Contact from './BurlingtonFieldsets/Contact';
import ServiceType from './BurlingtonFieldsets/ServiceType';


const Burlington = () => {
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

  const [complete, setComplete] = React.useState(false)

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
    mail('code@zquint.xyz',
      '802 REF: test submission',
      form
    )
  }

  return (
    <>
      <Container
        title='Estimate Request Form'
        bgColor='rgb(100, 94, 87)'
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

          </form>
        </div>
      </Container>


    </>
  )
}

export default Burlington