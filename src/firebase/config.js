import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpZaH2GQx_sBr9Ioly4fxpidsqjetn9P8",
  authDomain: "chandasala-d87f9.firebaseapp.com",
  projectId: "chandasala-d87f9",
  storageBucket: "chandasala-d87f9.firebasestorage.app",
  messagingSenderId: "744959975116",
  appId: "1:744959975116:web:b26b5040ae6ab18e0eac69"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };