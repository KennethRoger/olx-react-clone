import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvv767u-9rUXHN1G-aKNgEIyxb_Pg5u3I",
  authDomain: "olx-clone-7a5bb.firebaseapp.com",
  projectId: "olx-clone-7a5bb",
  storageBucket: "olx-clone-7a5bb.appspot.com",
  messagingSenderId: "28407268618",
  appId: "1:28407268618:web:a26607aefdfed82e8ee6f3",
  measurementId: "G-BV08L550P5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { auth, provider, db, storage, analytics };
