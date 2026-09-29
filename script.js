async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = question;
    chatBox.appendChild(userMessage);

    // Bot loading message
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = "🤖 Thinking...";
    chatBox.appendChild(botMessage);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question
            })
        });

        const data = await response.json();

        if (data.answer) {
            botMessage.textContent = data.answer;
        } else {
            botMessage.textContent = "❌ AI se response nahi mila.";
        }

    } catch (error) {
        console.error(error);
        botMessage.textContent =
            "❌ Server se connection nahi ho paaya.";
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Enter press karne par message send
document.getElementById("userInput").addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    }
);
