<template>
  <div>
    <p>Count Value: {{ store.count }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>
