<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="modal-block" v-if="reveal">

      <div class="overlay-modal" v-on:click="toggleModal"></div>

      <div class="modal card animate__animated animate__fadeInDown">
        <button v-on:click="toggleModal">X</button>
        <div>
          <profileCard class="profile-card" />
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import profileCard from './apps/profileCard.vue'

export default {
  name: 'Contact',
  props: ['reveal', 'toggleModal'],
  components: {
    'profileCard': profileCard
  }
}
</script>

<style scoped>
  
  .modal-block {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay-modal {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
  }

  .modal {
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
    top: 10%;
    border-radius: 4px;
    width: 50vw;
    height: 60vh;
  }
  
  .modal button {
    cursor: pointer;
    outline: none;
    border-style: none;
    background: transparent;
    font-size: 20px;
    line-height: 1;
    color: rgb(197, 0, 0);
    border: solid 2px rgb(197, 0, 0);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: all 0.2s linear;
    top: 10px;
    right: 10px;
    position: absolute;
  }

  .modal button:hover {
    background: rgb(197, 0, 0);
    color: #f1f1f1;
  }

  .profile-card {
    position: absolute;
    right: 150px;
    top: 80px;
  }

</style>