import React from 'react';
import Container from '../components/Container';
import Portland from './EstimateForm/Portland';
import Banner from '../components/Banner'

const Estimate = () => {
  const [branch, setBranch] = React.useState('')

  const chooseBranchPrompt = () => {
    return (
      <Container
        title='Choose a branch'
        bgColor='dark'
      >
        <p>
            Choose the branch you'd like to contact using the options above.
        </p>
      </Container>
    )
  }

  const renderBranchForm = () => {
    if (branch === '') return chooseBranchPrompt()
    if (branch === 'portland') return <Portland />
    if (branch === 'burlington') return <>burlington goes here</>
  }

  return (
    <>
      <Banner
        imageUrl='/images/geo.jpg'
      >
        <center>
          <button
            className={`ui ${(branch === 'portland') ? 'blue' : ''} button huge pop`}
            onClick={() => { setBranch('portland') }}
            style={{ marginTop: '1em' }}
          >
            Portland, ME {(branch === 'portland') ? '✔' : ''}
          </button>
          <button
            className={`ui ${(branch === 'burlington') ? 'blue' : ''} button huge pop`}
            onClick={() => { setBranch('burlington') }}
            style={{ marginTop: '1em' }}
          >
            Burlington, VT {(branch === 'burlington') ? '✔' : ''}
          </button>
        </center>
      </Banner>

      {renderBranchForm()}
    </>
  )
}

export default Estimate