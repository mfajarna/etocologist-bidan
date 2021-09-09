import * as firebase from "firebase";

const config ={
  apiKey: "AIzaSyBMQ3UapxcMkna9WLPezxAN9y6Bhv9vz_U",
  authDomain: "etocologist.firebaseapp.com",
  databaseURL: "https://etocologist-default-rtdb.firebaseio.com",
  projectId: "etocologist",
  storageBucket: "etocologist.appspot.com",
  messagingSenderId: "486714960729",
  appId: "1:486714960729:web:d6e7ae43733ebadfe73a48"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
