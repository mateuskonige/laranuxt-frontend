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

    <div v-if="!authenticated">
            <div class="navbar-nav">
        <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
        <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
      </div>

    </div>

        <div v-if="authenticated">
            <div class="navbar-nav">
        <nuxt-link to="/profile" class="nav-link">{{user.name}}</nuxt-link>
        <a @click="logout" class="nav-link">Logout</a>
      </div>

    </div>
    </div>



  </nav>
</template>

<script>
export default {
methods: {
  logout() {
    this.$auth.logout()
  }
}
};
</script>
