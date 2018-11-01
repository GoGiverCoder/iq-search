import {combineReducers} from 'redux'
import * as types from './types'

const FORM_INITIAL = {
  keyword: '',
  tags: []
}

function formReducer(state = FORM_INITIAL, action) 
{
  switch(action.type) {
    case types.FORM_ADD_CREATE_TAG: {
      let newTags = state.tags.concat([action.text])
      
      return {
        ...state,
        tags: newTags
      }
    }
    case types.FORM_ADD_REMOVE_TAG: {
      if (state.tags.length <= action.index) return state

      let newTags = [].concat(state.tags)
      newTags.splice(action.index, 1)

      return {
        ...state,
        tags: newTags
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  form: formReducer,
})