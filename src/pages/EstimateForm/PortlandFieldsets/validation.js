import React from 'react';

const fixServiceTypeInState = (serviceType) => {
  if (serviceType === 'Moving') {
    setForm({
      ...form,
      DestinationStreet: '',
      DestinationCity: '',
      DestinationState: 'ME',
      DestinationZip: ''
    })
  }
  else if (serviceType === 'LoadingOnly') {
    let tempState = { ...form }
    delete tempState.DestinationStreet
    delete tempState.DestinationCity
    delete tempState.DestinationState
    delete tempState.DestinationZip
    setForm({ ...tempState })
  }
}

const validation = () => {
  return (
    <>
      Okay
    </>
  )
}

export default validation