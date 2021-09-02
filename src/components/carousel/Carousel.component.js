import { ExcelComponent } from '../../core/ExcelComponent.js'
import { carousel } from './carousel.bootstrap.js'

export class CarouselComponent extends ExcelComponent {
  static idName = 'carousel'
  constructor(selector, backgrounds, images, captions) {
    super(selector, {
      // listeners: ['click']
    })

    this.current = 0
    this.backgrounds = backgrounds
    this.images = images
    this.captions = captions

  }
  init() {
    super.init()
    const carouselInner = this.$el.querySelector('[data-type="carousel"]')
    this.backgrounds = this.backgrounds.map((background, index) => {
      return this.renderItemCarousel(background, index, this.captions[index], this.images[index])
    })
    carouselInner.innerHTML = this.backgrounds.join('')
  }
  renderItemCarousel(background, index, captions, imgSrc) {
    let temp = ''
    const image = imgSrc === null
      ? ''
      : `<img class='delivery-img' src='${imgSrc}'>`

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
    <div class='carousel-item ${index === 0 ? 'active' : ''}' data-type="myitem">
      <img class="d-block w-100" src="${background}">
        <div class="carousel-caption d-block ${temp}">
        <h5>${captions.header}</h5>
        <p>${captions.paragraph}</p>
        ${image}
      </div>
    </div>'
    `
  }
}