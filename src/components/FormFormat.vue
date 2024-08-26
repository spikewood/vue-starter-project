<template>
  <form @submit.prevent>
    <h2 v-if="name">{{ name }}</h2>
    <slot></slot>
  </form>
</template>

<script setup>
// define props
const { name } = defineProps({
  name: {
    type: String,
    default: ''
  },
});

</script>

<style>
form {
  @apply shadow-md rounded px-8 pt-6 pb-8 mb-4;
  @apply bg-white dark:bg-gray-800;
}

h2 {
  @apply text-2xl font-bold mb-4;
}

label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}
input {
  @apply shadow appearance-none border rounded w-full py-2 px-3  leading-tight;;
  @apply text-gray-700 dark:bg-gray-200 dark:text-gray-900;
  @apply focus:outline-slate-600 focus:outline-double;
}
</style>