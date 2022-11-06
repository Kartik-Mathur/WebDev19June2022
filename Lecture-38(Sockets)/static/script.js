let socket = io();

socket.on('loggedIn', () => {
    console.log('Connection Success');
    console.log(socket);
})

$(() => {
    const btn = $('#btn');
    const chat = $('#chat');
    const loginBtn = $('#login');

    $('#chatbox').hide()
    loginBtn.click(() => {
        socket.emit('startChat', {
            name: $('#username').val(),
            id: socket.id
        });
    })
    btn.click(() => {
        // console.log(chat.val());
        socket.emit('chat', {
            message: chat.val(),
            id: socket.id
        })
    })

    socket.on('chatDone', (data) => {
        $('#myName').append($('<p>').text(`${data.userName}`));
        $('#chatbox').show();
        $('#userdetails').hide();

    })

    socket.on('replyToAll', (data) => {
        // console.log(data.userName,data.message);
        $('#chatList').append($('<li>').text(`${data.userName}: ${data.message}`));
    })

})