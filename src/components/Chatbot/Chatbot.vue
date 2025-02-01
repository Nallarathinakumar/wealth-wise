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
import { ref, onUpdated, nextTick, reactive } from "vue";
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
            text: getAiResponse(newMessage.value),
            sender: "ai",
        });
    }, 500);

    newMessage.value = "";
};

const getAiResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Accessing transactions and goals from mockData
    const transactions = mockData.transactions;
    const goals = mockData.goals;

    // Basic analysis and response generation
    if (lowerCaseMessage.includes("spending")) {
        return analyzeSpending(transactions);
    } else if (lowerCaseMessage.includes("goal")) {
        return analyzeGoals(goals);
    } else if (lowerCaseMessage.includes("debt")) {
        return "Focus on paying down high-interest debt first.";
    } else {
        return "I'm not sure I understand. Can you rephrase your question?";
    }
};

// Function to analyze spending
const analyzeSpending = (transactions) => {
    let totalSpending = 0;
    transactions.forEach((transaction) => {
        if (transaction.amount < 0) {
            totalSpending += Math.abs(transaction.amount);
        }
    });

    return `Your total spending is $${totalSpending}. You might want to review your expenses.`;
};

// Function to analyze goals
const analyzeGoals = (goals) => {
    if (goals.length === 0) {
        return "You have not set any financial goals yet.";
    }

    const goal = goals[0]; // Focus on the first goal for simplicity
    const progress = (goal.currentAmount / goal.totalAmount) * 100;

    return `You are ${progress.toFixed(2)}% on your way to achieving your ${goal.name
        } goal.`;
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