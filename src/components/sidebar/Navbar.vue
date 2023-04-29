<template>
    <div class="menu-nav">
        <b-navbar type="dark" variant="dark">
    <b-navbar-brand href="#">My App</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">About</b-nav-item>
      <b-nav-item v-if="!isLoggedIn" href="#">Login</b-nav-item>
      <b-nav-item v-else href="#" @click="logout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
    </div>
  
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$emit('logout')
    }
  }
}
</script>

<style>
    .menu-nav {
        padding-right: 0px;
        padding-left: 0px;
    }
</style>