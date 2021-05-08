
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyAcxjkePiNvriLFWDdv6_lRDwxyVnwMAZo",
      authDomain: "kwitter-4ed19.firebaseapp.com",
      projectId: "kwitter-4ed19",
      storageBucket: "kwitter-4ed19.appspot.com",
      messagingSenderId: "325885970253",
      appId: "1:325885970253:web:5836275255330910651904",
      measurementId: "G-LH61GE2XVZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
