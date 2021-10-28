<template>
  <div class="super-main-container">
    <!-- Landing -->
    <div class="section landing" id="landing"></div>

    <!-- About -->
    <div class="section about" id="about">
      <div class="text-wrapper" v-scrollanimation>
        <h1 class="about-title">I am a <span>web developer</span><br>and a <span>tech enthousiast</span></h1>
        <p>Born and raised in France, I started web development in 2021. Entering the CESI (École Supérieure de l'Alternance) in Aix-en-Provence, I started working as a web developer (apprenticeship) in september 2021 for a company that creates web application for temporary worker managment. My love for solving problems and providing solution to enhance the quality of life of other people are few of the reasons that motivate me to perform in this field. My curiosity tends to lead me into studying new things and be critic about my old works.</p>
      </div>
      <img class="about-picture" src="../assets/rec.jpg" v-scrollanimation>
    </div>

    <!-- dev.to shoutout -->
    <div class="section devto" id="devto">
      <a src="https://dev.to/tomatowizard" traget="_blank" class="mask" style="--image-height:-350px" v-scrollanimation>
        <img src="../assets/devtoArticleExemple.jpg" alt="Dev.to exemple" class="devpage">
      </a>
      <div class="text-wrapper" v-scrollanimation>
        <h1>Follow my <span>journey</span> on <a href="https://dev.to/tomatowizard" target="_blank"><span class="link">dev.to</span></a></h1>
        <p>I post regularly about my journey as a fresh junior developer on my dev.to page. While it's mainly about becoming a better developer, I share my view on my learning curve and the content of what I learn 📚 with a little bit of casual life, I try to make a story about me with a little flavor that makes people want to stay and read my next adventure! Come say hi <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"></p>
      </div>
    </div>

    <!-- About 2 -->
    <div class="section about-2" id="about-2">
      <div class="text-wrapper" v-scrollanimation>
          <h1>I studied <span>arts</span> and <span>cinema</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <img class="about-picture-2" src="../assets/childme.jpg" v-scrollanimation>
    </div>

    <!-- PARTY-3 -->
    <div class="section party" id="partylax">
      <div class="layer"></div>
    </div>

    <!-- End -->
    <div class="end" id="around">
      <h1 class="mot-de-fin" v-scrollanimation>I am also an <span>amateur photographer</span><br>and <span>philosophy reader</span>. A <span>cat lover</span>,<br><span>card game player</span>, <span>coffee drinker</span> and <span>pizza fanatic</span>.</h1>
      <div class="footer">
        <p class="footer-text">fueled with fun and big dreams :)</p>
        <div class="footer-socials">
          <a href="https://www.linkedin.com/in/antoine-le-bras/" target="_blank"><img src="../assets/linkedin2.png"/></a>
          <a href="https://twitter.com/tomato_wizard" target="_blank"><img src="../assets/twitter2.png"/></a>
          <a href="https://github.com/lbAntoine" target="_blank"><img src="../assets/github.png"/></a>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="css">
  @import '../styles/processed/Home.css';

  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
</style>