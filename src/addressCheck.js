import axios from "axios";

const testForm = {
  OriginStreet: "18 munjoy st",
  OriginCity: 'Portland',
  OriginState: 'ME',
  DestinationStreet: '10 Moulton street',
  DestinationCity: 'Portland',
  DestinationState: 'ME',
};

export default function checkAddress(form) {
  let matchStr = '';
  const PROTOCOL = 'https://'
  const URL = 'us-central1-localmuscledemo.cloudfunctions.net';
  const ENDPOINT = '/addressCheck'

  const params = { ...form };

  const headers = {
    headers: { 'Access-Control-Allow-Origin': `${PROTOCOL}${URL}` }
  };

  axios.post(PROTOCOL + URL + ENDPOINT, params, headers)
    .then((response) => {
      matchStr = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

    return matchStr;
}