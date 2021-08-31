import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor(selector, options = {}) {
    super(selector, options.listeners)
    this.$el = document.getElementById(selector)
  }
  init() {
    this.initDomListeners()
  }


  hide() {
    this.$el.classList.add('hide')
    this.onHide()
  }
  show() {
    this.$el.classList.remove('hide')
    this.onShow()
  }

  toHTML() { }
  onShow() { }
  onHide() { }
}