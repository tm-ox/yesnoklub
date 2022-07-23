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
    <li
      class="flex flex-col md:flex-row gap-0 md:gap-5 justify-center items-center"
    >
      <div class="flex gap-5 md:gap-3 mt-6 md:mt-0">
        <a href="https://www.instagram.com/yes.no.klub/" target="_blank"
          ><Ig class="sosmed" />
        </a>
        <a href="https://www.facebook.com/yesnoklubyk" target="_blank"
          ><Fb class="sosmed" />
        </a>
        <a href="https://soundcloud.com/yesnoklub" target="_blank"
          ><Sc class="sosmed" />
        </a>
      </div>
      <ColorMode class="mt-6 md:mt-0" />
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
