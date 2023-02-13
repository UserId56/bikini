<template>
  <div class="contact">
    <span class="contact--title" v-if="!isMenu">Контактные данные</span>
    <a href="mailto:test@test.ru" class="contact--mail">zakaz@demotest.com</a>
    <a href="tel:+79999999999" class="contact--tel">8 (888) 999 99-88</a>
    <div class="contact--social">
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
          ><img src="@/assets/images/inst.png" alt="https://www.instagram.com/"
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    isMenu: Boolean,
  },
});
</script>

<style lang="scss">
@import "@/styles/Contact.scss";
</style>
