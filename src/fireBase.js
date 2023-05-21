import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDu1yCt0dhwVhQ5u6WygwOfYbg3DIKsUwM",
  authDomain: "disneyclone-b990f.firebaseapp.com",
  projectId: "disneyclone-b990f",
  storageBucket: "disneyclone-b990f.appspot.com",
  messagingSenderId: "882945865831",
  appId: "1:882945865831:web:9cbcdd28583cb48aa9fcc2",
  measurementId: "G-QQCS6F252C"
}; 

firebase.initializeApp(firebaseConfig); 

const db =firebase.firestore()
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

export default db;