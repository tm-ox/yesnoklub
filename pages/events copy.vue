<template>
  <section class="mt-32 justify-start">
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      <template :data="events" v-for="event of events" :key="event.slug">
        <div>
          <h5>{{ event.title }}</h5>
          <img :src="event.flyer" alt="" />
          <!-- <ContentRenderer :value="event" /> -->
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
const { data: events } = await useAsyncData("events", () =>
  queryContent("/events").sort({ date: -1 }).find()
);
</script>
