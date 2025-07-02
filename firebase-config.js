// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAFYfZTSX3oCM-KMpHTOCJjxyXx6AzWtdw",
  authDomain: "clinica-e2cee.firebaseapp.com",
  databaseURL: "https://clinica-e2cee-default-rtdb.firebaseio.com",
  projectId: "clinica-e2cee",
  storageBucket: "clinica-e2cee.firebasestorage.app",
  messagingSenderId: "522736936878",
  appId: "1:522736936878:web:8137bbcb790d8cd8e38a3f"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
