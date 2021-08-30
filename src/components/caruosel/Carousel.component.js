import {ExcelComponent} from '../../core/ExcelComponent.js'

export class CarouselComponent extends ExcelComponent {
  static idName = 'carousel'
  constructor(selector){
    super(selector, {
      listeners: ['click']
    })
  }

  onClick(event){
    console.log(event.target)
  }
}