
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
room_name=localStorage.getItem("room_name");
function sendMsg(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            msg:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name=message_data['name']
         message=message_data['msg']
         like=message_data['like']
         name_tag="<h4> "+name+"<img class='user_tick'src='tick.png'> </h4>"
         message_tag="<h4 class='message_h4'>"+message+"</h4>"
         like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>"
         span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button> <hr>"
         row=name_tag+message_tag+like_button+span_tag;
         document.getElementById("output").innerHTML+row
      } });  }); }
getData();
function updatelike(msg_id){
      button_id=msg_id
      likes=document.getElementById(button_id).value
      update_like=Number(likes)+1
      firebase.database().ref(room_name).child(msg_id).update({like:update_like });
}