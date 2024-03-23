import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDhxIxGlngXovb1JLVObSSIAxV0naKPwwc",
    authDomain: "vue-firebase-24da2.firebaseapp.com",
    projectId: "vue-firebase-24da2",
    storageBucket: "vue-firebase-24da2.appspot.com",
    messagingSenderId: "797151426216",
    appId: "1:797151426216:web:67d4a58772f2721bf6749d",
    measurementId: "G-7W4MC7G31N",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
});
