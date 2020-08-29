import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDb-8AdEUQxXRB1_yROX_BNz1pW64o1WEw",
  authDomain: "fish-resturant-9e675.firebaseapp.com",
  databaseURL: "https://fish-resturant-9e675.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
