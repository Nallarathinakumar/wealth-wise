<template>
    <div class="container mx-auto mt-6 flex justify-center">
        <div class="bg-white p-8 rounded-lg shadow w-1/2">
            <h2 class="text-h2 text-foreground mb-4">Login</h2>
            <button class="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded" @click="login">
                Login
            </button>
            <p v-if="errorMessage" class="text-red mt-2">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const errorMessage = ref("");

const login = () => {
    // Simulate a successful login
    const username = "demoUser"; // Replace with an actual username if needed
    const password = "demoPassword"; // Replace with an actual password if needed

    // In a real application, you'd validate these credentials against a database
    if (username && password) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/"); // Redirect to the dashboard
    } else {
        errorMessage.value = "Invalid username or password."; // Set an error message
    }
};
</script>