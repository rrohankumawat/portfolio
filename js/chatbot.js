document.addEventListener("DOMContentLoaded", function () {
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbot = document.getElementById("close-chatbot");
    const sendMessageButton = document.getElementById("send-message");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");

        
    // Toggle Chatbot Visibility with Animation
    chatbotButton.addEventListener("click", () => {
        chatbotContainer.style.display = "flex";
        setTimeout(() => {
            chatbotContainer.classList.add("open"); // Add open class for animation
        }, 10); // Small delay to allow display change
    });

    closeChatbot.addEventListener("click", () => {
        chatbotContainer.classList.remove("open"); // Remove open class for animation
        setTimeout(() => {
            chatbotContainer.style.display = "none"; // Hide after animation
        }, 300); // Match the duration of the transition
    });

    // Send Message
    sendMessageButton.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            // Add User Message
            appendMessage(userMessage, "user");
            chatbotInput.value = "";

            // Simulate Bot Response
            setTimeout(() => {
                const botMessage = getBotResponse(userMessage);
                appendMessage(botMessage, "bot");
            }, 500);
        }
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        const avatarSrc = sender === "user" ? "user-avatar.png" : "bot-avatar.png";
    messageElement.innerHTML = `
        <img src="${avatarSrc}" alt="${sender} Avatar" class="avatar">
        <div class="message-content">${message}</div>
    `;
        messageElement.innerHTML = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll
    }

    function getBotResponse(userMessage) {
        // Simple Bot Logic
        const responses = {
            "hi": "Hello! How can I help you?",
            "hello": "Hi there! What can I do for you?",
            "how are you": "I'm just a bot, but I'm doing great! How about you?",
            "bye": "Goodbye! Have a great day!",
            "default": "I'm sorry, I didn't understand that. Please <a href='#contact' style='color: #007bff; text-decoration: underline;'>contact me via the contact form</a> for further assistance."
        };

        const lowerCaseMessage = userMessage.toLowerCase();
        return responses[lowerCaseMessage] || responses["default"];
    }

    function showTypingIndicator() {
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("typing-indicator", "show");
        typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        chatbotMessages.appendChild(typingIndicator);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function hideTypingIndicator() {
        const typingIndicator = document.querySelector(".typing-indicator");
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Add Typing Indicator
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, "user");
            chatbotInput.value = "";
            showTypingIndicator();
    
            setTimeout(() => {
                hideTypingIndicator();
                const botMessage = getBotResponse(userMessage);
                appendMessage(botMessage, "bot");
            }, 1500); // Simulate bot typing delay
        }
    }
    
});


