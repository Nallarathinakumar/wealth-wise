<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-bold mb-4">Financial Goals</h2>
        <p class="text-gray-600 mb-4">Set and manage your financial goals here (e.g., Emergency Fund, Vacation, etc.)
        </p>

        <div v-for="goal in goals" :key="goal.id" class="mb-4">
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div class="bg-blue-600 h-2.5 rounded-full"
                    :style="{ width: (goal.currentAmount / goal.totalAmount) * 100 + '%' }"></div>
            </div>
            <div class="flex justify-between">
                <p>{{ goal.name }}</p>
                <p>Progress: ${{ goal.currentAmount }}/${{ goal.totalAmount }}</p>
            </div>
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="showModal">
            Add New Goal
        </button>

        <!-- Modal -->
        <div v-if="isModalOpen"
            class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div class="relative bg-white rounded-lg p-8 m-4 max-w-xl w-full">
                <h3 class="text-lg font-bold mb-4">Add New Goal</h3>
                <input type="text" v-model="newGoalName" class="w-full p-2 border rounded mb-4"
                    placeholder="Enter goal name" />
                <input type="number" v-model="newGoalAmount" class="w-full p-2 border rounded mb-4"
                    placeholder="Enter total amount" />
                <div class="flex justify-end gap-2">
                    <button class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                        @click="closeModal">
                        Cancel
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        @click="saveGoal">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import mockData from '@/mockData';

const goals = ref(mockData.goals);
const isModalOpen = ref(false);
const newGoalName = ref('');
const newGoalAmount = ref(5000);

const showModal = () => {
    isModalOpen.value = true
};
const closeModal = ()=> {
    isModalOpen.value = false
    newGoalName.value = ''
};
const saveGoal = () => {
    if (newGoalName.value.trim()) {
        addNewGoal(newGoalName.value, newGoalAmount.value)
        closeModal()
    }
};
const addNewGoal = (newGoalName, amount=5000) => {
    // Simulate adding a new goal
    const newGoal = {
        id: goals.value.length + 1, // Simple ID for demo
        name: newGoalName,
        totalAmount: amount,
        currentAmount: 0,
    };
    goals.value.push(newGoal);
};
</script>