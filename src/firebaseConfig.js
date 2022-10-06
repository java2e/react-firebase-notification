// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BJ6yzuzuiHaaARN70lDu59JFZN5xR1s6Iq5lQI4DSjoD8qh4-fnNKe8TGRmbC0kLy0shNkUiBOgozBLi3a83cm4",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("TOKEN : ", currentToken);
      } else {
        console.log("No TOKEN!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
