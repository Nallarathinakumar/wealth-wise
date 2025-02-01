<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-h2 text-foreground mb-4">Financial Goals</h2>
        <p class="text-gray-medium mb-4">
            Set and manage your financial goals here (e.g., Emergency Fund, Vacation,
            etc.)
        </p>

        <div v-for="goal in goals" :key="goal.id" class="mb-4">
            <div class="w-full bg-gray-light rounded-full h-2.5 mb-2">
                <div class="bg-primary h-2.5 rounded-full"
                    :style="{ width: (goal.currentAmount / goal.totalAmount) * 100 + '%' }"></div>
            </div>
            <div class="flex justify-between">
                <p class="text-foreground">{{ goal.name }}</p>
                <p class="text-gray-dark">
                    Progress: ${{ goal.currentAmount }}/$${{ goal.totalAmount }}
                </p>
            </div>
            <p v-if="goal.monthlySaving > 0" class="text-sm text-gray-medium">
                Monthly Saving Required: ${{ goal.monthlySaving.toFixed(2) }}
            </p>
        </div>

        <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">Add New Goal</h3>
            <div class="mb-2">
                <label for="goalName" class="block text-sm font-medium text-gray-medium">Name</label>
                <input type="text" id="goalName" v-model="newGoal.name"
                    class="mt-1 border border-gray-light rounded-md p-2 w-full" />
            </div>
            <div class="mb-2">
                <label for="goalAmount" class="block text-sm font-medium text-gray-medium">Amount</label>
                <input type="number" id="goalAmount" v-model.number="newGoal.totalAmount"
                    class="mt-1 border border-gray-light rounded-md p-2 w-full" />
            </div>
            <div class="mb-2">
                <label for="goalTimeframe" class="block text-sm font-medium text-gray-medium">Timeframe (Months)</label>
                <input type="number" id="goalTimeframe" v-model.number="newGoal.timeframe"
                    class="mt-1 border border-gray-light rounded-md p-2 w-full" />
            </div>
            <button class="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded"
                @click="addNewGoal">
                Add Goal
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import mockData from "@/mockData";

const goals = reactive(mockData.goals);
let newGoal = reactive({
    name: "",
    totalAmount: null,
    timeframe: null,
    currentAmount: 0,
});

const addNewGoal = () => {
    if (
        newGoal.name &&
        newGoal.totalAmount > 0 &&
        newGoal.timeframe > 0
    ) {
        const monthlySaving = newGoal.totalAmount / newGoal.timeframe;
        goals.push({
            ...newGoal,
            id: goals.length + 1,
            monthlySaving: monthlySaving
        });

        // Reset the form
        newGoal = reactive({
            name: "",
            totalAmount: null,
            timeframe: null,
            currentAmount: 0,
        });
    } else {
        alert("Please fill in all fields correctly.");
    }
};
</script>