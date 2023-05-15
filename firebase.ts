import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB06Kco9FyMwUI7I5Vuw4CY8JW6ZtAhaR4",
	authDomain: "chatgpt-messenger-d0c77.firebaseapp.com",
	projectId: "chatgpt-messenger-d0c77",
	storageBucket: "chatgpt-messenger-d0c77.appspot.com",
	messagingSenderId: "67171667646",
	appId: "1:67171667646:web:642aaeeade6ef59bdb98ef",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
