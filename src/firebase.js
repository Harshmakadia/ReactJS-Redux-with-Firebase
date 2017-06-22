import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBHmedt4gjKF-0yEfT4phw23Ec1H2VD5KQ",
    authDomain: "goalcoach-87902.firebaseapp.com",
    databaseURL: "https://goalcoach-87902.firebaseio.com",
    projectId: "goalcoach-87902",
    storageBucket: "goalcoach-87902.appspot.com",
    messagingSenderId: "384441496809"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');

