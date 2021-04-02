importScripts("https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.15.1/firebase-messaging.js"
);
var firebaseConfig = {
  apiKey: "AIzaSyBdaRtJEHWOnqNeV_2UXkWHCxwsTUrsz74",
  authDomain: "my-pwa-985de.firebaseapp.com",
  projectId: "my-pwa-985de",
  storageBucket: "my-pwa-985de.appspot.com",
  messagingSenderId: "263147757383",
  appId: "1:263147757383:web:c66beecfe512d39f6df662"
};

firebase.initializeApp(firebaseConfig);
messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  var obj = JSON.parse(payload.data.notification);
  var ntitle = obj.title;
  var noptions = {
    body: obj.body,
    icon: obj.icon,
  };
  return self.registration.showNotification(ntitle, noptions);
});




// importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

// console.warn("firebase work !!  : )")

// firebase.initializeApp({
//   messagingSenderId: "263147757383"
// });

// const initMessaging = firebase.messaging()





