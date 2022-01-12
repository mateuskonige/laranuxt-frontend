<template>
  <div>
    <h2>User profile page</h2>
    <p>loggedIn User: {{ $store.state.auth.user.name }}</p>
  </div>
</template>

<script>
export default {
     middleware: 'auth'
};
</script>