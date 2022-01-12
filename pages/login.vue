<template>
  <div class="container cols-md-6 mt-5">
    <h1>Login</h1>
    <hr />
    <form @submit.prevent="userLogin">
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          type="email"
          v-model.trim="login.email"
          class="form-control"
          placeholder="Enter e-mail"
          autofocus
        />
        <small class="alert-danger" v-if="errors.email">{{
          errors.email[0]
        }}</small>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          type="password"
          v-model="login.password"
          class="form-control"
          placeholder="Enter your password"
        />
        <small class="alert-danger" v-if="errors.password">{{
          errors.password[0]
        }}</small>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br />
    <p>Don't have an accont? <nuxt-link to="/register">Register</nuxt-link></p>
  </div>
</template>

<script>
export default {
  middleware: 'guest',

  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        const res = await this.$auth.loginWith('local', { data: this.login });
        
        console.log(res);

        this.$router.push({
          path: this.$route.query.redirect || "/dashboard",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>