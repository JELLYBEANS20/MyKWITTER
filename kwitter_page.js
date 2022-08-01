//YOUR FIRE BASE LINKS
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


	

  // My Code

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

  
document.getElementById("room_name").innerHTML = "This is Room :  " + room_name + "!";



function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

function moveout() {
  
  localStorage.removeItem("room_name");
  window.location.replace("kwitter_room.html");
  }
