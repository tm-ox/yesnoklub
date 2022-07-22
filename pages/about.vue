<template>
  <section class="full-page">
    <div :data="pages" v-for="page of pages" :key="page.slug">
      <div class="flex flex-col sm:flex-row -translate-y-0 sm:translate-y-12">
        <FadeDown>
          <h2
            class="text-xl sm:text-2xl text-left sm:text-right break-words translate-y-0 sm:-translate-y-12"
          >
            {{ page.description }}
          </h2>
        </FadeDown>
        <FadeUp>
          <ContentRenderer
            :value="page"
            class="text-left columns-1 xl:columns-2"
          />
        </FadeUp>
      </div>
      <FadeLeft>
        <h5
          class="mt-8 xl:ml-72 font-light text-right normal-case -rotate-3 -translate-y-0 sm:translate-y-12"
        >
          {{ page.foundation }}
        </h5>
      </FadeLeft>
    </div>
  </section>
</template>

<script setup>
const { data: pages } = await useAsyncData("pages", () =>
  queryContent("/pages/about").find()
);
</script>
