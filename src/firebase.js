import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDcSjY3OxaFfhRV25N8rH25YnqcpueoJ-g",
    authDomain: "click-and-chat.firebaseapp.com",
    projectId: "click-and-chat",
    storageBucket: "click-and-chat.appspot.com",
    messagingSenderId: "537069056740",
    appId: "1:537069056740:web:aea60e4f33e31545e732f1"
}).auth();
