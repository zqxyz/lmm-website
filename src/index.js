import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyAmtAEf_-9xWSMpWscDHtaKYmcYvxhVPbw',
  authDomain: 'localmuscle-demo.firebaseapp.com',
  projectId: 'localmuscle-demo',
  storageBucket: 'localmuscle-demo.appspot.com',
  messagingSenderId: '469866796136',
  appId: '1:469866796136:web:233c2d6c87d771c5a617dd'
}
const app = initializeApp(firebaseConfig) // eslint-disable-line

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
