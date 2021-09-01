import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss'
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/caruosel/Carousel.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { MainPage } from './components/main/mainPage';
import { Loading } from './components/loader/loading';

import image1 from './/images/car1.jpg';
import image2 from './/images/car2.jpg';
import image3 from './/images/car3.jpg';

const loading = new Loading('loading')

const main = new MainPage('app', {
  components: [HeaderComponent, CarouselComponent, InstagramComponent],
  loading,
  images: [image1, image2, image3],
  captions: {
    0: {
      header: 'Собственное производство',
      paragraph: 'Однолетники, Сложные культуры'
    },
    1: {
      header: 'Кубанское качество',
      paragraph: 'par2'
    },
    2: {
      header: 'Доставка по России',
      paragraph: 'Доставка СДЭК,BoxBerry,DPD,Почта России'
    },
  }
})

main.render()