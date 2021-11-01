<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Banner from './components/banner/Banner.vue';
</script>

<template>
  <!-- PAGE CONTENT -->
  <transition
  mode="out-in"
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
  >
    <router-view/>
  </transition>
  <!-- BANNER -->
  <Banner/>
</template>