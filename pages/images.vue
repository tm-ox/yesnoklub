<template>
  <section class="full-page mt-24">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2"
    >
      <template :data="images" v-for="image of images" :key="image.slug">
        <Lightbox>
          <template v-slot:summary>
            <FadeDown>
              <h5 class="text-left mb-1">{{ image.title }}</h5>
            </FadeDown>
            <FadeLeft class="bg-primary w-full rounded">
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + image.image + ')' }"
                class="bg-cover aspect-[4/3] mb-1 hover:opacity-60 rounded trans"
              />
            </FadeLeft>
          </template>
          <template v-slot:details>
            <div
              class="flex flex-col h-fit my-auto mt-24 items-start justify-center gap-2"
            >
              <FadeLeft class="w-full">
                <div>
                  <h5 class="mb-0">{{ image.title }}</h5>
                </div>
              </FadeLeft>
              <FadeLeft class="max-w-3/4">
                <img
                  :src="image.image"
                  :alt="image.title"
                  class="w-full rounded"
                />
              </FadeLeft>
              <FadeUp>
                <div>
                  <h3>{{ image.with }}</h3>
                  <h4 class="normal-case">{{ image.date }}</h4>
                  <h5 class="mb-0">{{ image.venue }}</h5>
                  <a :href="image.venueURL" target="_blank">
                    <h5 class="normal-case">
                      {{ image.venueURL }}
                    </h5>
                  </a>
                </div>
              </FadeUp>
            </div>
          </template>
        </Lightbox>
      </template>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Images - Yes No Klub",
});
const { data: images } = await useAsyncData("images", () =>
  queryContent("/images").sort({ date: -1 }).find()
);
</script>
