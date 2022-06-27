const firebaseConfig = {
    apiKey: "AIzaSyDujo1RJg4EHDpUus2SusSDbSdGeKIxLKY",
    authDomain: "class-94-practice-23df4.firebaseapp.com",
    databaseURL: "https://class-94-practice-23df4-default-rtdb.firebaseio.com",
    projectId: "class-94-practice-23df4",
    storageBucket: "class-94-practice-23df4.appspot.com",
    messagingSenderId: "666340587355",
    appId: "1:666340587355:web:94a9f25abb5225808a4c7e",
    measurementId: "G-BVWXMBV0XW"
  };
  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);   
  // const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
};