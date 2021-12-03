import './resources.css'
import React, { Fragment } from 'react'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Tabs from '../../components/Tabs'
import ContainerSplitLeft from '../../components/ContainerSplitLeft'
import Columns from '../../components/Columns'
import Checklist from '../../components/Checklist'
import Focus from '../../components/Focus'
import Link from '../../Link'

const Resources = () => {
  return (
    <>

      <Banner
        title="Resources"
        imageUrl="/images/truckStack.jpeg"
        height="175px"
      >
        <p>Resources for general moving preparation and specific information about our services.</p>
      </Banner>


      <Container
        title="Moving Checklist"
        bgColor='#cbd1b6'
      >
        <Checklist>
          <>All small and loose items are protected and boxed</>
          <>Boxes are labeled</>
          <>Pathways are clear, inside and outside all locations</>
          <>In Winter, your driveway, walkways, and roads are plowed and salted/sanded</>
          <>Items in drawers and on shelves are be cleared</>
          <>Sites are clean, sanitary, and safe</>
        </Checklist>
        <a href='#'>
          Longer, printable version
        </a>
      </Container>


      <ContainerSplitLeft
        title="Services Offered"
        bgColor='rgb(157, 184, 155)'
      >
        <p>
          We're insured and FMCSA registered.
        </p>
        <Tabs defaultTab="Moving">
          <tab title="Moving">
            <>
              We'll move you from your current location to your next.
              We have years of experience providing excellent service.
            </>
            <ul>
              <li>
                Trustworthiness is among the most important traits we look for
                when hiring new movers.We understand the sensitivity involved
                with allowing us into your home and handling your posessions.
                We train our team to high standards of careful handling as well
                as courteous conduct.
              </li>
            </ul>
          </tab>
          <tab title="Rearrangement">
            <p>
              We can help move your furniture out of one room, or all your
              rooms, so you can get your floors redone.And then we'll put it back.
            </p>
          </tab>
          <tab title="Hoisting">
            <p>
              In many cases, we'll be able to get large items into the second
              floor of your home over the side of your deck if your staircase
              is too narrow.
            </p>
          </tab>
          <tab title="Heavy Items">
            <p>
              Local Muscle has loads of experience moving items
              up to 500 pounds, including most pianos. Just ask!
            </p>
          </tab>
        </Tabs>
      </ContainerSplitLeft>


      <ContainerSplitLeft
        title="Policies and Contracts"
        bgColor='rgb(210, 239, 223)'
      >
        <>
          We've outlined our Terms of Service and Full Value Replacement Coverage in simple
          language for quick reference. For interstate moves, the FMCSA also provides
          brochures regarding your legal rights.
        </>
        <Columns>
          <column>
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
          </column>
          <column>
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
          </column>
        </Columns>

      </ContainerSplitLeft>

      <Focus bgColor="rgb(105, 171, 105)">
        <h1>Start your move with us</h1>
        <p>
          The first step is filling out our estimate form
        </p>
        <br />
        <Link href="#">
          <button className='ui blue button huge'>
            Get a free estimate
          </button>
        </Link>
      </Focus>

    </>
  )
}

export default Resources
