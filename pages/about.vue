<template>
  <section class="full-page">
    <div :data="pages" v-for="page of pages" :key="page.slug">
      <div class="flex flex-col md:flex-row -translate-y-0 md:translate-y-12">
        <FadeDown>
          <h2
            class="text-xl sm:text-2xl text-left md:text-right break-words translate-y-0 md:-translate-y-12 mb-4"
          >
            {{ page.description }}
          </h2>
        </FadeDown>
        <FadeUp>
          <ContentRenderer
            :value="page"
            class="text-left columns-1 xl:columns-2 gap-0 xl:gap-5"
          />
        </FadeUp>
      </div>
      <FadeLeft>
        <h5
          class="mt-0 md:mt-12 xl:ml-80 font-normal text-right normal-case -rotate-3 -translate-y-0 sm:translate-y-12"
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
