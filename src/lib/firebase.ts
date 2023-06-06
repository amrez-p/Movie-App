import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDYS5usKwNmW64EQ9iIAF8t3ul1i5h4E9c',
  authDomain: 'react-netflix-36e08.firebaseapp.com',
  projectId: 'react-netflix-36e08',
  storageBucket: 'react-netflix-36e08.appspot.com',
  messagingSenderId: '681269508797',
  appId: '1:681269508797:web:6a4c1dc2412bc3b53555d4',
};

const firebaseApp = firebase.initializeApp(config);
// const database = firebase.database();
const githubProvider = new firebase.auth.GithubAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, githubProvider, googleAuthProvider };
