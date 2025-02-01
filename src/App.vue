<template>
  <div id="app">
    <NavBar v-if="isLoggedIn" />
    <main class="container mx-auto mt-6">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import NavBar from "./components/UI/NavBar.vue";

const route = useRoute();

const isLoggedIn = computed(() => {
  return localStorage.getItem("isLoggedIn") === "true" || route.path === "/login";
});
// Watch for changes in isLoggedIn and update local storage (optional)
watchEffect(() => {
  if (isLoggedIn.value) {
    localStorage.setItem("isLoggedIn", "true");
  } else {
    localStorage.removeItem("isLoggedIn");
  }
});
</script>