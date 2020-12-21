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
  var name_user=localStorage.getItem("name");

  function getTheData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name =" + Room_names);
row1= "<div class='room_name' id=" +  Room_names + "onClick='redirect_roomname(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      });});}

      getData();
function addRoom(){
      room_name=document.getElementById("room_input").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"Creating a room and storing"
      });
      localStorage.setItem("room_name", room_name);

      window.location="chat_page.html"


}

function redirect_roomname(name){
    console.log(name);
     localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
