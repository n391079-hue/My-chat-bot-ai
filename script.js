function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    // Show user's message
    const userMessage = document.createElement("div");

    userMessage.className = "user-message";
    userMessage.textContent = question;

    chatBox.appendChild(userMessage);

    // Temporary reply
    const botMessage = document.createElement("div");

    botMessage.className = "bot-message";
    botMessage.textContent =
        "🤖 Main abhi AI se connect nahi hua hoon. Next step mein mujhe AI se connect karenge!";

    chatBox.appendChild(botMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Enter button
document.getElementById("userInput").addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            sendMessage();
        }

    }
);
