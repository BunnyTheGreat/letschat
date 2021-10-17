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

  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " +user_name;

  function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});

localStorage.setItem("room_name", room_name);

window.location = "letschat_page.html"
  }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "letschat_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}