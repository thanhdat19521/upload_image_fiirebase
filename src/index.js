import uploadImage from "./firebase";

document.querySelector("#submit").addEventListener('click', async () => {
    const file = document.querySelector('#image').files[0];
    const url = await uploadImage(file);
})