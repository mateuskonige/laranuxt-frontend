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
          <nuxt-link to="/topics" class="nav-link">Topics</nuxt-link>

          <div v-if="$auth.loggedIn">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ $auth.user.name }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <nuxt-link to="/dashboard" class="nav-link">Create</nuxt-link>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a @click="logout" class="nav-link">Logout</a></li>
              </ul>
            </li>
          </div>
          <div class="d-flex" v-else>
            <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
            <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    },
    catch(e) {
      console.log(e);
    },
  },
};
</script>
