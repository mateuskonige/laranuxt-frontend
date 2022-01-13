<template>
  <div class="container cols-md-6 mt-5">
    <nuxt-link class="btn btn-outline-primary" to="/topics">Back</nuxt-link>
    <hr />

        <Loading v-if="$fetchState.pending" />


    <div v-else>
            <span># {{ topic.id }}</span>
    <h2>{{ topic.title }}</h2>

    <small>{{ topic.created_at }} by {{ topic.user.name }}</small>
    <hr />
            <div class="px-4" v-for="(content, index) in topic.posts" :key="index">
          <p>{{ content.body }}</p>
          <p>
            <small class="text-muted"
              >{{ content.created_at }} by {{ content.user.name }}</small>
          </p>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: {},
    };
  },
  async fetch() {
    await this.getSingleTopic();
  },
  fetchDelay: 1000,

  methods: {
    async getSingleTopic() {
      const data = this.$axios.$get(`topics/${this.$route.params.id}`);
      const res = await data;
      console.log(res.data);
      this.topic = res.data;
    },
  },
};
</script>