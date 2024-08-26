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
}

.header {
  @apply bg-gray-500 px-4 py-1;
}

.nav {
  @apply flex justify-between items-center;
}

.nav a {
  @apply text-white text-lg font-semibold hover:text-gray-300;
}

.main-content {
  @apply flex-grow p-4;
}

.footer {
  @apply bg-gray-700 p-4 text-white text-center;
}
</style>