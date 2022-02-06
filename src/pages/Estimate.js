import React from 'react';
import Container from '../components/Container';
import Portland from './EstimateForm/Portland';
import Burlington from './EstimateForm/Burlington'
import Submitted from './EstimateForm/Submitted';

const Estimate = () => {
  const [branch, setBranch] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)


  // Title for this page
  React.useEffect(() => {
    document.title = "Local Muscle - Get a free moving estimate"
    return () => document.title = "Local Muscle Movers"
  }, [])


  //  Instructions to select branch form
  const chooseBranchPrompt = () => {
    return (
      <Container
        title='Choose a branch ⤴'
        bgColor='#dddfda'
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

  //  Render component based on input
  const renderBranchForm = () => {
    if (branch === '') return chooseBranchPrompt()
    if (branch === 'portland') return <Portland setSubmitted={setSubmitted} />
    if (branch === 'burlington') return <Burlington setSubmitted={setSubmitted} />
  }


  //  Render body
  return (
    (submitted
      ? <Submitted
        branch={branch}
      />
      :
      <>
        <Container
          bgColor='#353532'
        >
          <center>
            <button
              className={`ui ${(branch === 'portland') ? 'inverted' : 'blue'} button huge pop`}
              onClick={() => { setBranch('portland') }}
              style={{ marginBottom: '0' }}
            >
              Portland, ME {(branch === 'portland') ? '✓' : ''}
            </button>
            <button
              className={`ui ${(branch === 'burlington') ? 'inverted' : 'blue'} button huge pop`}
              onClick={() => { setBranch('burlington') }}
              style={{ marginBottom: '0' }}
            >
              Burlington, VT {(branch === 'burlington') ? '✓' : ''}
            </button>
          </center>
        </Container>

        {renderBranchForm()}
      </>)
  )
}

export default Estimate