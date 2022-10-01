
var firebaseConfig = {
      apiKey: "AIzaSyBPlazF1pnVceTIyJ-ZCTH0fIkljYZ_pzE",
      authDomain: "kwitter-3a981.firebaseapp.com",
      databaseURL: "https://kwitter-3a981-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a981",
      storageBucket: "kwitter-3a981.appspot.com",
      messagingSenderId: "165705949711",
      appId: "1:165705949711:web:5bdc347f89939b668ab97a"
    };
    
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+ user_name
function addroom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomname"
      });
       localStorage.setItem("room_name", room_name)
       window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+ Room_names+"  onclick='redirecttoroomname(this.id)'>"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirecttoroomname(name){
  localStorage.setItem("room_name", name)
  window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}