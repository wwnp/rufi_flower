import {Instafeed} from './instafeed.js'
import {ExcelComponent} from '../../core/ExcelComponent.js'

function promiseFeed(){
  return new Promise((resolve)=>{
    var feed = new Instafeed({
      accessToken: 'IGQVJWX2Rhc291RnNfWTYteTJOc2ZAsY1QxZAjlZAZAXpCTmdiRk5mQWluV284c0RlQmtWN0lTZAVE0UUQwYUdXc19EZAVhQWHhJNnNGeUFTT1RGcTExTkN3a1pBNHRCbENKUDRpUklFZAmhfSzlpdUhnVXNuTgZDZD'
    });
    resolve(feed)
  })
}

export class InstagramComponent extends ExcelComponent{
  static idName = 'instagram'
  constructor(selector,loading){
    super(selector, {
      listeners: ['mouseover','mouseout']
    })
    this.block = null
    this.loading = loading
  }
  async toHTML() {
    try {
      this.loading.show()
      // await delay(3000)
      const feed =  await promiseFeed()   
      feed.run() 
      this.loading.hide()
    } catch (error) {
      console.log(error)
    }
  }
  onMouseover(event){
    this.block = event.target.closest('[data-type="instablock"]')
    if(this.block){
      this.block.classList.add('active')
    }
  }
  onMouseout(){
    if(this.block){
      this.block.classList.remove('active')
    }
  }
}

const delay = (ms)=> {
  return new Promise((resolve)=> {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}