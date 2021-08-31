export class DomListener {
  constructor($root,listeners = []){
    this.$root = $root
    this.listeners = listeners
  }
  initDomListeners(){
    this.listeners.forEach(listener => {
      const method = getMethodName(capitalize(listener)) //  === onInput
      if(!this[method]){
        throw new Error(`Method ${method} in ${this.name} not exist`)
      }
      this[method] = this[method].bind(this)
      this.$el.addEventListener(listener,this[method])
    })
  }
}

function getMethodName(eventName){
  return 'on' + eventName
}
function capitalize(str) {
  if (typeof str !== 'string') {
    return ''
  }
  return str[0].toUpperCase() + str.slice(1)
}