<template>
  <nav
    class="fixed inset-0 z-50 flex flex-col justify-center bg-secondary dark:bg-tertiary bg-opacity-90 dark:bg-opacity-90"
  >
    <!-- Close Button -->
    <button
      class="absolute right-6 top-6 hover:text-hover"
      title="Close"
      @click="$emit('close')"
    >
      <Close />
    </button>
    <Nav />
  </nav>
</template>

<script setup>
const route = useRoute();
const emit = defineEmits(["close"]);

watch(route, () => {
  emit("close");
});
</script>
