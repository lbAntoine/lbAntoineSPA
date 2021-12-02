import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'animate.css'
import scrollAnimation from './directives/scrollAnimation'
import BannerLink from './components/banner/BannerLink.vue'
// import bannerAnimation from './directives/bannerAnimation'

const app = createApp(App)

app.directive('scrollanimation', scrollAnimation);

app.component('BannerLink', BannerLink);

app.use(router).mount('#app')