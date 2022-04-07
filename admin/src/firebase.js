import firebase from "firebase";
// import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBs-BIfw0KCiVD1stuMzGomQcfGn4M_A_o",
    authDomain: "movieholic-2aab1.firebaseapp.com",
    projectId: "movieholic-2aab1",
    storageBucket: "movieholic-2aab1.appspot.com",
    messagingSenderId: "460334134401",
    appId: "1:460334134401:web:ac5c42a13fb8e7256ac980",
    measurementId: "G-CC3FEYSH6J",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
