import React from 'react'
import axios from 'axios';
import Container from '../components/Container'
import Origin from './EstimateForm/Fieldsets/Origin';

const Test = () => {
  const [form, setForm] = React.useState({
    OriginStreet: "",
    OriginCity: '',
    OriginState: 'Maine',
    DestinationStreet: '',
    DestinationCity: '',
    DestinationState: '',
  });
  const [matchStr, setMatchStr] = React.useState('');

  function checkAdd(form) {
    const PROTOCOL = 'https://'
    const URL = 'us-central1-localmuscledemo.cloudfunctions.net';
    const ENDPOINT = '/addressCheck'
  
    const params = { ...form };
  
    const headers = {
      headers: { 'Access-Control-Allow-Origin': `${PROTOCOL}${URL}` }
    };
  
    axios.post(PROTOCOL + URL + ENDPOINT, params, headers)
      .then((response) => {
        setMatchStr(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(()=>{
   setMatchStr(checkAdd(form))
  }, [form]);

  /*
   *    Form change handler for input states
   */
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  const [originFloors, setOriginFloors] = React.useState({
    basement: false,
    first: false,
    second: false,
    third: false,
    fourthPlus: false,
    elevator: false
  })
  const [destinationFloors, setDestinationFloors] = React.useState({
    basement: false,
    first: false,
    second: false,
    third: false,
    fourthPlus: false,
    elevator: false
  })

  return (
    <>

      <Container
        title='Cloud function test page'
        bgColor='#ffffff'
      >
        <p>Local cloud function emulation frontend</p>
      </Container>

      <Container
        bgColor='black'
        lightText
      >

        <div
          class="ui large form"
          style={{ maxWidth: '800px', margin: '3em auto 0 auto' }}
        >
          <Origin
            form={form}
            handleFormChange={handleFormChange}
            originFloors={originFloors}
            setOriginFloors={setOriginFloors}
          />
        </div>

        <p>
          Match string: {matchStr}
        </p>

      </Container>

    </>
  )
}

export default Test
