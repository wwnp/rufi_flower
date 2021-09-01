export class MainPage {
  constructor(selector,options){
    this.$el = document.getElementById(selector)
    this.components = options.components
    this.loading = options.loading
    this.images = options.images
    this.backgrounds = options.backgrounds
    this.captions = options.captions

    this.getRoot()
  }
  getRoot(){
    this.components = this.components.map((Component)=>{
      switch (Component.idName) {
        case 'header':
          return Component = new Component(Component.idName)
        case 'carousel':
          return Component = new Component(Component.idName,this.backgrounds,this.images,this.captions)
        case 'instagram':
          return Component = new Component(Component.idName,this.loading)
      }
    })
  }
  render(){
    this.components.forEach(component => {
      component.toHTML()
      component.init()
    });
  }
}