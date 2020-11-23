$(function () {
    let socket = io.connect('http://localhost:5000');

    let message = $('message');
    let send_message = $('#send_message');
    let chatroom = $('#chatroom');
    let feedback = $("#feedback");
    let usersList = $("#users-list");
    let nickName = $("#nickname-input");

    message.bind('keypress', e => {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode != "13") {
            socket.emit('typing')
        }
    })
})

