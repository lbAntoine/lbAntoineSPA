// BANNER ANIMATION
const banner = document.querySelector(".banner");
const sectionOne = document.querySelector(".super-main-container");
const sectionOneOptions = {
  rootMargin: '-200px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
  entries.forEach(entry => {
    console.log(entry.target);
    if(!entry.isIntersecting) {
      banner?.classList.add('banner-solid');
    } else {
      banner?.classList.remove('banner-solid');
    }
  })
}, sectionOneOptions);

export default {
  beforeMount(sectionOne: Element) {
    sectionOneObserver.observe(sectionOne);
  }
}