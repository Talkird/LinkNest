import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY as string,
    authDomain: config.FIREBASE_AUTH_DOMAIN as string,
    projectId: config.FIREBASE_PROJECT_ID as string,
    storageBucket: config.FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID as string,
    appId: config.FIREBASE_APP_ID as string,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
