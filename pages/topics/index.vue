<template>
  <div class="container cols-md-6 mt-5">
    <div class="d-flex justify-content-between">
      <h1>Latest Topics</h1>
      <!-- Button trigger modal -->
      <button
        v-if="$auth.loggedIn"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add
      </button>
    </div>

    <Modal @myEvent="doSomething"/>
    <hr />

    <Loading v-if="$fetchState.pending" />

    <div v-else>
      <div
        v-for="(topic, index) in topics"
        :key="index"
        class="bg-light my-3 p-3"
      >
        <nuxt-link
          class="fs-2"
          :to="{ name: 'topics-id', params: { id: topic.id } }"
          >{{ topic.title }}</nuxt-link
        >
        <p>
          <small class="text-muted"
            >{{ topic.created_at }} by {{ topic.user.name }}</small
          >
        </p>
        <div class="px-4" v-for="(content, index) in topic.posts" :key="index">
          <p>{{ content.body }}</p>
          <p>
            <small class="text-muted"
              >{{ content.created_at }} by {{ content.user.name }}</small
            >
          </p>
        </div>
      </div>

      <nav>
        <ul class="pagination justify-content-center">
          <li
            v-for="(key, value) in links"
            :key="key"
            :class="[key ? 'page-item' : 'page-item disabled']"
          >
            <a class="page-link" @click="loadMore(key)">{{ value }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [],
      links: "",
    };
  },
  async fetch() {
    await this.getTopics();
  },
  fetchDelay: 1000,

  methods: {
    async getTopics() {
      const data = this.$axios.$get("topics");
      const res = await data;
      console.log(res);
      this.topics = res.data;
      this.links = res.links;
    },
    async loadMore(key) {
      try {
        const data = this.$axios.$get(key);
        const res = await data;
        console.log(res);

        this.topics = res.data;
        this.links = res.links;
      } catch (error) {
        console.log(error);
      }
    },
    doSomething() {
      this.$fetch()
    }
  },
};
</script>
