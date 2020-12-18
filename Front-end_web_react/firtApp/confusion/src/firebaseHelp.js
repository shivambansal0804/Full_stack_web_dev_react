import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyAXnnqPCIKSSaflr0VZusOdW5h2v-mEwUs",
  authDomain: "fusion-eatery.firebaseapp.com",
  databaseURL: "https://fusion-eatery-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
