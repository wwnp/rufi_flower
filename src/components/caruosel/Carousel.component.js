import { ExcelComponent } from '../../core/ExcelComponent.js'

export class CarouselComponent extends ExcelComponent {
  static idName = 'carousel'
  constructor(selector, images) {
    super(selector, {
      listeners: ['click']
    })
    this.images = images
    this.current = 0
  }
  init() {
    super.init()

    const carouselInner = this.$el.querySelector('[data-type="carouselInner"]')

    this.images = this.images.map( (image,index) => {
      return this.renderItemCarousel(image,index)
    })
    carouselInner.innerHTML = this.images.join('')

    this.items = this.$el.querySelectorAll('[data-type="myitem"]')
    // this.items[0].classList.add('active')
    this.selectItem(this.current)
  }

  onClick(event) {
    if(event.target.dataset.arrow === 'prev'){
      if(this.current - 1 < 0){
        this.current = this.items.length - 1
        this.test(this.items[0])
      }else{
        this.current = this.current - 1
        this.test(this.items[this.current])
      }
      this.selectItem(this.current)
    }
    if(event.target.dataset.arrow === 'next'){
      if(this.current + 1 > this.images.length - 1){
        this.current = 0
        this.test(this.items[this.current])
      }else{
        this.current = this.current + 1
        this.test(this.items[this.current])
      }
      this.selectItem(this.current)

      
    }
  }

  selectItem(i){
    this.removeCurrItems()
    this.items[i].classList.add('active')
  }
  removeCurrItems(){
    this.items.forEach(el=>{
      el.classList.remove('active')
    })
  }

  async test(item){
    await intervalPromise(1,item)
    console.log('done')
  }

  renderItemCarousel(image,index) {
    return `
    <div class='carousel-myitem' data-type="myitem" data-num='${index}'>
      <img src="${image}">
    </div>'
    `
  }
  // <div class='carousel-myitem ${index===0?'active':''}' data-type="myitem" data-num='${index}'>
  // <img class='img-carousel' src='${num}'>
  // <div class='carousel-myitem' style:"background-image: url(../../images/car1.jpg);">
  // <div class='carousel-myitem' style="background: rgba(0,0,0,1)">
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