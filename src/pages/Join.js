import React from 'react'
import Container from '../components/Container'
import ContainerSplitLeft from '../components/ContainerSplitLeft'

const Join = () => {
  return (
    <>

      <Container
        title="Join Our Crew"
        bgColor='rgb(31, 89, 70)'
        lightText
      >
        <p>
          Local Muscle is currently looking for able-bodied, reliable people
          to join us in moving
        </p>
      </Container>

      <Container
        bgColor='rgb(220, 230, 223)'
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


      <ContainerSplitLeft
        title="Application Form"
        bgColor="rgb(220, 230, 223)"
      >
        <p>
          This is not a formal application. As a matter of fact, This
          doesn't even do anything yet.
        </p>

        <form className="ui form">

          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input type="text" name="shipping[first-name]" placeholder="Horacio" />
              </div>
              <div className="field">
                <input type="text" name="shipping[last-name]" placeholder="Valdez" />
              </div>
            </div>
          </div>
          
          <div className="field">
            <label>Email</label>
              <div className="field">
                <input type="email" name="emailApplicant" placeholder="email@example.com" />
              </div>
          </div>

          <div className="ui blue button" tabIndex="0">Submit</div>
        </form>

      </ContainerSplitLeft>


    </>
  )
}

export default Join
