<script lang="ts">
import { defineComponent } from '../node_modules/@vue/runtime-core'
import Contact from './components/Contact.vue'

export default defineComponent({
    data() {
      return {
        reveal: false
      }
    },
    methods: {
      toggleModal: function(){
        this.reveal = !this.reveal
      }
    },
    components: { 
        'contact': Contact
      }
})
</script>

<template>
  <!-- Banner -->
  <div class="banner">
    <img src="./assets/lbAntoine@2x.png" class="logo">
    <div class="nav-bar">
      <a href="/" class="active">Home</a>
      <a href="#about">About</a>
      <a href="/Projects">Projects</a>
      <a href="/Resume">Resume</a>
      <button v-on:click="toggleModal">Contact Antoine</button>
    </div>
  </div>
  <!-- PAGE CONTENT -->
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <router-view/>
  </transition>
  <!-- Modal CONTACT -->
  <contact v-bind:reveal="reveal" v-bind:toggleModal="toggleModal"/>
</template>

<style>
@import './styles/processed/Banner.css';
</style>