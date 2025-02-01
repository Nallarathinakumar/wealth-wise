<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-h2 text-foreground mb-4">AI Chatbot</h2>
        <p class="text-gray-medium mb-4">
            Ask questions about your finances, budgeting, and get personalized advice.
        </p>
        <div class="mt-4 border border-gray-light rounded-lg p-4 h-64 overflow-y-auto" ref="chatContainer">
            <div v-for="message in messages" :key="message.id" class="flex flex-col space-y-2 mb-2">
                <div :class="message.sender === 'user'
                        ? 'bg-primary text-white p-2 rounded-lg self-end'
                        : 'bg-gray-light p-2 rounded-lg self-start'
                    ">
                    {{ message.text }}
                </div>
            </div>
        </div>
        <div class="mt-2 flex items-center">
            <input type="text" v-model="newMessage" class="flex-1 border border-gray-light rounded-lg p-2 mr-2"
                placeholder="Type your message here..." @keyup.enter="sendMessage" />
            <button class="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded"
                @click="sendMessage">
                Send
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onUpdated, nextTick } from "vue";
import mockData from "@/mockData";

const messages = ref([]);
const newMessage = ref("");
const chatContainer = ref(null);

const sendMessage = () => {
    if (newMessage.value.trim() === "") return;

    messages.value.push({
        id: messages.value.length + 1,
        text: newMessage.value,
        sender: "user",
    });

    // Simulate AI response after a short delay
    setTimeout(() => {
        messages.value.push({
            id: messages.value.length + 1,
            text: getAiResponse(newMessage.value), // Get response from mock data or algorithm
            sender: "ai",
        });
    }, 500);

    newMessage.value = "";
};

// Simple response logic for demo (expand with more complex logic if needed)
const getAiResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("spending")) {
        return "Your spending is looking good this month. Keep it up!";
    } else if (lowerCaseMessage.includes("goal")) {
        return "You are making good progress towards your Emergency Fund goal.";
    } else if (lowerCaseMessage.includes("debt")) {
        return "Focus on paying down high-interest debt first.";
    } else {
        return "I'm not sure I understand. Can you rephrase your question?";
    }
};

// Scroll to bottom when new messages are added
onUpdated(() => {
    nextTick(() => {
        if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
    });
});
</script>