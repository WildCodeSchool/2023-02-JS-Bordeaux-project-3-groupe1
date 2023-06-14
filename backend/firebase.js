require("dotenv").config();
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.BASE_API_KEY,
  authDomain: process.env.BASE_AUTH_DOMAIN,
  projectId: process.env.BASE_PROJECT_ID,
  storageBucket: process.env.BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.BASE_MESSAGING_SENDER_ID,
  appId: process.env.BASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = storage;
