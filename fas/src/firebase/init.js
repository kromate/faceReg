import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

export const firebaseConfig = {
	authDomain: 'facereg-809b3.firebaseapp.com',
	databaseURL: 'https://facereg-809b3.firebaseio.com',
	projectId: 'facereg-809b3',
	storageBucket: 'facereg-809b3.appspot.com',
	messagingSenderId: '741914714343',
	appId: '1:741914714343:web:e24f447bb5727bfbd18242',
	measurementId: 'G-4JKN2R3DB2'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storageRef = firebase.storage().ref();

