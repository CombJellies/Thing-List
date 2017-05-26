import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCGOtc1cPmUU4fE4ZxSgzjRgREuRdAzbb0",
  authDomain: "thing-list-c7e64.firebaseapp.com",
  databaseURL: "https://thing-list-c7e64.firebaseio.com",
  projectId: "thing-list-c7e64",
  storageBucket: "thing-list-c7e64.appspot.com",
  messagingSenderId: "1043151278455"
})

const db = database(app)
const base = Rebase.createClass(db)

export default base
