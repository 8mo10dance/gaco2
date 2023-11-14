import { Controller } from "@hotwired/stimulus"

import { apiRequest } from '../helpers/api'

export default class extends Controller {
  static targets = ['avatarIdField', 'avatarImageArea']

  set avatarId(avatarId) {
    this.avatarIdFieldTarget.value = avatarId
  }

  set avatarImageUrl(imageUrl) {
    const imageEl = document.createElement('img')
    imageEl.src = imageUrl
    this.avatarImageAreaTarget.appendChild(imageEl)
  }

  async changeAvatar(event) {
    const file = event.target.files[0]
    if (!file) return

    try {
      const url = await getUploadUrl(file)
      const imageUrl = await uploadAvatar(url, file)
      if (imageUrl) {
        this.avatarImageUrl = imageUrl
      }

      const response = await uploadUserAvatar(file)
      if (response.ok) {
        const data = await response.json()
        this.avatarId = data['user_avatar_id']
      }
    } catch (err) {
      console.log(err)
    }
  }
}

function uploadUserAvatar(file) {
  const formData = new FormData()
  formData.append("user_avatar[image]", file)

  return apiRequest('/api/v1/user_avatars', { method: 'POST', body: formData })
}

async function getUploadUrl(file) {
  try {
    const response = await fetch(`/api/v1/avatar_upload_url?filename=${file.name}&content_type=${file.type}`)
    if (response.ok) {
      const data = await response.json()
      return data.url
    }

    return null
  } catch (err) {
    console.log(err)
  }
}

async function uploadAvatar(url, file) {
  const formData = new FormData()
  formData.append('file', file)

  const imageUrl = file => {
    return `http://localhost:4566/microposts/tmp_uploads/${file.name}`
  }

  try {
    const response = await fetch(
      url,
      {
        method: 'PUT',
        accept: 'multipart/form-data',
        body: formData
      }
    )
    if (response.ok) {
      return imageUrl(file)
    }

    return null
  } catch (err) {
    console.log(err)
  }
}
