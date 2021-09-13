import axios from 'axios'
import { GAMES_DETAIL_URL, SCREEN_DETAIL_URL } from '../api'

export const loadDetail = id => async dispatch => {
  dispatch({
    type: 'LOADING_DETAIL'
  })

  const detailData = await axios.get(GAMES_DETAIL_URL(id))
  const screenData = await axios.get(SCREEN_DETAIL_URL(id))

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenData.data
    }
  })
}
