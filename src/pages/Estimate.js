import React from 'react';
import Container from '../components/Container';
import Portland from './EstimateForm/Portland';

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
        <p>
          If you are moving from Portland to Burlington, or Burlington to Portland,
          choose the branch closer to your origin location.
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
      <Container
        bgColor='#64866d'
      >
        <center>
          <button
            className={`ui ${(branch === 'portland') ? 'blue' : 'grey'} button huge`}
            onClick={() => { setBranch('portland') }}
          >
            Portland, ME {(branch === 'portland') ? '✔' : ''}
          </button>
          <button
            className={`ui ${(branch === 'burlington') ? 'blue' : 'grey'} button huge`}
            onClick={() => { setBranch('burlington') }}
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