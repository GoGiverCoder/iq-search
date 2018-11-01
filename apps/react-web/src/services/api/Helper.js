/**
 * Serialize object to query string
 * @param Object params 
 */
export function objectToQueryString(params) {
  return Object.keys(params).map(function(key) {
    return key + '=' + params[key]
  }).join('&')
}

let Helper = {
  objectToQueryString
}
export default Helper;