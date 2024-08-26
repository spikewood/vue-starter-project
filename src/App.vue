<template>
  <div class="container">
    <header class="header">
      <div class="wrapper">
        <nav class="nav">
          <RouterLink to="/">Home</RouterLink>
        </nav>
      </div>
    </header>
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="footer">
      footer
    </footer>
  </div>
</template>

<style>
.container {
  @apply min-h-screen flex flex-col;
  @apply bg-gray-300 dark:bg-black;
}

.header {
  @apply  px-4 py-1;
  @apply bg-gray-800
}

.nav {
  @apply flex justify-between items-center;
}

.nav a {
  @apply text-lg font-semibold;
  @apply text-white hover:text-gray-300;

}

.main-content {
  @apply flex-grow p-4 max-w-4xl mx-auto;
  @apply bg-white dark:bg-gray-900;
}

.footer {
  @apply bg-gray-700 p-4 text-white text-center;
}
</style>