<template>
  <header>
    <nav>
      <NuxtLink to="/" class="flex items-center w-full"
        ><Ynk />
        <h4 class="mx-auto md:ml-6 mb-0 text-2xl md:text-lg">
          Yes No Klub
        </h4></NuxtLink
      >
      <!-- Main Nav -->
      <Nav class="hidden md:flex ml-auto" />
      <!-- Mobile Nav Button -->
      <div class="flex md:hidden ml-auto">
        <button title="Menu" @click="mobileMenuOpen = true">
          <svg
            class="w-12 h-8 p-0 m-0 md:hidden text-primary hover:text-hover"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="square"
              stroke-linejoin="round"
              stroke-width="6"
              d="M4 6h23M4 18h23"
            />
          </svg>
        </button>
      </div>
      <!-- Mobile Nav -->
      <transition name="menu">
        <NavMobile v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
      </transition>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
