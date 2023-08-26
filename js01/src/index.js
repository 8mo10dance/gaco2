import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

$(function () {
  $('.single-item').slick();
  $('.single-item').on('beforeChange', function () {
    console.log('hoge')
  })
})
