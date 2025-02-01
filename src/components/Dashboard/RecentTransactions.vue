<template>
    <div class="bg-white p-4 rounded-lg shadow md:col-span-2">
        <h2 class="text-h2 text-foreground mb-4">Recent Transactions</h2>
        <ul class="divide-y divide-gray-light">
            <li v-for="transaction in mockData.transactions" :key="transaction.id" class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-foreground truncate">
                            {{ transaction.description }}
                        </p>
                        <p class="text-sm text-gray-medium truncate">
                            {{ transaction.category }}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold" :class="transaction.amount < 0 ? 'text-red' : 'text-green'
                        ">
                        {{ transaction.amount < 0 ? "-$" : "+$" }}{{ Math.abs(transaction.amount) }} </div>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import mockData from "@/mockData";

const transactions = ref([]);

onMounted(() => {
    transactions.value = mockData.transactions;
});
</script>