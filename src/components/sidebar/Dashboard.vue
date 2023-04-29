<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 mobile-menu">
          <sidebar></sidebar>
        </div>
        <div class="col-md-10 col-sx-12">
          <navbar :isLoggedIn="isLoggedIn" @logout="logout"></navbar>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Navbar from './Navbar.vue'
export default {
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      sidebarOpen: true,
      isLoggedIn: false,
    };
  },
  computed: {},
  methods: {
    logout() {
      console.log('Call logout');
    }
  },
};
</script>

<style scoped>
.row div {
  padding-left: 0px;
  padding-right: 0px;
}
.mobile-menu {
  background-color: rgb(98, 100, 100);
}
@media only screen and (max-width: 768px) {
  .mobile-menu {
      display: none;
}
}


</style>
