import $ from 'jquery'
import axios from 'modules/axios'

const ListenInactiveHeartEvent = (articleId) => {
  $('.inactive-heart').on('click', () => {
    axios.post(`/api/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === 'OK') {
          $('.active-heart').removeClass('hidden')
          $('.inactive-heart').addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
}

const ListenActiveHeartEvent = (articleId) => {
  $('.active-heart').on('click', () => {
    axios.delete(`/api/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === 'OK') {
          $('.active-heart').addClass('hidden')
          $('.inactive-heart').removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
}

export {
  ListenInactiveHeartEvent,
  ListenActiveHeartEvent
}