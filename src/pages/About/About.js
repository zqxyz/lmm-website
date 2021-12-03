import React, { Fragment } from 'react'
import Tabs from '../../components/Tabs'
import Container from '../../components/Container'
import ContainerSplitLeft from '../../components/ContainerSplitLeft'
import Checklist from '../../components/Checklist'
import Banner from '../../components/Banner'
import Columns from '../../components/Columns'
import Focus from '../../components/Focus'


const About = () => {
  return (
    <>

      <Banner
        title="Banner example"
        imageUrl="/images/truckStack.jpeg"
        height="275px"
      >
        <p>
          Text inside a &lt;p&gt; tag is easy to see on an image
          because it's given a white background when placed inside
          the Banner component.
        </p>
      </Banner>

      <Focus>
      This page shows off the Components available to you. All the background
      colors are easily specified. Or, as in the case of this section, can be
      undefined and will default to this color.
    </Focus>

      <ContainerSplitLeft
        title="Tabs example"
        bgColor="#4d8c57"
      >
        <>
          This is a ContainerSplitLeft component
        </>
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
      </ContainerSplitLeft>

      <Container
        title="Checklist example"
      >
        <Checklist>
          <>Item one</>
          <>Item two</>
          <>Don't forget to remember all that stuff you forgot</>
          <><span style={{ color: 'transparent' }}>.</span></>
          <><span style={{ color: 'transparent' }}>.</span></>
          <>Final two</>
        </Checklist>
      </Container>

      <Container
        title="Dark container and Columns example"
        bgColor="dark"
      >
        <Columns style={{marginTop: '2em'}}>
          <column>
            <h2>You can escape the framework and use whatever JSX (~HTML) you want</h2>
            <p>
              Components make your life easier, but are not meant to be limiting. Styles
              can be applied to &lt;Columns&gt; and individual &lt;column&gt; elements.
            </p>
          </column>
          <column style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '20px',
            padding: '1.5'
          }}
          >
            This column is using custom inline styles:
            <pre style={{ color: 'black' }}>

              &lt;column style=&#123;&#123;<br />
                &nbsp;backgroundColor: 'white',<br />
                &nbsp;color: 'black',<br />
                &nbsp;borderRadius: '20px',<br />
                &nbsp;padding: '1.5em'<br />
                &#125;&#125;<br />
              &gt;
            </pre>
          </column>
          <column style={{ textAlign: 'right' }}>
            <h2>Columns stack when squished</h2>
            <p>
              On a mobile phone, for example
            </p>
            <button className="ui button orange">
              Third Column button
            </button>
          </column>
        </Columns>
      </Container>

    </>
  )
}

export default About