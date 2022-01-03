<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <nuxt-link to="/" class="navbar-brand">LaraNuxt</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          <nuxt-link to="/" class="nav-link">Posts</nuxt-link>
        </div>
      </div>

      <div class="navbar-nav">
        <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
        <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

};
</script>
