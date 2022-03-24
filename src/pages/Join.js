import React from 'react'
import Container from '../components/Container'
import ContainerSplitRight from '../components/ContainerSplitRight'
import Contact from './EstimateForm/Fieldsets/Contact'
import mail from '../mail'
import SectionHeader from './EstimateForm/Fieldsets/SectionHeader'

const Join = () => {
  const [submitted, setSubmitted] = React.useState(false)
  const [complete, setComplete] = React.useState(false)
  const [form, setForm] = React.useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Extension: '',
    Email: '',
    Branch: '',
    Info: ''
  })

  React.useEffect(() => {
    if (
      form.FirstName !== '' &&
      form.LastName !== '' &&
      form.PhoneNumber !== '' &&
      form.Email !== '' &&
      form.Branch !== '' &&
      form.Info !== ''
    ) {
      setComplete(true)
    } else {
      setComplete(false)
    }
  }, [form])

  /*
   *    Form change handler for input states
   */
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    fill="black" class="bi bi-card-text" viewBox="0 -1 16 16">
    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0
      0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5
      1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
    />
    <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3
      8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0
      1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
    />
  </svg>

  function submit() {
    let mailBody = "";
    for (const [k, v] of Object.entries(form)) {
      mailBody += `${k}: ${v}\n`
    }
    mail(
      'hiring@localmusclemovers.com',
      `[${form.Branch}] Crew application from ${form.FirstName} ${form.LastName}`,
      'Submitted from localmusclemovers.com: \n\n' +
      mailBody
    )
    setSubmitted(true)
  }

  // -------------------------------------------------------------------
  // -------------------------------------------------------------------

  return (
    (submitted)
      ? <><Container
        title="Submitted!"
        bgColor='#8a7c2f'
        lightText
      >
      </Container>
        <Container
          bgColor='rgb(220, 230, 223)'
        >
          <p>We'll follow up with you shortly.</p>
        </Container>
      </>
      :
      <>

        <Container
          title="Join Our Crew"
          bgColor='#475d4f'
          lightText
        >
          <p>
            Local Muscle is currently looking for able-bodied, reliable people
            to join us in moving
          </p>
        </Container>

        <Container
          bgColor='#d1e3d6'
        >
          <p>
            If you’re someone who enjoys physical work and problem-solving in a
            positive environment, we’d like to meet you. Base pay begins at $16/hour,
            with movers averaging around $21/hour with tips and additional
            incentives factored in. Eligible movers who complete our driving
            assessment receive additional pay on top of that. You can get things
            started by filling out the form below.
          </p>
          <p>
            You can also reach us by email at hiring@localmusclemovers.com.
          </p>
        </Container>


        <ContainerSplitRight
          title="Application Form"
          bgColor="#cac3b7"
          noshadow
        >
          <p className='lightText'>
            This is not a formal application, but it's a great way to
            start the process.
          </p>

          <form className="ui form" onSubmit={submit}>

            <Contact
              form={form}
              handleFormChange={handleFormChange}
            />

            <fieldset>
              <SectionHeader
                // icon={icon}
                title='Location'
              />
              <div className='fields' style={{ paddingBottom: '0.5em' }}>
                <div className="field">
                  <label>
                    Which branch are you interested in contacting?<br />
                  </label>
                </div>
                <div className="field">
                  <label htmlFor='branch207'>
                    Portland, ME
                  </label>
                  <input
                    required
                    type="radio"
                    id="branch207"
                    name="Branch"
                    rows='5'
                    value="207"
                    onChange={handleFormChange}
                  />
                </div>

                <div className="field">
                  <label htmlFor='branch802'>
                    Burlington, VT
                  </label>
                  <input
                    required
                    type="radio"
                    id="branch802"
                    name="Branch"
                    rows='5'
                    value="802"
                    onChange={handleFormChange}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <SectionHeader
                icon={icon}
                title='Tell us about yourself'
              />
              <div className='field' style={{ paddingBottom: '0.5em' }}>
                <label htmlFor='info'>
                  Your interests, work history, availability, anything you think is relevant:<br />
                </label>
                <textarea
                  required
                  id="info"
                  name="Info"
                  rows='5'
                  value={form.Info}
                  onChange={handleFormChange}
                />
              </div>
            </fieldset>

            {(complete === false) ? <p>Complete the required fields above to proceed</p> : ''}
            <button
              className={`ui ${(complete === true) ? 'blue' : 'grey'} button huge pop`}
              disabled={!complete}
            >
              {(!complete) ? 'Complete form before submitting' : 'Submit'}
            </button>
          </form>

        </ContainerSplitRight>


      </>
  )
}

export default Join
