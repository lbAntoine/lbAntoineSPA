<script lang="ts">
export default {
  name: 'profileCard',
}
</script>

<template>
  <div class="container">
    <div class="containerCard">
      <div class="card">
        <div class="imgBx">
            <img src="../../assets/profile.jpg">
        </div>
          <div class="contentBx">
            <h2>Antoine Le Bras</h2>
            <div class="location">
                <h3>Aix-en-Provence, France</h3>
            </div>
            <div class="socials">
                <a href="https://github.com/lbAntoine" target="_blank"><img src="../../assets/github.png"></a>
                <a href="https://twitter.com/tomato_wizard" target="_blank"><img src="../../assets/twitter2.png"></a>
                <a href="https://www.linkedin.com/in/antoine-le-bras/" target="_blank"><img src="../../assets/linkedin2.png"></a>
            </div>
            <div class="cv">
                <a href="../../assets/doc/CV-AntoineLeBras.pdf" download="CV-lbAntoine">Download resume</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Encode Sans Expanded', sans-serif;
  }

  .containerCard {
    position: relative;
    width: 200px;
    height: 200px;
  }

  .containerCard .card {
    position: relative;
    width: 200px;
    height: 200px;
    background: #151E1D;
    border-radius: 50%;
    overflow: hidden;
    transition: 0.5s ease-in-out;
  }

  .containerCard:hover .card {
    width: 320px;
    height: 450px;
    border-radius: 20px;
  }

  .containerCard .card .imgBx img {
    position: absolute;
    top: -25px;
    left: 0px;
    max-width: auto;
    height: 250px;
    clip-path: ellipse(80% 80%);
    transition: 0.5s ease-in-out;
  }

  .containerCard:hover .card .imgBx img {
    top: 0;
    left: 0;
    height: 350px;
    clip-path: ellipse(55% 55% at 46.5% 20%);
    transition-delay: 0.05s;
  }

  .containerCard .card:after {
    content: 'Web dev';
    position: absolute;
    top: 50%;
    left: -20%;
    font-size: 10em;
    font-weight: 800;
    font-style: italic;
    line-height: 0.75em;
    color: #399d811a;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  .containerCard:hover .card:after {
    opacity: 1;
    visibility: visible;
  }

  .containerCard .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    transition: 1s;
    z-index: 10;

    /*peut-être amorcer la transition de tout content ici?
    si c'est le cas, changer la couleur de la police de h2 à noir directement
    finalement peut-être pas si je veux faire arriver les éléments petit à petit*/
  }

  .containerCard:hover .card .contentBx {
    height: 180px;
  }

  .containerCard .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #ffffff;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
  }

  .containerCard:hover .card .contentBx h2 {
    opacity: 1;
    visibility: visible;
    /* transition-delay: opacity 1s; */
  }

  .containerCard .card .contentBx h3 {
    position: relative;
    font-weight: 50;
    letter-spacing: 1px;
    color: #ffffff;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
  }

  .containerCard:hover .card .contentBx h3 {
    opacity: 1;
    visibility: visible;
    /* transition-delay: opacity 1s; */
  }

  .containerCard .card .contentBx .socials {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 20px;
    transition: 0.8s;
    opacity: 0;
    visibility: hidden;
    filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(196deg) brightness(105%) contrast(101%);;
  }

  .containerCard:hover .card .contentBx .socials {
    opacity: 1;
    visibility: visible;
    transition-delay: 0;
  }

  .containerCard .card .contentBx .socials a img {
    width: 26px;
    height: 26px;
    align-items: center;
    margin-top: 20px;
    transition: 0.3s;
  }

  .containerCard .card .contentBx .socials a img:hover {
    filter: invert(49%) sepia(11%) saturate(1979%) hue-rotate(113deg) brightness(105%) contrast(88%);
  }

  .containerCard .card .contentBx .cv a {
    display: inline-block;
    padding: 10px 20px;
    background: transparent;
    border-radius: 4px;
    border: solid 2px #399D81;
    margin-top: 10px;
    text-decoration: none;
    color: #399D81;
    font-weight: 600;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.3s;
  }

  .containerCard:hover .card .contentBx .cv a:hover {
    background: #399D81;
    color: #ffffff;
  }

  .containerCard:hover .card .contentBx .cv a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: opacity 0.75s, transform 0.75s;
  }
</style>