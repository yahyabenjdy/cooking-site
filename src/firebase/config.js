import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgq4L5tztkEatHPN97VVYJlvHDUKvFlMk",
  authDomain: "cooking-site-92ae4.firebaseapp.com",
  projectId: "cooking-site-92ae4",
  storageBucket: "cooking-site-92ae4.appspot.com",
  messagingSenderId: "954098614532",
  appId: "1:954098614532:web:2300961d510bef4ae19051",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
