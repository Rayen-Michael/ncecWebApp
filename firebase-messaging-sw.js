// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
  apiKey: "AIzaSyDu5hGQHlFsWxO1VSGh4KyoEq3qvmQY45Y",
  authDomain: "ncec-74eb6.firebaseapp.com",
  databaseURL: "https://ncec-74eb6-default-rtdb.firebaseio.com",
  projectId: "ncec-74eb6",
  storageBucket: "ncec-74eb6.appspot.com",
  messagingSenderId: "219227782156",
  appId: "1:219227782156:web:476df54691253451364229",
  measurementId: "G-PCXXJRXJ1H"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Get Device Token
function getDeviceToken() {
  messaging.getToken({ vapidKey: firebaseVapidKey })
    .then(function(token) {
      console.log('TOKEN: ', token);
      // TODO: This is a good place to
      // send this token to your server,
      // to catch any app push notifications.
      //          
      // NOTE: Make sure you only do this once per session.
      // We don't want to write the device on our server
      // with each page load.
    })
    .catch(function(error) {
      console.log('Could not obtain TOKEN: ', error);
    });
}

// function subscribeTokenToTopic(token, topic) {
//   fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`, {
//     method: 'POST',
//     headers: new Headers({
//       Authorization: `key=${FCM_SERVER_KEY}`
//     })
//   })
//     .then((response) => {
//       if (response.status < 200 || response.status >= 400) {
//         console.log(response.status, response);
//       }
//       console.log(`"${topic}" is subscribed`);
//     })
//     .catch((error) => {
//       console.error(error.result);
//     });
//   return true;
// }
// subscribeTokenToTopic(getDeviceToken, "/topics/ElMo2tamar")
messaging.onBackgroundMessage(function(payload) {
  console.log('Background message received [firebase-messaging-sw.js]: ', payload);
});