document.addEventListener("DOMContentLoaded", function () {
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbot = document.getElementById("close-chatbot");
    const sendMessageButton = document.getElementById("send-message");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");

    chatbotButton.addEventListener("click", () => {
        chatbotContainer.style.display = "flex";
        setTimeout(() => {
            chatbotContainer.classList.add("open"); 
        }, 10); 
    });

    closeChatbot.addEventListener("click", () => {
        chatbotContainer.classList.remove("open"); 
        setTimeout(() => {
            chatbotContainer.style.display = "none"; 
        }, 300); 
    });

    sendMessageButton.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            const tokenizedMessage = tokenize(userMessage);

            appendMessage(tokenizedMessage.join(" "), "user");
            chatbotInput.value = "";

            showTypingIndicator();

            setTimeout(() => {
                hideTypingIndicator();
                const botMessage = getBotResponse(tokenizedMessage);
                appendMessage(botMessage, "bot");
            }, 1500); 
        }
    }

    function tokenize(text) {
        return text.split(/\W+/).filter(token => token.length > 0);
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.innerHTML = `            
            <div class="message-content">${message}</div>
        `;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; 
    }

    function getBotResponse(tokens) {
        const responses = {
            "hi": "Hello! I'm Rohan's Assistant. How can I help you?",
            "hello": "Hi there! What can I do for you?",
            "how": "I'm just a bot, but I'm doing great! How about you?",
            "bye": "Goodbye! Have a great day!",
            "help": "Sure! How can I assist you today?",
            "thanks": "You're welcome! Anything else I can help with?",
            "time": `The current time is ${new Date().toLocaleTimeString()}.`,
            "date": `Today's date is ${new Date().toLocaleDateString()}.`,
            "weather": "I'm not a weather bot, but you can check out your local weather report!",
            "name": "I am your friendly chatbot here to assist you!",
            "project": "Juggling multiple projects? Let's talk about managing them effectively.",
            "rate": "Let's discuss about it!",
            "price": "Let's discuss about it!",
            "tech" : "I do backend and frontend development both.",
            "requirement" :"Let's discuss your requirement! Please <a href='#contact' style='color: #007bff; text-decoration: underline;'>contact me via the contact form</a> for further assistance.",
            "project" : "Let's discuss your requirement! Please <a href='#contact' style='color: #007bff; text-decoration: underline;'>contact me via the contact form</a> for further assistance.",
            "freelance" :"We provide the quality and efficiency! Trust me.",
            "thank" : "You're welcome! Anything else I can help with?",
            "contact" : "Feel free to contact me, drop your queries <a href='#contact' style='color: #007bff; text-decoration: underline;'> and via the contact form</a> for further assistance.",

            "default": "I'm sorry, I didn't understand that. Please <a href='#contact' style='color: #007bff; text-decoration: underline;'>contact me via the contact form</a> for further assistance.",
        };
        

        const lowerCaseTokens = tokens.map(token => token.toLowerCase());
        const responseKey = lowerCaseTokens.find(token => responses[token]) || "default";
        return responses[responseKey];
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
});
