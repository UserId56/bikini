<template>
  <div id="app">
    <NavBar />
    <MenuList />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import store from "@/store/index";
import NavBar from "@/components/header/NavBar.vue";
import MenuList from "@/components/header/MenuList.vue";
export default Vue.extend({
  components: {
    NavBar,
    MenuList,
  },
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
</style>
