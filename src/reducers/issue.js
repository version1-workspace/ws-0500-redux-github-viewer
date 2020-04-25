import { ISSUE_ADD, ISSUE_REMOVE, ISSUE_UPDATE } from '../actions'

const initialState = {
  index: 0,
  data: {}
}

const reducer = (state = initialState, action) => {
  const { index, data } = state
  const { issue } = action.payload || {}
  const newData = { ...state.data }
  const id = index + 1
  switch (action.type) {
    case ISSUE_ADD:
      newData[id] = { ...issue, id }
      return { ...state, index: id, data: newData }
    case ISSUE_UPDATE:
      return {
        ...state,
        data: { ...data, [issue.id]: issue }
      }
    case ISSUE_REMOVE:
      delete newData[issue.id]
      return {
        ...state,
        data: newData
      }
    default:
      return state
  }
}

export default reducer
