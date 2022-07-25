<template>
  <div>
    <button @click="setActive" class="w-full">
      <slot name="summary" />
    </button>
    <div
      class="hidden site-padding trans fixed top-0 left-0 right-0 h-screen bottom-0 bg-secondary dark:bg-tertiary !bg-opacity-95 overflow-auto no-scrollbar z-50"
      :class="{ active }"
    >
      <button
        @click="setActive"
        class="absolute right-0 top-6 hover:text-hover site-padding"
      >
        <FadeDown>
          <Close />
        </FadeDown>
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
