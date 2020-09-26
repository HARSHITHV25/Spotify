// npm install -g firebase-tools
// firebase login
// firebase init
// {
//     "hosting": {
//       "site": "spotify-ac463",
//       "public": "public",
//       ...
//     }
//   }
//   firebase deploy --only hosting:spotify-ac463

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBS_NraS8toSN0lJ9FNwt-be8N4Or_GD7g",
  authDomain: "whatsapp-55.firebaseapp.com",
  databaseURL: "https://whatsapp-55.firebaseio.com",
  projectId: "whatsapp-55",
  storageBucket: "whatsapp-55.appspot.com",
  messagingSenderId: "774767917651",
  appId: "1:774767917651:web:06da9424dbf54f69b5a4a6",
  measurementId: "G-HXJS28BYDD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
