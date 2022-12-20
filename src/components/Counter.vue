<template>
  <div>
    <br />
    <button @click="decrement">-</button>
    <span>Count Value: {{ store.count }}</span>
    <button @click="increment">+</button>
    <br />
    Counter move to {{ store.countDigitLength }} digit length
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
// import { computed } from "vue";
const store = useCounterStore();

function increment() {
  store.count++;
}

function decrement() {
  store.count--;
}

// const countDigitLength = computed(() => store.count.toString().length);
// const countDigitLength = store.count.toString().length;
</script>
