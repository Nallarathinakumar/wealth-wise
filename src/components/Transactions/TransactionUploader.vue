<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-bold mb-4">Transactions</h2>
        <p class="text-gray-600 mb-4">Upload your transactions here (CSV, etc.) - Simulated for the hackathon</p>
        <input type="file" class="mb-4" @change="handleFileUpload" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="uploadTransactions">
            Upload
        </button>

        <ul class="divide-y divide-gray-200 mt-4">
            <li v-for="transaction in transactions" :key="transaction.id" class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">
                            {{ transaction.description }}
                        </p>
                        <p class="text-sm text-gray-500 truncate">
                            {{ transaction.category }}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold"
                        :class="transaction.amount < 0 ? 'text-red-600' : 'text-green-600'">
                        {{ transaction.amount < 0 ? '-$' : '+$' }}{{ Math.abs(transaction.amount) }} </div>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import mockData from '@/mockData';

const transactions = ref([]);

const handleFileUpload = (event) => {
    // Simulate file parsing - replace with actual CSV parsing if needed
    const file = event.target.files[0];
    console.log('File uploaded:', file.name);

    // For the hackathon, we'll just use the mock transactions
    transactions.value = mockData.transactions;
};

const uploadTransactions = () => {
    // Simulate uploading and processing
    console.log('Transactions uploaded and processed.');
};
</script>