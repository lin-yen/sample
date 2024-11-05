<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="block">
      <h2>Try store</h2>
      <p>Count: {{ counter.count }}</p>
      <p>Double count: {{ counter.doubleCount }}</p>
      <button @click="counter.increment">Increment</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
