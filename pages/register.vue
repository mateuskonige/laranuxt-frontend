<template>
  <div class="container cols-md-6 mt-5">
    <h1>Register</h1>
    <hr />
    <form>
      <div class="mb-3">
        <label class="form-label">Full name</label>
        <input type="text" class="form-control" placeholder="Enter your name" />
        <div class="alert-danger">Some errors here</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" placeholder="Enter e-mail" />
        <div class="alert-danger">Some errors here</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
        />
        <div class="alert-danger">Some errors here</div>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <br />
    <p>Have an accont? <nuxt-link to="/login">Login</nuxt-link></p>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
