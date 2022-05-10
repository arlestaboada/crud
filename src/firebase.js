import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9bPUQxnw8mOc_K3OkTCu8OFQrCSjDGRg",
    authDomain: "crud-322ac.firebaseapp.com",
    projectId: "crud-322ac",
    storageBucket: "crud-322ac.appspot.com",
    messagingSenderId: "122192098756",
    appId: "1:122192098756:web:6875a1b00cd6ce01bfa091"
  }
  
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig)
