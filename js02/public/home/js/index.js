document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('js-btn')
  btn.onclick = () => {
    const box = document.getElementById('js-box')
    box.innerText = 'clicked'
  }
})
