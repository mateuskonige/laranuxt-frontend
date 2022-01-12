<template>
  <div class="container cols-md-6 mt-5">
    <h1>Latest Topics</h1>
    <hr />
    <div
      v-for="(topic, index) in topics"
      :key="index"
      class="bg-light my-3 p-3"
    >
      <h2>{{ topic.title }}</h2>
      <p>
        <small class="text-muted"
          >{{ topic.created_at }} by {{ topic.user.name }}</small
        >
      </p>
      <div v-for="(content, index) in topic.posts" :key="index">
        <p>{{ content.body }}</p>
        <p>
          <small class="text-muted"
            >{{ content.created_at }} by {{ content.user.name }}</small
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [],
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get("topics");
    return { topics: res.data };
  },
};
</script>

<style>
</style>