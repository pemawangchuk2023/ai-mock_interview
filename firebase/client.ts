import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBxcKPvLzv3O2iCuEFk8lGG3SSOb-CoVxY",
	authDomain: "mockinterview-d993e.firebaseapp.com",
	projectId: "mockinterview-d993e",
	storageBucket: "mockinterview-d993e.firebasestorage.app",
	messagingSenderId: "294771484759",
	appId: "1:294771484759:web:3fd1b95291b354c1359b12",
	measurementId: "G-FC66MCPKFE",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
