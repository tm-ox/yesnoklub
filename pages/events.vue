<template>
  <section class="full-page mt-24">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2"
    >
      <template :data="events" v-for="event of events" :key="event.slug">
        <Lightbox>
          <template v-slot:summary>
            <FadeDown>
              <h5 class="text-left mb-1">{{ event.title }}</h5>
            </FadeDown>
            <FadeLeft class="bg-primary rounded">
              <img
                :src="event.flyer"
                alt="{{ event.title }}"
                class="mb-1 hover:opacity-60 rounded trans"
              />
            </FadeLeft>
          </template>
          <template v-slot:details>
            <div
              class="flex flex-col sm:flex-row h-fit my-auto mt-24 items-start justify-center gap-6 pb-4"
            >
              <FadeUp class="w-full md:w-full sm:w-1/3">
                <img
                  :src="event.flyer"
                  :alt="event.title"
                  class="mb-1 w-full rounded"
                />
              </FadeUp>
              <FadeLeft class="w-full">
                <div>
                  <h5>{{ event.title }}</h5>
                  <h3>{{ event.with }}</h3>
                  <h4 class="normal-case">{{ event.date }} {{ event.time }}</h4>
                  <h5 class="mb-0">{{ event.venue }}</h5>
                  <a :href="event.venueURL" target="_blank">
                    <h5 class="normal-case">
                      {{ event.venueURL }}
                    </h5>
                  </a>
                  <h4 class="normal-case">{{ event.info }}</h4>
                  <ContentRenderer :value="event" />
                </div>
              </FadeLeft>
            </div>
          </template>
        </Lightbox>
      </template>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Events - Yes No Klub",
});
const { data: events } = await useAsyncData("events", () =>
  queryContent("/events").sort({ date: -1 }).find()
);
</script>
