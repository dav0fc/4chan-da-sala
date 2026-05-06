import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBpZaH2GQx_sBr9Ioly4fxpidsqjetn9P8",
  authDomain: "chandasala-d87f9.firebaseapp.com",
  projectId: "chandasala-d87f9",
  storageBucket: "chandasala-d87f9.firebasestorage.app",
  messagingSenderId: "744959975116",
  appId: "1:744959975116:web:b26b5040ae6ab18e0eac69",
  databaseURL: "https://chandasala-d87f9-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };