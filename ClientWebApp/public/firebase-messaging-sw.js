/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-messaging.js");
firebase.initializeApp({
  messagingSenderId: "228431140721"
});
const messaging = firebase.messaging();
const baseUrl = "https://pomagalnia.pl";

messaging.setBackgroundMessageHandler(function(payload) {
  console.log("setBackgroundMessageHandler", payload);

  const notificationData = payload.data;
  const notificationTitle = notificationData.title;
  const auctionId = notificationData.auctionId;

  const notificationOptions = {
    body: notificationData.message,
    icon: "assets/icons/icon-192x192.png",
    badge: "assets/icons/icon-96x96.png",
    tag: auctionId,
    renotify: true
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", function(event) {
  console.log("notificationclick", event);
  event.notification.close();

  if (clients.openWindow) {
    openNewWindow();
  }

  function openNewWindow() {
    var pageUrl = `${baseUrl}/${event.notificationData.tag}`;
    return clients.openWindow(pageUrl);
  }
});
