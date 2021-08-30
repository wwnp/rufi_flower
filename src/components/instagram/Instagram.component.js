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
    super(selector)
  }
  async toHTML() {
    try {
     const feed =  await promiseFeed()   
     feed.run() 
    } catch (error) {
      console.log(error)
    }
  }
}