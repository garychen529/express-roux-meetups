"use strict";

const socket = io();

let chatUsername = document.querySelector('#chat-username');
let chatMessage = document.querySelector('#chat-message');

socket.on('connect', function() {
    const chatForm = document.forms.chatForm;
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            socket.emit('postMessage', {
                username: chatUsername.value,
                message: chatMessage.value
            });
            chatMessage.value = '';
            chatMessage.focus();
        });

        socket.on('updateMessages', function(data) {
            showMessage(data);
        }); //updateMessages
    } //chatform
}); //socket


function showMessage(data) {
    let chatDisplay = document.querySelector('.chat-display');
    let newMessage = document.createElement('p');

    if (chatUsername.value == data.username) {
        newMessage.className = 'bg-success chat-text';
    } else {
        newMessage.className = 'bg-info text-warning chat-text';
    }
    
    newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
