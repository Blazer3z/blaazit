import firebase from "firebase"
import dotenv from "dotenv"

dotenv.config()

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
})

const auth = firebaseApp.auth()
const db = firebaseApp.firestore()
const gAuthProvider = firebaseApp.auth.GoogleAuthProvider

export { auth, db, gAuthProvider }
