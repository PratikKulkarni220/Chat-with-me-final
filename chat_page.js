//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBd0EmuQlLFNxVC8tDnDH1uRTkd1EJdd9I",
    authDomain: "kwitter-b2e5e.firebaseapp.com",
    databaseURL: "https://kwitter-b2e5e.firebaseio.com",
    projectId: "kwitter-b2e5e",
    storageBucket: "kwitter-b2e5e.appspot.com",
    messagingSenderId: "404275138689",
    appId: "1:404275138689:web:7a02f665a57aa088843d80",
    measurementId: "G-547KHHHRLD"
};
firebase.initializeApp(firebaseConfig);
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['Name'];
recived_message=['Message'];
like=message_data['Like'];
name_with_tag="<h4>" + name +",<img class='user-tick src='tick.png'></h4>";
message_with_tag="<h4 class=message_h4>" + message +"</h4>";
like_button="<button class='btn btn-warning' id=" + firebase_message_id + "value="+ like +"onClick=updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span> </button> <hr>"
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

username=localStorage.getItem("name");
room_name=localStorage.getItem("roomname");

function send(){
    message_var=document.getElementById("message_input").value;
    firebase.database().ref(room_name).push({
          Name:username,
          Message:message_var,
          Like:0
    });
    document.getElementById("message_input").value="";
}

function updateLike(message_id){
    console.log("clicked on like button-" + message_id);
    button_id=message_id;
    like=document.getElementById(button_id).value;
    update_likes=Number(likes) + 1;
    console.log(update_likes);
    firebase.database().ref(room_name).child(message_id).update({
          Like:update_likes
    });
}

