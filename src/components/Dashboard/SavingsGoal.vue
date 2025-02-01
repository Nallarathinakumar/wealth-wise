<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-h2 text-foreground mb-4">Savings Goal</h2>
        <div class="w-full bg-gray-light rounded-full h-2.5 mb-4">
            <div class="bg-primary h-2.5 rounded-full" :style="{ width: progressPercentage }"></div>
        </div>
        <p class="text-center text-gray-dark">
            {{ formattedProgress }}
        </p>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    goal: {
        type: Object,
        required: true,
    },
});

const progressPercentage = computed(() => {
    return (props.goal.currentAmount / props.goal.totalAmount) * 100 + "%";
});

const formattedProgress = computed(() => {
    return `Progress: $${props.goal.currentAmount}/$${props.goal.totalAmount}`;
});
</script>