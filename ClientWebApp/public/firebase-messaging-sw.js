/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-messaging.js");
firebase.initializeApp({
  messagingSenderId: "228431140721"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log("msg", payload);
});

self.addEventListener("notificationclick", function(event) {
  console.log("notificationclick", event);
});
