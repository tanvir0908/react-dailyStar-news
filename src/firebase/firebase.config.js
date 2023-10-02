import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx7k_jf3XnLPaaIyqEWEUCe7EfpYKUObY",
  authDomain: "react-dailystar-news.firebaseapp.com",
  projectId: "react-dailystar-news",
  storageBucket: "react-dailystar-news.appspot.com",
  messagingSenderId: "8562808001",
  appId: "1:8562808001:web:21a3563159dbbb3ce17040",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
