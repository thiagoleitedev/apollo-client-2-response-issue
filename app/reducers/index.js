//@flow
import { combineReducers } from 'redux'
import type Action from '~/app/Types'

const RootReducer = combineReducers({
  data: (state: Object = {}, _action: Action) => state
})

export default RootReducer
