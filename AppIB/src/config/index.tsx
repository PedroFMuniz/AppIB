import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUFpLQNnrPy3E8I3o_A3dCzK_fxgPz8H8",
    authDomain: "appib-2ce9a.firebaseapp.com",
    projectId: "appib-2ce9a",
    storageBucket: "appib-2ce9a.appspot.com",
    messagingSenderId: "519102996720",
    appId: "1:519102996720:web:c294a9fcf3c65576846235"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;