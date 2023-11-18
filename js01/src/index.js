const jqueryRawCode = require('./jquery.min')
require('./theme.css')

eval(jqueryRawCode)

$(function () {
  hoge = 'hoge'
  console.log(hoge)
})
