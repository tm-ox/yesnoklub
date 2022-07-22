<template>
  <nav
    class="fixed inset-0 z-50 flex flex-col justify-center bg-secondary dark:bg-tertiary bg-opacity-90"
  >
    <button
      class="absolute right-6 top-6 hover:text-hover"
      title="Close"
      @click="$emit('close')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-12 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="square"
          stroke-linejoin="round"
          stroke-width="4"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <Nav class="mb-36" />
  </nav>
</template>

<script setup>
const route = useRoute();
const emit = defineEmits(["close"]);

watch(route, () => {
  emit("close");
});
</script>
