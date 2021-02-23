import firebase from "firebase";
import "./firebase";

document.querySelector("#submit").addEventListener('click', () => {
    const file = document.querySelector('#image').files[0];
    const storageRef = firebase.storage().ref(`images/${file.name}`);
    storageRef.put(file).then(function () {
        console.log("Upload thành công");
        storageRef.getDownloadURL().then((url) => {
            console.log(url);
        })
    })
})