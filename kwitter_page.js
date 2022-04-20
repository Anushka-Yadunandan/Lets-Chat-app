var firebaseConfig = {
      apiKey: "AIzaSyCZZE3OPzI82ubBMc3DUxtbpHi4nVOi0uY",
      authDomain: "kwitter-eb214.firebaseapp.com",
      databaseURL: "https://kwitter-eb214-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb214",
      storageBucket: "kwitter-eb214.appspot.com",
      messagingSenderId: "98857534988",
      appId: "1:98857534988:web:37acfb8a91656903969029"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value ;
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

//End code
      } });  }); }
getData();
