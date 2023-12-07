{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ initializeApp \} from "firebase/app";\
import \{ getDatabase \} from "firebase/database";\
\
const firebaseConfig = \{\
  apiKey: "AIzaSyB_r4G7qE4M17YLq4Ukkq4PX6NzE6Lg7X0",\
  authDomain: "chat--js.firebaseapp.com",\
  projectId: "chat--js",\
  storageBucket: "chat--js.appspot.com",\
  messagingSenderId: "928772773386",\
  appId: "1:928772773386:web:b07b73d36e530bc67b71f3",\
  measurementId: "G-C777WDYECR",\
  databaseURL: "https://chatjs.firebaseio.com"\
\};\
//Database\
\
// Initialize Firebase\
const app = initializeApp(firebaseConfig);\
const database = getDatabase(app);\
\
var database = firebase.database();\
const dbRef = firebase.database().ref();\
\
function checkIfUsernameExists(username)\{\
  dbRef.child("chatjs").child(username).get().then((snapshot) => \{\
    if (snapshot.exists()) \{\
      console.log("IDK if this works");\
\}\
\
}
