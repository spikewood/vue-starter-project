<template>
  <div class="content-wrapper">
    <h1 class="page-title">Home Page</h1>
    <ul class="route-list">
      <li
        v-for="route in routes"
        :key="route.path"
      >
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const routes = ref([]);
const router = useRouter();

onMounted(() => {
  routes.value = router.options.routes.filter(route => route.name);
});
</script>

<style>
.content-wrapper {
  @apply w-full max-w-4xl p-4 bg-white shadow-md rounded-lg;
}

.page-title {
  @apply text-2xl font-bold mb-4;
}

.route-list {
  @apply list-none p-0;
}

.route-list li {
  @apply mb-2;
}

.route-list a {
  @apply text-blue-500 hover:underline;
}
</style>