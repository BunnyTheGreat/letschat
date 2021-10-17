var firebaseConfig = {
      apiKey: "AIzaSyBq08P59HZOL26odNPv53cc9CXGhW0p0W0",
      authDomain: "say-hey-42c05.firebaseapp.com",
      databaseURL: "https://say-hey-42c05-default-rtdb.firebaseio.com",
      projectId: "say-hey-42c05",
      storageBucket: "say-hey-42c05.appspot.com",
      messagingSenderId: "286266869369",
      appId: "1:286266869369:web:5ad4b3fdcb88a1d7a436a8"
      
    };
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send() {
      msg= document.getElementById("msg").nodeValue;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });

      document.getElementById("msg").value="";
}

