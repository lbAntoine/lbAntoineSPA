<template>
  <div class="main-container">
    <!-- Landing -->
    <div class="section landing" id="landing">
      <!-- Banner -->
      <div class="banner">
        <img src="../assets/lbAntoine@2x.png" class="logo">
        <div class="nav-bar">
          <a href="#landing" class="active">Home</a>
          <a href="#about">About</a>
          <a href="/Projects">Projects</a>
          <a href="/Resume">Resume</a>
          <button>Contact Antoine</button>
        </div>
      </div>
    </div>

    <!-- About -->
    <div class="section about" id="about">
      <div class="text-wrapper">
        <h1 class="about-title">I am a <span>web developer</span><br>and a <span>tech enthousiast</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <img class="about-picture" src="../assets/rec.jpg">
    </div>

    <!-- dev.to shoutout -->
    <div class="section devto" id="devto">
      <a src="https://dev.to/tomatowizard" traget="_blank" class="mask" style="--image-height:-350px">
        <img src="../assets/devtoArticleExemple.jpg" alt="Dev.to exemple" class="devpage">
      </a>
      <div class="text-wrapper">
        <h1>Follow my <span>journey</span> on <a href="https://dev.to/tomatowizard" target="_blank"><span class="link">dev.to</span></a></h1>
        <p>I post regularly about my journey as a fresh junior developer on my dev.to page. While it's mainly about becoming a better developer, I share my view on my learning curve and the content of what I learn 📚 with a little bit of casual life, I try to make a story about me with a little flavor that makes people want to stay and read my next adventure! Come say hi <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"></p>
      </div>
    </div>

    <!-- About 2 -->
    <div class="section about-2" id="about-2">
      <div class="text-wrapper">
          <h1>I studied <span>arts</span> and <span>cinema</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <img class="about-picture-2" src="../assets/childme.jpg">
    </div>

    <!-- PARTY-3 -->
    <div class="section party" id="partylax">
      <div class="layer"></div>
    </div>

    <!-- End -->
    <div class="section end" id="around">
      <h1 class="mot-de-fin">I am also an <span>amateur photographer</span><br>and <span>philosophy reader</span>. A <span>cat lover</span>,<br><span>card game player</span>, <span>coffee drinker</span> and <span>pizza fanatic</span>.</h1>
      <div class="footer">
        <p class="footer-text">fueled with fun and big dreams :)</p>
        <div class="footer-socials">
          <a href="https://www.linkedin.com/in/antoine-le-bras/" target="_blank"><img src="../assets/linkedin2.png"/></a>
          <a href="" target="_blank"><img src="../assets/twitter2.png"/></a>
          <a href="https://github.com/lbAntoine" target="_blank"><img src="../assets/github.png"/></a>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="css">
  @import '../styles/processed/Home.css';
</style>