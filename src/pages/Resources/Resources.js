import './resources.css'
import React, { useState, Fragment } from 'react'
import Tabs from '../../components/Tabs'

const Resources = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      {/* PAGE HEADING */}
      <div
        className='landing picture' style={
          {
            backgroundImage: 'url(http://localhost:3000/images/truckStack.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '175px'
          }
        }
      >
        <div className='page'>
          <h1>Resources</h1><br />
          <p>Resources for general moving preparation and specific information about our services.</p>
        </div>
      </div>

      {/* CHECKLIST */}
      <div className='landing' style={{ backgroundColor: '#cbd1b6', paddingTop: '1em' }}>
        <div className='page'>

          <h1>Moving Checklist</h1>
          <ul className='checklist'>
            <li>
              All small and loose items are protected and boxed
            </li>
            <li>
              Boxes are labeled
            </li>
            <li>
              Pathways are clear, inside and outside all locations
            </li>
            <li>
              In Winter, your driveway, walkways, and roads are plowed and salted/sanded
            </li>
            <li>
              Items in drawers and on shelves are be cleared
            </li>
            <li>
              Sites are clean, sanitary, and safe
            </li>
          </ul>

          <a href='#'>
            Longer, printable version
          </a>

        </div>
      </div>

      {/* SERVICES */}
      <div className='landing' style={{ backgroundColor: 'rgb(157, 184, 155)', paddingTop: '1em' }}>
        <div className='page'>

          <div className='ui stackable grid'>

            <div className='five wide column'>
              <h1>Services Offered</h1><br />
              <p>We're insured and FMCSA registered.</p>
            </div>

            <div className='eleven wide column'>

              <Tabs defaultTab="Moving">
                <Fragment title="Moving">
                  <p>
                    We'll move you from your current location to your next.
                    We have years of experience providing excellent service.
                  </p>
                  <ul>
                    <li>
                      Trustworthiness is among the most important traits we look for
                      when hiring new movers.We understand the sensitivity involved
                      with allowing us into your home and handling your posessions.
                      We train our team to high standards of careful handling as well
                      as courteous conduct.
                    </li>
                  </ul>
                </Fragment>
                <Fragment title="Rearrangement">
                  <p>
                    We can help move your furniture out of one room, or all your
                    rooms, so you can get your floors redone.And then we'll put it back.
                  </p>
                </Fragment>
                <Fragment title="Hoisting">
                  <p>
                    In many cases, we'll be able to get large items into the second
                    floor of your home over the side of your deck if your staircase
                    is too narrow.
                  </p>
                </Fragment>
                <Fragment title="Heavy Items">
                  <p>
                    Local Muscle has loads of experience moving items
                    up to 500 pounds, including most pianos.Just ask!
                  </p>
                </Fragment>
              </Tabs>

            </div>
          </div>
        </div>
      </div>

      {/* POLICIES and CONTRACTS */}
      <div className='landing' style={{ backgroundColor: 'rgb(210, 239, 223)', paddingTop: '1em' }}>
        <div className='page'>

          <div className='ui stackable grid'>

            <div className='five wide column'>

              <h1>Policies and Contracts</h1>
              <p>
                We've outlined our Terms of Service and Full Value Replacement Coverage in simple
                language for quick reference. For interstate moves, the FMCSA also provides
                brochures regarding your legal rights.
              </p>

            </div>
            <div className='five wide column'>

              <h2>In state</h2>
              <ul>
                <li>
                  <a
                    target='_blank' rel='noopener noreferrer'
                    href='http://localhost:3000/documents/LocalMuscle_Terms_and_Conditions_Dec2021.pdf'
                  >
                    In State Terms and Conditions Outline
                  </a>
                </li>
                <li>
                  <a href='#'>In State Full Value Replacement Coverage</a>
                </li>
              </ul>
            </div>

            <div className='five wide column'>
              <h2>For interstate</h2>
              <ul>
                <li>
                  <a href='#'>Interstate Terms and Conditions</a>
                </li>
                <li>
                  <a href='#'>Interstate Full Value Replacement Coverage</a>
                </li>
                <li>
                  <a
                    target='_blank' rel='noopener noreferrer'
                    href='https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/docs/Ready_To_Move_Brochure_2006.pdf'
                  >
                    "Ready to Move"
                  </a> [External link]
                </li>
                <li>
                  <a
                    target='_blank' rel='noopener noreferrer'
                    href='https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/docs/Rights-and-Responsibilities-2013.pdf'
                  >
                    "Your Rights and Responsiblities"
                  </a> [External link]
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Resources
