document.addEventListener('DOMContentLoaded', () => {
  const uploadBtn = document.getElementById('js-uploadImages')
  const filename = 'example.jpg'
  uploadBtn.onclick = async () => {
    try {
      const image = readImage()
      const url = await getUploadUrl(filename, image.type)
      const res = await submit(url, image)
      const imageUrl = createImageUrl(filename)
      writeImage(imageUrl)
    } catch (err) {
      console.log(err)
    }
  }
})

function writeImage(url) {
  const img = document.createElement('img')
  img.src = url
  const area = document.getElementById('js-area')
  area.appendChild(img)
}

function createImageUrl(filename) {
  return `http://localhost:4566/microposts/upload_picture/${filename}`
}

function readImage() {
  const imageEl = document.getElementById('js-image')
  const file = imageEl.files[0]

  return file
}

function submit(url, image) {
  const formData = new FormData()
  formData.append('file', image)
  const headers = {
    'accept': 'multipart/form-data'
  }
  return fetch(url, { method: 'PUT', headers, body: formData })
}

async function getUploadUrl(filename, filetype) {
  const response = await fetch(`/api/v1/upload_s3_url?filename=${filename}&content_type=${filetype}`)
  const data = await response.json()
  return data.url
}
