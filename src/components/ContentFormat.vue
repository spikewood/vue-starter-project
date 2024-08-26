<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style>
.content {
  @apply text-gray-900 dark:text-gray-50;
}
.content h1 {
  @apply text-3xl font-bold mb-4;
}

.content h2 {
  @apply text-xl font-bold mb-3;
}

.content p {
  @apply text-base leading-6 mb-4;
}

.content ul {
  @apply list-disc pl-6 mb-4;
}

.content li {
  @apply mb-2;
}

.content a {
  @apply text-blue-500 dark:text-blue-300;
  @apply hover:underline;
}
</style>
