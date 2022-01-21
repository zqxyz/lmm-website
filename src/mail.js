import axios from "axios";

export default function mail (to, subject, message) {
  const PROTOCOL = 'https://'
  const URL = 'us-central1-localmuscledemo.cloudfunctions.net';
  const ENDPOINT = '/sendEmail'

  const params = {
    to,
    subject,
    message
  };

  const headers = {
    headers: {'Access-Control-Allow-Origin': `${PROTOCOL}${URL}`}
  };

  axios.post(PROTOCOL+URL+ENDPOINT, params, headers)
    .then((response) => {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}