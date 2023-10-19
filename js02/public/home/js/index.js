document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('js-btn')
  btn.onclick = () => {
    const box = document.getElementById('js-box')
    box.innerText = 'clicked'
  }
})

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    console.log('This page was restored from the bfcache.');
  } else {
    console.log('This page was loaded normally.');
  }
});
