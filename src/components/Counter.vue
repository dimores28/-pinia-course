<template>
  <div>
    <br />
    <button @click="counterStore.decrement">-</button>
    <span>Count Value: {{ count }}</span>
    <button @click="counterStore.increment">+</button>
    <br />
    Counter move to {{ countDigitLength }} digit length
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
// import { computed } from "vue";
const counterStore = useCounterStore();

const { count, countDigitLength } = storeToRefs(counterStore);

// const countDigitLength = computed(() => store.count.toString().length);
// const countDigitLength = store.count.toString().length;
</script>
