<script lang="ts">
import { defineComponent } from '../../../node_modules/@vue/runtime-core';
import Contact from '../Contact.vue';
import BannerLink from './BannerLink.vue';

export default defineComponent({
    data() {
      return {
        reveal: false,
      }
    },
    methods: {
      toggleModal: function(){
        this.reveal = !this.reveal
      },
    },
    components: {
    "contact": Contact,
    BannerLink
},
})

// export default {}
</script>

<template>
  <!-- Banner -->
  <div class="banner">
    <img src="../../assets/lbAntoine@2x.png" class="logo">
    <div class="nav-bar">
      <banner-link to="/">Home</banner-link>
      <banner-link to="/Projects">Projects</banner-link>
      <banner-link to="/Resume">Resume</banner-link>
      <button v-on:click="toggleModal">Contact Antoine</button>
    </div>
  </div>
  <!-- Modal CONTACT -->
  <contact v-bind:reveal="reveal" v-bind:toggleModal="toggleModal"/>
</template>

<style>
@import '../../styles/processed/Banner.css';
</style>

<style scoped>
.link.active {
  color: #399D81;
}
</style>