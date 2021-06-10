import firebase from "firebase";
const config = {
  apiKey: "AIzaSyD68XHfNwSFfPt1w3oI0MevfgyxHDJE8K4",
  authDomain: "softwareproject-60da1.firebaseapp.com",
  projectId: "softwareproject-60da1",
  storageBucket: "softwareproject-60da1.appspot.com",
  messagingSenderId: "890260791478",
  appId: "1:890260791478:web:f236f2f9f1f016f6b20617",
  measurementId: "G-V80QFS0CEC",
};
firebase.initializeApp(config);
firebase.analytics();
export default firebase;
