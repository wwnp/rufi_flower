import { ExcelComponent } from '../../core/ExcelComponent.js'
import {carousel} from './carousel.bootstrap.js'

export class CarouselComponent extends ExcelComponent {
  static idName = 'carousel'
  constructor(selector, images, captions) {
    super(selector, {
      // listeners: ['click']
    })
    this.images = images
    this.current = 0
    this.captions = captions
  }
  init() {
    super.init()
    const carouselInner = this.$el.querySelector('[data-type="carousel"]')
    this.images = this.images.map( (image,index) => {
      return this.renderItemCarousel(image,index,this.captions[index])
    })
    carouselInner.innerHTML = this.images.join('')

    // this.items = this.$el.querySelectorAll('[data-type="myitem"]')
    // this.selectItem(this.current)
  }

  // onClick(event) {
  //   // if(event.target.dataset.arrow === 'prev'){
  //   //   if(this.current - 1 < 0){
  //   //     this.current = this.items.length - 1
  //   //     this.test(this.items[0])
  //   //   }else{
  //   //     this.current = this.current - 1
  //   //     this.test(this.items[this.current])
  //   //   }
  //   //   this.selectItem(this.current)
  //   // }
  //   // if(event.target.dataset.arrow === 'next'){
  //   //   if(this.current + 1 > this.images.length - 1){
  //   //     this.current = 0
  //   //     this.test(this.items[this.current])
  //   //   }else{
  //   //     this.current = this.current + 1
  //   //     this.test(this.items[this.current])
  //   //   }
  //   //   this.selectItem(this.current)

      
  //   // }
  // }

  // selectItem(i){
  //   this.removeCurrItems()
  //   this.items[i].classList.add('active')
  // }
  // removeCurrItems(){
  //   this.items.forEach(el=>{
  //     el.classList.remove('active')
  //   })
  // }

  // async test(item){
  //   await intervalPromise(1,item)
  //   console.log('done')
  // }

  renderItemCarousel(image,index,captions) {
    let temp = ''
    switch (index) {
      case 0:
        temp = 'carousel-first'
        break;
      case 1:
        temp = 'carousel-second'
        break;
      case 2:
        temp = 'carousel-third'
        break;
      default:
        temp = ''
        break;
    }
    return `
    <div class='carousel-item ${index===0?'active':''}' data-type="myitem">
      <img class="d-block w-100" src="${image}">
        <div class="carousel-caption d-block ${temp}">
        <h5>${captions.header}</h5>
        <p>${captions.paragraph}</p>
      </div>
    </div>'
    `
  }
}

const intervalPromise = (ms,image) => {
  return new Promise((resolve) => {
    let num = 0
    let interval = setInterval(() => {
      num = num - 1
      console.log(num)
      console.log(image)
      image.style.marginLeft = num + '%'
      if(num === -100){
        clearInterval(interval)
        resolve()
      }
    }, ms);
  })
}