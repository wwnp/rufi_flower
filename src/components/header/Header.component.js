import {ExcelComponent} from '../../core/ExcelComponent.js'

export class HeaderComponent extends ExcelComponent{
  static idName = 'header'
  constructor(selector,){
    super(selector,{
      listeners: ['click']
    })
  }

  onClick(event){
    if(event.target.dataset.type === 'tape'){
      console.log('tape')
    }
  }
} 