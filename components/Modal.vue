<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add new topic</h5>
        <button ref="Close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <!-- Form  -->

            <form @submit.prevent="create">
      <div class="modal-body">
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

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
          </form>

    </div>
  </div>
</div>
</template>

<script>
export default {
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
        this.$refs.Close.click();
        this.$emit('myEvent')
      } catch (e) {
        console.log(e);
      }
    },
  },

}
</script>

<style>

</style>