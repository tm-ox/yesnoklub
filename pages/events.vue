<template>
  <section class="full-page mt-32">
    <div
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2"
    >
      <template :data="events" v-for="event of events" :key="event.slug">
        <Event>
          <template v-slot:summary>
            <!-- <FadeDown> -->
            <h5 class="text-left mb-1">{{ event.title }}</h5>
            <!-- </FadeDown>
            <FadeLeft> -->
            <img :src="event.flyer" alt="{{ event.title }}" class="mb-1" />
            <!-- </FadeLeft> -->
          </template>
          <template v-slot:details>
            <div
              class="flex flex-col sm:flex-row h-fit my-auto mt-36 items-start justify-center gap-6 pb-4"
            >
              <!-- <FadeUp> -->
              <img
                :src="event.flyer"
                alt="{{ event.title }}"
                class="mb-1 w-full sm:w-2/4 md:w-max"
              />
              <!-- < /FadeUp> -->
              <!-- <FadeLeft> -->
              <div class="w-full">
                <h5>{{ event.title }}</h5>
                <h3>{{ event.with }}</h3>
                <h4 class="normal-case">{{ event.date }} {{ event.time }}</h4>
                <h5 class="mb-0">{{ event.venue }}</h5>
                <h5 class="normal-case">{{ event.venueURL }}</h5>
                <h4 class="normal-case">{{ event.info }}</h4>
                <ContentRenderer :value="event" />
              </div>
              <!-- </FadeLeft> -->
            </div>
          </template>
        </Event>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: events } = await useAsyncData("events", () =>
  queryContent("/events").sort({ date: -1 }).find()
);
</script>
