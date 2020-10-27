import * as firebase from "firebase/app";
import "firebase/messaging";

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "228431140721"
  });
};
