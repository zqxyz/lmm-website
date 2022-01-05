import React from 'react'
import Container from '../components/Container'
import ContainerSplitRight from '../components/ContainerSplitRight'
import Columns from '../components/Columns'
import Checklist from '../components/Checklist'

const Resources = () => {
  return (
    <>

      <Container
        title="Resources"
        bgColor='#588157'
        lightText
      >
        <p>
          Resources for customers
        </p>
      </Container>

      <ContainerSplitRight
        title='Moving Checklist'
        bgColor='#3a5a40'
        lightText
      >
        <p>
          Quick reference for steps to ensure your move goes off without a hitch
        </p>
        <Checklist>
          <>All small and loose items are protected and boxed</>
          <>A 'no pack' zone is designated for essentials (phone chargers, medicine, keys)</>
          <>Boxes are sealed and labeled</>
          <>Items in drawers and on shelves are cleared</>
          <>Appliances are detached/unhooked</>
          <>Gas/oil is removed from equipment</>
          <>Flammable substances, ammunitions, explosives, and alcohol, are handled separately</>
          <>Parking arrangements are secured</>
          <>Property management/neighbors are aware of your move</>
          <>If applicable, an elevator is explicitly reserved</>
          <>Confirm no other work crews are scheduled at the same time as us</>
          <>Pathways are clear, inside and outside load and unload sites</>
          <>Sites are clean, sanitary, and safe</>
          <>In the Winter, your driveway, walkways, and roads are plowed and salted/sanded</>
        </Checklist>
        <a
          target='_blank' rel='noopener noreferrer'
          href='/documents/Local_Muscle_moving-checklist.pdf'
        >
          Printable checklist
        </a>
      </ContainerSplitRight>

      <ContainerSplitRight
        title='Policies and Contracts'
        bgColor='#344e41'
        lightText
      >
        <>
          We've outlined our Terms of Service and Full Value Replacement Coverage in simple
          language for quick reference. For interstate moves, the FMCSA also provides
          brochures regarding your legal rights.
        </>
        <Columns>
          <column>
            <h2>Local (in-state)</h2>
            <ul>
              <li>
                <a
                  target='_blank' rel='noopener noreferrer'
                  href='/documents/Local_Muscle_In-State_Terms_and_Conditions-Dec2021.pdf'
                >
                  In State Terms and Conditions Outline
                </a>
              </li>
              <li>
                <a
                  target='_blank' rel='noopener noreferrer'
                  href='/documents/Local_Muscle_In-State_Full_Valuation_Coverage__Liability-Dec2021.pdf'
                >
                  In State Full Value Replacement Coverage
                </a>
              </li>
            </ul>
          </column>
          <column>
            <h2>Interstate</h2>
            <ul>
              <li>
                <a
                  target='_blank' rel='noopener noreferrer'
                  href='/documents/Local_Muscle_Interstate_contract-Dec2021.pdf'
                >
                  Interstate Carrier Liability Agreement
                </a>
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
            We bill differently for interstate moves, as mandated by law. We will determine a flat rate
            and provide a quote, rather than create an hourly-based estimate.
          </column>
        </Columns>

      </ContainerSplitRight>


    </>
  )
}

export default Resources
