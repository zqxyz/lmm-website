import React from 'react';
import Container from '../components/Container';
import Portland from './EstimateForm/Portland';
import Burlington from './EstimateForm/Burlington'
import Banner from '../components/Banner'

const Estimate = () => {
  const [branch, setBranch] = React.useState('')

  const chooseBranchPrompt = () => {
    return (
      <Container
        title='Choose a branch'
        bgColor='#354f3d'
        lightText
      >
        <p>
            Choose the branch you'd like to contact using the options above.
        </p>
        <p>
          If you are unsure which office to contact, select the office closest to your origin address.
        </p>
      </Container>
    )
  }

  const renderBranchForm = () => {
    if (branch === '') return chooseBranchPrompt()
    if (branch === 'portland') return <Portland />
    if (branch === 'burlington') return <><Burlington /></>
  }

  return (
    <>
      <Container
        bgColor='rgb(111, 159, 107)'
      >
        <center>
          <button
            className={`ui ${(branch === 'portland') ? 'blue' : ''} button huge pop`}
            onClick={() => { setBranch('portland') }}
            style={{ marginBottom: '0' }}
          >
            Portland, ME {(branch === 'portland') ? '✔' : ''}
          </button>
          <button
            className={`ui ${(branch === 'burlington') ? 'blue' : ''} button huge pop`}
            onClick={() => { setBranch('burlington') }}
            style={{ marginBottom: '0' }}
          >
            Burlington, VT {(branch === 'burlington') ? '✔' : ''}
          </button>
        </center>
      </Container>

      {renderBranchForm()}
    </>
  )
}

export default Estimate