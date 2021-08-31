import { ExcelComponent } from '../../core/ExcelComponent.js'

export class CarouselComponent extends ExcelComponent {
  static idName = 'carousel'
  constructor(selector, images) {
    super(selector, {
      listeners: ['click']
    })
    this.images = images
  }
  init() {
    const carouselInner = this.$el.querySelector('[data-type="carouselInner"]')

    this.images = this.images.map(image => {
      return this.renderItemCarousel(image)
    })
      .join('')
    console.log(this.images)

    carouselInner.innerHTML = this.images
  }

  onClick(event) {
    console.log(event.target.dataset)
    // event.target.innerHTML = `<img src="${this.image}">`
  }

  renderItemCarousel(num) {
    return `
      <div class='myitem' style:"height:100%; background-image: url('./images/car1.jpg')">
        
      </div>'
    `
  }

  // <img class='img-carousel' src='${num}'>
}