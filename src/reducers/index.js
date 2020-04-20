import { combineReducers } from 'redux'
import user from './user'
import issue from './issue'
import pullRequest from './pullRequest'

const reducer = combineReducers({ user, issue, pullRequest })

export default reducer
