<template>
    <div class="container mx-auto mt-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SavingsGoal :goal="mockData.goals[0]" class="bg-white p-4 rounded-lg shadow" />
            <SpendingTrendChart class="bg-white p-4 rounded-lg shadow" />
            <RecentTransactions class="bg-white p-4 rounded-lg shadow md:col-span-2" />
        </div>
    </div>
</template>

<script setup>
import SavingsGoal from './SavingsGoal.vue';
import SpendingTrendChart from './SpendingTrendChart.vue';
import RecentTransactions from './RecentTransactions.vue';
import mockData from '@/mockData';
</script>