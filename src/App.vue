<template>
  <div id="app">
    <!-- Navbar with CCS Logo and RouterLinks -->
    <header class="navbar">
      <div class="nav-container">
        <div class="brand">
          <img src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/10/cropped-CCS-Logov-new.png" alt="CPU CCS Logo"
            class="nav-logo" />
          <div class="brand-text">
            <span class="brand-title">CPU CCS</span>
            <span class="brand-sub">College of Computer Studies</span>
          </div>
        </div>

        <nav class="nav-links">
          <RouterLink to="/#hero">Home</RouterLink>
          <RouterLink to="/#programs">Programs Offered</RouterLink>
          <RouterLink to="/#faculty">Faculty & Staff</RouterLink>
          <RouterLink to="/#partnerships">Partnerships</RouterLink>
        </nav>
      </div>
    </header>

    <!-- Router View loads MainPage containing the 4 view sections -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Fallback smooth scrolling as noted in slide 5 */
html {
  scroll-behavior: smooth;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #1f2937;
  background-color: #ffffff;
}

body {
  width: 100%;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #0d2818;
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 1.5rem;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-logo {
  height: 42px;
  width: auto;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-weight: 700;
  font-size: 1.15rem;
  color: #f4c430;
  line-height: 1.2;
}

.brand-sub {
  font-size: 0.75rem;
  color: #d1d5db;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #e5e7eb;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #f4c430;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 0.75rem;
  }

  .nav-links {
    gap: 1rem;
    font-size: 0.85rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>




















