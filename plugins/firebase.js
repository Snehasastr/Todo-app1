import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  // Your Firebase configuration
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
