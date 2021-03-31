import React ,{useEffect} from 'react';
import firebase from 'firebase';
const  topicUser = [];
function SubscribeToTopic() {
    const userSession = sessionStorage.getItem('userName');
      
    localStorage.setItem("topic" , JSON.stringify([]));
      
      topicUser.push(userSession);
      console.log(topicUser)

    var firebaseConfig = {
        apiKey: "AIzaSyBdaRtJEHWOnqNeV_2UXkWHCxwsTUrsz74",
        authDomain: "my-pwa-985de.firebaseapp.com",
        projectId: "my-pwa-985de",
        storageBucket: "my-pwa-985de.appspot.com",
        messagingSenderId: "263147757383",
        appId: "1:263147757383:web:c66beecfe512d39f6df662"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      const FCM_SERVER_KEY = "AAAAPUTUH0c:APA91bG3LWnqZEU2e6FjLAspyx76Edh4f4lDPgNg4AhgYqdHPDML7FWE9-WEvBIZZGOteGFTzGqYfuLV7AdqqKvoiUWI8E_lXGrZcDEFDHKHCpPNBxitRvqfrx5MWp-DBAzHuUeqjTUo";
      
      
      

      

    
      try{
        if(firebase.messaging.isSupported()){
          const messaging  = firebase.messaging();
          if(userSession){
              // messaging.requestPermission().then(() =>{
                 //messaging.onTokenRefresh(()=>{
                  messaging.getToken({vapidKey:'BLSkJED-08rHmgta5Xc9PeXkxKmPdh3cROLqwkJpGUue6OWwhpE3HzlbVzX298ZLouL_yWND9smSntF6gT8OY1A'}).then((currentToken)=>{
                    const top = JSON.parse(localStorage.getItem("topic"));
                    if (!top.find((user)=> user.userSession == userSession)){
                      subscribeTokenTopic(currentToken,userSession);
                      //top.push();
                      localStorage.setItem("topic", JSON.stringify([...top,{
                        userSession : userSession,
                        token :currentToken
                      }]))
              
                    }
                    
                    
                    console.log(currentToken)
                    console.log(topicUser);

              }).catch((err)=>{
                     console.error("you have an " , err)
                 })


                //})
                
            
            
              // }).catch((err)=>{
              //     console.error("you have an " , err)
              // })

          }else{
            messaging.getToken({vapidKey:'BEUzJ_WExLmzFeYGMJY_kTkkT7Q4BJHukCYRvzSmsPZEXSiheWgNs3f5Azz6N2rXTRPLZRfqtBkilAN-NWSHFD4'}).then((currentToken)=>{
                unsubscribe(currentToken)
                console.log('prob')
            
              })
              

          }
          
    
        }
      }catch (err){
        console.error(err)
      }

      function unsubscribe (token){
        fetch(`https://iid.googleapis.com/iid/v1/${token}`, {
            method: 'POST',
            headers: new Headers({
              Authorization: `key=${FCM_SERVER_KEY}`
            })
          })
            .then((response) => {
              if (response.status < 200 || response.status >= 400) {
                console.log(response.status, response);
              }
              console.log(`"${token}" is unsubscribed`);
            })
            .catch((error) => {
              console.error(error.result);
            });
          return true;

      }
    
      function subscribeTokenTopic(token , topic){
        fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`, {
                method: 'POST',
                headers: new Headers({
                  Authorization: `key=${FCM_SERVER_KEY}`
                })
              })
                .then((response) => {
                  if (response.status < 200 || response.status >= 400) {
                    console.log(response.status, response);
                  }
                  console.log(`"${topic}" is subscribed`);
                })
                .catch((error) => {
                  console.error(error.result);
                });
              return true;
      }





    return (
        <div>
            
        </div>
    )
}

export default SubscribeToTopic;
