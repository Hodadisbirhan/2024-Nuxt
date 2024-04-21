import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.firebase;
  console.log(config, "config value");
  const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
});
