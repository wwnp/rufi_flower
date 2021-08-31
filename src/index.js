import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss' // <= THIS
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/caruosel/Carousel.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { MainPage } from './components/main/mainPage';
import { Loading } from './components/loader/loading';

import image1 from './/images/car1.jpg';
import image2 from './/images/car2.jpg';
import image3 from './/images/car3.jpg';

const loading = new Loading('loading')

const main = new MainPage('app',{
  components: [HeaderComponent,CarouselComponent,InstagramComponent],
  loading,
  images: [image1,image2,image3]
})

main.render()