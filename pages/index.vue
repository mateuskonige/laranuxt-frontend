<template>
  <div  class="container cols-md-6 mt-5">
    <h1>Home page</h1>
    <hr>

    <div v-if="$auth.loggedIn">
      <span>Hello, {{ $auth.user.name }}</span>
      <br>
            <span>Navigate to <nuxt-link to="/topics">Topics</nuxt-link> to see latest topics created, or <nuxt-link to="/dashboard">create a new topic</nuxt-link>!</span>
      <br>

    </div>

    <div v-else>
      <span>Navigate to <nuxt-link to="/topics">Topics</nuxt-link> to see latest topics created.</span>
      <br>
      <nuxt-link to="/login">Log In</nuxt-link> <span>to create Topics</span>
    </div>
  </div>
</template>

<script>
export default {
  
  auth: false
}
</script>
