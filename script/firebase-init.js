
  // The contents of firebaseConfig can be obtained from the firebase console.
  var firebaseConfig = {
    apiKey: "AIzaSyBdaRtJEHWOnqNeV_2UXkWHCxwsTUrsz74",
    authDomain: "my-pwa-985de.firebaseapp.com",
    projectId: "my-pwa-985de",
    storageBucket: "my-pwa-985de.appspot.com",
    messagingSenderId: "263147757383",
    appId: "1:263147757383:web:c66beecfe512d39f6df662"
  };
  
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
  messaging.usePublicVapidKey('BLSkJED-08rHmgta5Xc9PeXkxKmPdh3cROLqwkJpGUue6OWwhpE3HzlbVzX298ZLouL_yWND9smSntF6gT8OY1A');


  messaging.onMessage( payload => {
    // OnMessage is called when the web application receives a notification in the foreground state.
    console.log("onMessage")


  })

messaging.onTokenRefresh(() => {
    //When the token is updated, onTokenRefresh is called.
    messaging.getToken().then((refreshedToken) => {
    console.log(refreshedToken)
    }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
    });
});