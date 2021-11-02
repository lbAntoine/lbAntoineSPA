<script lang="ts">
import ProfileCard from "./apps/profileCard.vue";

export default {
  components: {
    'ProfileCard': ProfileCard,
  }
}

</script>

<template>
  <div class="main-container">
    <section class="section landing">
      <a href="https://github.com/lbAntoine?tab=repositories" target="_blank"><h1 data-text="PROJECTS...">PROJECTS...</h1></a>
    </section>

    <section class="section bot">
      <div class="text-wrapper">
        <h1>Discord <span>bots</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <a href="https://github.com/lbAntoine/MDL-1.1" target="_blank"><div class="presentation">
        Antoine: <p class="first-line">/askWeather</p>
        bot: <p class="second-line">From where would you like to know the weather?</p>
        Antoine: <p class="third-line">Aix-en-Provence</p>
        bot: <p class="fourth-line">Weather for Aix-en-Provence: Sunny, 28°C</p>
      </div></a>
    </section>

    <section class="section prob-calc">
      <a href="https://github.com/lbAntoine/cardProbabilityCalculator" target="_blank">
        <img src="../assets/projects/cardProbabilityCalculator.gif">
      </a>
      <div class="text-wrapper">
        <h1>Card <span>probability</span> calculator</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </section>

    <section class="section csv-converter">
      <div class="text-wrapper">
        <h1>CSV <span>converter</span> in <span>python</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <a href="https://github.com/lbAntoine/csvConverter.py" target="_blank">
        <img src="../assets/projects/csvConverter.gif">
      </a>
    </section>

    <section class="section product-card">
      <a href="https://github.com/lbAntoine/product-profileCard" target="_blank">
        <ProfileCard />
      </a>
      <div class="text-wrapper">
        <h1><span>Interactive</span> profile - product <span>card</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </section>

  </div>
</template>

<style lang="css">
  @import '../styles/processed/Work.css';
</style>