
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCEOzwMtu0NcQvmb8Twn19b7Xvfk8lqYCQ",
  authDomain: "kwitterbase-aa15e.firebaseapp.com",
  databaseURL: "https://kwitterbase-aa15e-default-rtdb.firebaseio.com",
  projectId: "kwitterbase-aa15e",
  storageBucket: "kwitterbase-aa15e.appspot.com",
  messagingSenderId: "687713582726",
  appId: "1:687713582726:web:6e76506a4e0f3064c61b07"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);




  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
