importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js");
// importScripts('/__/firebase/init.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyD68XHfNwSFfPt1w3oI0MevfgyxHDJE8K4",
  authDomain: "softwareproject-60da1.firebaseapp.com",
  projectId: "softwareproject-60da1",
  storageBucket: "softwareproject-60da1.appspot.com",
  messagingSenderId: "890260791478",
  appId: "1:890260791478:web:f236f2f9f1f016f6b20617",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
