import { MODAL_SHOW, MODAL_HIDE } from '../../actions'

const initialState = {
  show: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return { ...state, show: true }
    case MODAL_HIDE:
      return { ...state, show: false }
    default:
      return state
  }
}

export default reducer
