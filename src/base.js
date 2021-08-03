import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaaNa3a2K8B-uUMqiSROMiE4URK_xC-4I",
    authDomain: "recettes-app-aaa8c.firebaseapp.com",
    databaseURL: "https://recettes-app-aaa8c-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
