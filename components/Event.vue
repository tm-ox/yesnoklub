<template>
  <div>
    <button @click="setActive">
      <slot name="summary" />
    </button>
    <div
      class="hidden site-padding trans fixed top-0 left-0 right-0 h-screen bottom-0 bg-secondary dark:bg-tertiary !bg-opacity-95 overflow-auto no-scrollbar z-50"
      :class="{ active }"
    >
      <button @click="setActive" class="fixed top-20 right-0 site-padding">
        <FadeDown
          ><svg
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-primary hover:fill-hover w-8 h-8 trans"
          >
            <path
              d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z"
            /></svg
        ></FadeDown>
      </button>
      <slot name="details" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    setActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.active {
  @apply block;
}
</style>
