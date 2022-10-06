importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


const firebaseConfig = {
  apiKey: "AIzaSyASbx3If3NY6-TEQHzSUeWfIWJ-FAr9NOI",
  authDomain: "mkk-test-4bbac.firebaseapp.com",
  projectId: "mkk-test-4bbac",
  storageBucket: "mkk-test-4bbac.appspot.com",
  messagingSenderId: "273256109366",
  appId: "1:273256109366:web:ae04e4fe2e47064ba18f97",
  measurementId: "G-Y6KB66FFJE",
  databaseURL: "https://mkk-test-4bbac-default-rtdb.firebaseio.com",
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Rececived background message",payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body : payload.notification.body,
  };

  self.ServiceWorkerRegistration.showNotification(notificationTitle,notificationOptions);

});