<template>
  <div>Hello Pina!</div>
  <router-link to="/">Go to Home</router-link>
  <router-view></router-view>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
console.log(authStore.isAuthenticated);
</script>

<script>
export default {
  name: "App"
};
</script>

<style></style>
