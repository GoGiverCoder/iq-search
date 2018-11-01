import { combineReducers } from 'redux'
import ContributeReducers from '../../modules/contribute/services/redux/reducers'

export default combineReducers({
  contribute: ContributeReducers,
})
