/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-messaging.js");
firebase.initializeApp({
  messagingSenderId: "228431140721"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
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
  event.notification.close();

  event.waitUntil(
    clients
      .matchAll({
        type: "window"
      })
      .then(windowClients => {
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          if (
            client.url.indexOf(self.registration.scope) !== -1 &&
            "focus" in client
          ) {
            var messageToClient = { auctionId: event.notification.tag };
            client.postMessage(messageToClient);
            return client.focus();
          }
        }

        if (clients.openWindow) {
          openNewWindow();
        }
      })
  );

  function openNewWindow() {
    var pageUrl = `/${event.notificationData.tag}`;
    return clients.openWindow(pageUrl);
  }
});
