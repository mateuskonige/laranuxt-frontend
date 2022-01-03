<template>
  <div class="container cols-md-6 mt-5">
    <h1>Login</h1>
    <hr />
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" v-model.trim="form.email" class="form-control" placeholder="Enter e-mail" autofocus/>
        <div class="alert-danger">Some errors here</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          type="password"
          v-model="form.password"
          class="form-control"
          placeholder="Enter your password"
        />
        <div class="alert-danger">Some errors here</div>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br />
    <p>Don't have an accont? <nuxt-link to="/register">Register</nuxt-link></p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        async submit() {
            await this.$auth.loginWith("local", {
                data: this.form
            })

            this.$router.push("/")
        }
    }
};
</script>

<style>
</style>