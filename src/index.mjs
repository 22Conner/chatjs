import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_r4G7qE4M17YLq4Ukkq4PX6NzE6Lg7X0",
  authDomain: "chat--js.firebaseapp.com",
  projectId: "chat--js",
  storageBucket: "chat--js.appspot.com",
  messagingSenderId: "928772773386",
  appId: "1:928772773386:web:b07b73d36e530bc67b71f3",
  measurementId: "G-C777WDYECR",
  databaseURL: "https://chatjs.firebaseio.com"
};
//Database\

// Initialize Firebase\
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

var database = firebase.database();
const dbRef = firebase.database().ref();

function checkIfUsernameExists(username){
  dbRef.child("chatjs").child(username).get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log("IDK if this works");
}

}
