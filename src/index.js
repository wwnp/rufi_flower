import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss' // <= THIS
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/caruosel/Carousel.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { MainPage } from './components/main/mainPage';

const main = new MainPage('#app',{
  components: [HeaderComponent,CarouselComponent,InstagramComponent]
})
main.render()