import React from 'react'
import ContainerSplitLeft from '../../components/ContainerSplitLeft'
import Tabs from '../../components/Tabs'
import Link from '../../Link'

const Services = () => {
  return (

    <ContainerSplitLeft
      title='Services Offered'
      bgColor='rgb(157, 184, 155)'
    >

      <p>
        We're insured and FMCSA registered.
      </p>

      <Tabs defaultTab='Moving'>

        <tab title='Moving'>
          <h2>
            Moving doesn't have to be difficult
          </h2>
          <p>
            We'll move you from your current location to your next. Residential
            or commercial, rain or shine. We've been doing it every day for
            years and we have all the tools for the job.
          </p>
          <p>
            Trustworthiness is among the most important traits we look for
            when hiring new movers. We understand the sensitivity involved
            with allowing us into your home and handling your posessions.
            We train our team to high standards of careful handling as well
            as courteous conduct.
          </p>
        </tab>

        <tab title='Rearrangement'>
          <h2>
            Making space for new carpets
          </h2>
          <p>
            We can move your furniture out of your room, or all your
            rooms, so you can get your floors redone. And then we'll put it
            back.
          </p>
        </tab>

        <tab title='Hoisting'>
          <h2>
            Narrow stairwell? Small doorways?
          </h2>
          <p>
            In many cases, we'll be able to get large items into the second
            floor of your home over the side of your deck or through a window.
            To determine if your hoist is within our scope of work,
            fill out our <Link href='/estimate'> estimate form</Link> and we'll
            work with you to get it done.
          </p>
        </tab>

        <tab title='Heavy Items'>
          <h2>This is where the "muscle" comes in</h2>
          <p>
            Local Muscle has loads of experience moving items up to 500 pounds,
            including pianos, gun safes, stone benches, and armoirs. To determine
            if your item is within our scope of work, fill out our
            <Link href='/estimate'>
              estimate form
            </Link>.
          </p>
        </tab>

      </Tabs>

    </ContainerSplitLeft>

  )
}

export default Services
