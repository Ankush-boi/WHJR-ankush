
var firebaseConfig = {
    apiKey: "AIzaSyDqn-wsnpXhvOL4VuoicUhM8ANNd__eiRI",
    authDomain: "copy-of-twitter-deb53.firebaseapp.com",
    databaseURL: "https://copy-of-twitter-deb53-default-rtdb.firebaseio.com",
    projectId: "copy-of-twitter-deb53",
    storageBucket: "copy-of-twitter-deb53.appspot.com",
    messagingSenderId: "890054822124",
    appId: "1:890054822124:web:7454627c120748975c7dc9"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({purpose:"Adding User"});
}