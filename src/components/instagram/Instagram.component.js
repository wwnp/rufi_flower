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
  constructor(selector){
    super(selector, {
      listeners: ['mouseover','mouseout']
    })
    this.block = null
  }
  async toHTML() {
    try {
     const feed =  await promiseFeed()   
     feed.run() 
    } catch (error) {
      console.log(error)
    }
  }
  onMouseover(event){
    this.block = event.target.closest('[data-type="instablock"]')
    this.block.classList.add('active')
  }
  onMouseout(){
    this.block.classList.remove('active')
  }
}