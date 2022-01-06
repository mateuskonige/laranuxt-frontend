<template>
  <div class="container cols-md-6 mt-5">
    <h1>Register</h1>
    <hr />

    <form @submit.prevent="submit">
      <div class="mb-3">
        <label class="form-label">Full name</label>
        <input
          v-model.trim="form.name"
          type="text"
          class="form-control"
          placeholder="Enter your name"
          autofocus
        />
        <small class="alert-danger" v-if="errors.name">{{
          errors.name[0]
        }}</small>
      </div>

      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          v-model.trim="form.email"
          type="email"
          class="form-control"
          placeholder="Enter e-mail"
        />
        <small class="alert-danger" v-if="errors.email">{{ errors.email[0] }}</small>
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model.trim="form.password"
          placeholder="Enter your password"
        />
        <small class="alert-danger" v-if="errors.password">{{ errors.password[0] }}</small>
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <br />
    <p>Already have an accont? <nuxt-link to="/login">Login</nuxt-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        await this.$axios.$post("register", this.form);

        let response = await this.$auth.loginWith("local", {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
