/**
 * Js get highlight & selected text in document
 */
function getCursorSelectedText() {
  if (window.getSelection) {
    return window.getSelection().toString()
  } 
  else if (document.selection) {
    return document.selection.createRange().text
  }
  return ''
}

/**
 * Append an element to body
 */
function insertElement(ele) {
  let body = document.getElementsByTagName('body')[0]
  body.appendChild(ele)
}

/**
 * Get mouse position
 */
function mousePosition(event, parentEle){
  let rootPos = {x: event.clientX, y: event.clientY}

  if (parentEle) {
    let parentPos = parentEle.getBoundingClientRect()
    return {
      x: rootPos.x - parentPos.x,
      y: rootPos.y - parentPos.y,
    }
  }
  else {
    return rootPos
  }
}

let document = {
  getCursorSelectedText,
  insertElement,
  mousePosition,
}

let DOMHelper = {
  document
}

export default DOMHelper