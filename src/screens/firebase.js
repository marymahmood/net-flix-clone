import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB0Ygsz3XXmWIcC_z68GDRD-1AASdklFO0",
  authDomain: "net-clone-fd.firebaseapp.com",
  projectId: "net-clone-fd",
  storageBucket: "net-clone-fd.appspot.com",
  messagingSenderId: "693745807359",
  appId: "1:693745807359:web:80b3d78418dfa17d9801ca"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;