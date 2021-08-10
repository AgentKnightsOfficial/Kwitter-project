
//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
    apiKey: "AIzaSyDFjYhOPnA8tBqIFTkW8nMBkCwYJaR5lM0",
    authDomain: "kwitter-d0eea.firebaseapp.com",
    databaseURL: "https://kwitter-d0eea-default-rtdb.firebaseio.com",
    projectId: "kwitter-d0eea",
    storageBucket: "kwitter-d0eea.appspot.com",
    messagingSenderId: "283289870035",
    appId: "1:283289870035:web:41cf21265f277e9be8fe26"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
