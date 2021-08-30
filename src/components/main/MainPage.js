export class MainPage {
  constructor(selector,options){
    this.$el = document.getElementById(selector)
    this.components = options.components
    this.getRoot()
  }
  getRoot(){
    this.components = this.components.map((Component)=>{
      return Component = new Component(Component.idName)
    })
  }
  render(){
    this.components.forEach(component => {
      component.toHTML()
      component.init()
    });
  }
}