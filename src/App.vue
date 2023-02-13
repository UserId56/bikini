<template>
  <div id="app">
    <nav>
      <div class="navigation-search"></div>
      <router-link to="/wish" class="navigation-wish"></router-link>
      <router-link to="/" class="navigation-home"
        ><img src="@/assets/images/logo.png" alt=""
      /></router-link>
      <router-link to="/"
        ><img src="@/assets/images/Cart.png" alt=""
      /></router-link>
      <button class="navigation-menu" @click="showMenu = !showMenu"></button>
    </nav>
    <div
      class="menu"
      :class="{
        'mobi-menu-show': showMenu,
      }"
    >
      <div class="menu-header">
        <span class="menu-header--title">Меню</span>
        <button
          class="navigation-menu--close"
          @click="showMenu = !showMenu"
        ></button>
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
      <div class="menu-contact">
        <a href="mailto:test@test.ru" class="menu-contact--mail"
          >zakaz@demotest.com</a
        >
        <a href="tel:+79999999999" class="menu-contact--tel"
          >8 (888) 999 99-88</a
        >
        <div class="menu-contact--social">
          <div class="social-item">
            <a href="https://vk.com/" target="_blank"
              ><img src="@/assets/images/vk.png" alt="https://vk.com/"
            /></a>
          </div>
          <div class="social-item">
            <a href="https://www.whatsapp.com/?lang=ru" target="_blank"
              ><img
                src="@/assets/images/wapp.png"
                alt="https://www.whatsapp.com/?lang=ru"
            /></a>
          </div>
          <div class="social-item">
            <a href="https://ru-ru.facebook.com/" target="_blank"
              ><img
                src="@/assets/images/facebook.png"
                alt="https://ru-ru.facebook.com/"
            /></a>
          </div>
          <div class="social-item">
            <a href="https://www.instagram.com/" target="_blank"
              ><img
                src="@/assets/images/inst.png"
                alt="https://www.instagram.com/"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      showMenu: false,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/app.scss";
</style>
