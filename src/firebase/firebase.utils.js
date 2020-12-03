import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCCqroSJ3ldwBvAnogJZR3wBF8pUt1KVFM',
	authDomain: 'crown-db-3b0fb.firebaseapp.com',
	projectId: 'crown-db-3b0fb',
	storageBucket: 'crown-db-3b0fb.appspot.com',
	messagingSenderId: '381854420670',
	appId: '1:381854420670:web:950f4f9e47a855788ed8ef',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
