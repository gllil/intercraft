import * as firebase from "firebase/app";
import "firebase/functions";

var firebaseConfig = {
  apiKey: "AIzaSyD2OLtAHpD_jWlCG8p1Hz3OmskJLe1guZk",
  authDomain: "intercraft-81c8a.firebaseapp.com",
  databaseURL: "https://intercraft-81c8a.firebaseio.com",
  projectId: "intercraft-81c8a",
  storageBucket: "intercraft-81c8a.appspot.com",
  messagingSenderId: "711308609741",
  appId: "1:711308609741:web:ed374f5177d15949120184",
  measurementId: "G-8ZC6PYDWFG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const functions = firebase.functions();

export { functions };
