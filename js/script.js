function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var messageText = messageInput.value;

    if (messageText.trim() !== '') {
        var chatMessages = document.getElementById('chat-messages');
        var newMessage = document.createElement('div');
        newMessage.textContent = messageText;
        chatMessages.appendChild(newMessage);

        // Очистка поля ввода
        messageInput.value = '';
    }
}
