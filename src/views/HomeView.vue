<template>
  <main>
    <div v-if="authStore.isAuthenticated">
      User name is: {{ authStore.user.name }}
    </div>
    <v-counter />
  </main>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import vCounter from "@/components/Counter.vue";

const authStore = useAuthStore();
</script>
