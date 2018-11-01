import * as types from './types'

export function createTag(text){
  return {
    type: types.FORM_ADD_CREATE_TAG,
    text
  }
}

export function removeTag(index){
  return {
    type: types.FORM_ADD_REMOVE_TAG,
    index
  }
}
