<template>
  <main>
    <div v-if="isAuthenticated">User name is: {{ user.name }}</div>
    <v-counter />
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import vCounter from "@/components/Counter.vue";

const authStore = useAuthStore();

const { isAuthenticated, user } = storeToRefs(authStore);
</script>
