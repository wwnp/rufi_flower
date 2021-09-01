const myCarousel = document.querySelector('#carousel')
export const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: true
})