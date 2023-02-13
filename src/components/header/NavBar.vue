<template>
  <nav>
    <div class="navigation-search"></div>
    <router-link to="/wish" class="navigation-wish"></router-link>
    <router-link to="/" class="navigation-home"
      ><img src="@/assets/images/logo.png" alt=""
    /></router-link>
    <router-link to="/"
      ><img src="@/assets/images/Cart.png" alt=""
    /></router-link>
    <button class="navigation-menu" @click="ShowCloseMenu"></button>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store/index";
export default Vue.extend({
  computed: {
    showMenu(): Boolean {
      return store.state.showMenu;
    },
  },
  methods: {
    ShowCloseMenu() {
      store.commit("ShowCloseMenu", !store.state.showMenu);
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/header/NavBar";
</style>