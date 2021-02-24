import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACQXrc44YlfAGhVCv6ybqVuyg5LXhRY7k",
    authDomain: "upload-images-7779e.firebaseapp.com",
    projectId: "upload-images-7779e",
    storageBucket: "upload-images-7779e.appspot.com",
    messagingSenderId: "738334939690",
    appId: "1:738334939690:web:e0b828b94c14559afa8153",
    measurementId: "G-L1MZGV5WNJ"
};

firebase.initializeApp(firebaseConfig);


export default function uploadImage(file) {
    const storageRef = firebase.storage().ref(`images/${file.name}`);
    storageRef.put(file).then(function () {
        console.log("Upload thành công");
        storageRef.getDownloadURL().then((url) => {
            console.log(url);
        })
    })
}