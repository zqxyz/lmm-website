// TODO use proper firebase import
import axios from "axios";

export default function (to, subject, message) {
  axios.post('https://us-central1-localmuscledemo.cloudfunctions.net/sendEmail', {
    to,
    subject,
    message
  })
    .then((response) => {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
}