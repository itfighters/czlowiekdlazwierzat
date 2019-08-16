import * as firebase from "firebase/app";
import "firebase/messaging";

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "228431140721"
  });
};

navigator.serviceWorker.addEventListener("message", event => {
  console.log("message", event);
});
