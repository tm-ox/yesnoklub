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
      <div class="flex gap-5 sm:gap-3">
        <a href="https://www.instagram.com/yes.no.klub/" target="_blank"
          ><Ig class="w-7 h-7 sm:w-5 sm:h-5" />
        </a>
        <a href="https://www.facebook.com/yesnoklubyk" target="_blank"
          ><Fb class="w-7 h-7 sm:w-5 sm:h-5" />
        </a>
        <a href="https://soundcloud.com/yesnoklub" target="_blank"
          ><Sc
            class="w-7 h-7 sm:w-5 sm:h-5 fill-tertiary hover:fill-hover dark:fill-hover dark:hover:fill-secondary trans"
          />
        </a>
      </div>
      <ColorMode />
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
