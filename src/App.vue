<template>
  <h1 class="text-3xl">Mi primera App</h1>
  <hr>
  <div class="text-center p-4">
    <h1 class="text-3xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
  </div>

  <Counter :value="45" />
  <CounterScript :value="3" />
  <CounterScript2 :value="3" />
</template>

<script lang="ts" setup>
import Counter from './components/Counter.vue';
import CounterScript from './components/CounterScript.vue';
import CounterScript2 from './components/my-counter-script/CounterScript2.vue';
</script>

<style scoped></style>
