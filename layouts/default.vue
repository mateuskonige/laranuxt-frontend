<template>
  <div>
      <Navbar/>
      <nuxt keep-alive />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar },

}
</script>