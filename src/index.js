import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss'
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/Carousel.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { MainPage } from './components/main/mainPage';
import { Loading } from './components/loader/loading';

import background1 from './images/car1.jpg';
import background2 from './images/car2.jpg';
import background3 from './images/car3.jpg';

import image1 from './images/delivery.png';

const loading = new Loading('loading')

const main = new MainPage('app', {
  components: [HeaderComponent, CarouselComponent, InstagramComponent],
  loading,
  backgrounds: [background1, background2, background3],
  images: {
    0: image1,
    1: null,
    2: null
  },
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