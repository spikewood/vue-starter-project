<template>
  <SectionFormat>
    <ContentFormat>
      <h1 class="page-title">Home Page</h1>
      <p>
        This is the home page of the application. It lists all the routes that are available in the application.
      </p>
      <ul class="route-list">
        <li
          v-for="route in routes"
          :key="route.path"
        >
          <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        </li>
      </ul>

    </ContentFormat>
  </SectionFormat>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ContentFormat from '@/components/ContentFormat.vue';
import SectionFormat from '@/components/SectionFormat.vue';

const routes = ref([]);
const router = useRouter();

onMounted(() => {
  routes.value = router.options.routes.filter(route => route.name);
});
</script>

<style scoped>
.page-title {
  @apply text-2xl font-bold mb-4;
}

.route-list {
  @apply list-none p-0;
}

.route-list li {
  @apply mb-2;
}
</style>