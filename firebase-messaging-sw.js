importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../firebase-messaging-sw.js')
//     .then(function (registration) {
//       console.log('Registration successful, scope is:', registration.scope);
//     }).catch(function (err) {
//       console.log('Service worker registration failed, error:', err);
//     });
// }
var firebaseConfig = {
  apiKey: "AIzaSyBdaRtJEHWOnqNeV_2UXkWHCxwsTUrsz74",
  authDomain: "my-pwa-985de.firebaseapp.com",
  projectId: "my-pwa-985de",
  storageBucket: "my-pwa-985de.appspot.com",
  messagingSenderId: "263147757383",
  appId: "1:263147757383:web:c66beecfe512d39f6df662"
};
firebase.initializeApp(firebaseConfig);




// firebase.initializeApp({
//   messagingSenderId: "263147757383",
// })

const initMessaging = firebase.messaging();
