import React, { Fragment } from 'react'
import Tabs from '../../components/Tabs'

const About = () => {
  return (
    <>
      <div className="page">
        <Tabs defaultTab="Moving">
          <Fragment title="Moving">
            <p>
              We'll move you from your current location to your next.
              We have years of experience providing excellent service.
            </p>
            <ul>
              <li>
                Trustworthiness is among the most important traits we look for
                when hiring new movers. We understand the sensitivity involved
                with allowing us into your home and handling your posessions.
                We train our team to high standards of careful handling as well
                as courteous conduct.
              </li>
            </ul>
          </Fragment>
          <Fragment title="Rearranging">
            <p>
              Rearranging stuff text goes here
            </p>
          </Fragment>
        </Tabs>
      </div>
    </>
  )
}

export default About