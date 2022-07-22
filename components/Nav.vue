<template>
  <ul>
    <li>
      <NuxtLink to="about" class="nav-item">About</NuxtLink>
    </li>
    <li>
      <NuxtLink to="events" class="nav-item">Events</NuxtLink>
    </li>
    <li>
      <NuxtLink to="contact" class="nav-item">Contact</NuxtLink>
    </li>
    <li>
      <ColorMode />
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
