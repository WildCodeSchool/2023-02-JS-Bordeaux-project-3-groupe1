const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_API_KEY,
  authDomain: import.meta.env.VITE_BASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_BASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_BASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_BASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_BASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = storage;
