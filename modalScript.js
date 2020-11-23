
// Get the modal
var modal = document.getElementById("myModal");
const nicknameInput = document.getElementById("nickname-input");
var acceptNicknameButton = document.getElementById("nickname-button")

// Close modal when nick-name is typed
nicknameInput.onkeypress = e => {
    let keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13'){
        modal.style.display = "none";
    }
};

acceptNicknameButton.onclick = (e) => {
    modal.style.display = "none"
}