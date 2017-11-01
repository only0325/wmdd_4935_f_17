const firebase = require('firebase')

firebase.initializeApp({
  databaseURL: <your database url>
})

const dbRef = firebase.database().ref('people')