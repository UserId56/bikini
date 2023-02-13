<template>
  <div
    class="menu"
    :class="{
      'mobi-menu-show': showMenu,
    }"
  >
    <div class="menu-header">
      <span class="menu-header--title">Меню</span>
      <button class="navigation-menu--close" @click="ShowCloseMenu"></button>
    </div>
    <div class="menu-list">
      <ul>
        <li class="menu-list--item">Каталог</li>
        <li class="menu-list--item">Размеры</li>
        <li class="menu-list--item">Доставка и оплата</li>
        <li class="menu-list--item">Отзывы</li>
        <li class="menu-list--item">Создай свой купальник</li>
        <li class="menu-list--item">Сертификаты</li>
        <li class="menu-list--item">Контакты</li>
        <li class="text--red-color menu-list--item">Распродажа до -40%</li>
        <li class="menu-list--item">Реальные отзывы</li>
      </ul>
    </div>
    <Contacts :is-menu="true" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store/index";

import Contacts from "@/components/Contacts.vue";

export default Vue.extend({
  components: {
    Contacts,
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
@import "@/styles/header/MenuList";
</style>