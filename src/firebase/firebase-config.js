import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
	apiKey: "AIzaSyCSf3kT-9TGxfOqKhSwLiQgjrA-AAMC7nI",
	authDomain: "journal-app-ec81f.firebaseapp.com",
	projectId: "journal-app-ec81f",
	storageBucket: "journal-app-ec81f.appspot.com",
	messageingSenderId: "18057370618",
	appId: "1:18057370618:web:55b60255e55c92766ae243",
	measurementId: "G-8BLDX2CWRD"
};

firebase.initializeApp( firebaseConfig );
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	db, 
	googleAuthProvider,
	firebase
}
