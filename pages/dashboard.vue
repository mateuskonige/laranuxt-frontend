<template>
  <div class="container cols-md-6 mt-5">
    <h1>Create a new Topic</h1>
    <hr />
    <form @submit.prevent="create">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input
          type="text"
          v-model="form.title"
          class="form-control"
          placeholder="Enter topic title"
          autofocus
        />
        <small class="alert-danger" v-if="errors.title">{{
          errors.title[0]
        }}</small>
      </div>
      <div class="mb-3">
        <label class="form-label">Body</label>
        <textarea
          class="form-control"
          v-model="form.body"
          placeholder="Enter topic body"
          rows="5"
        ></textarea>
        <small class="alert-danger" v-if="errors.body">{{
          errors.body[0]
        }}</small>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",

  data() {
    return {
      form: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    async create() {
      try {
        const res = await this.$axios.$post("topics", this.form);
        console.log(res.data);
        this.form = {};
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
