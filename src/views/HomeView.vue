<template>
  <main>Home page</main>
  <v-counter />
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import vCounter from "@/components/Counter.vue";

const store = useCounterStore();
console.log(store.count);
</script>
