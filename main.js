function login(){
    var name=document.getElementById("username_input").value;
    localStorage.setItem("name", name);
    window.location="room_page.html"
}