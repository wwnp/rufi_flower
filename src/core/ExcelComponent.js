import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener{
  constructor(selector, options={}){
    super(selector,options.listeners)
    this.$el = document.getElementById(selector)
  }
  init(){
    this.initDomListeners()
  }
  toHTML(){}
}