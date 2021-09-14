import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// eslint-disable-next-line
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAXftvRyAUtwWykorMTKLdypPViGtd9WwY",
  authDomain: "netflix-63951.firebaseapp.com",
  projectId: "netflix-63951",
  storageBucket: "netflix-63951.appspot.com",
  messagingSenderId: "258296392152",
  appId: "1:258296392152:web:5b4e1a68a04e546301aaad",
  measurementId: "G-3LYKG45TYL",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
