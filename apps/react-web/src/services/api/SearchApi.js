import * as env from '../../config/env'

//Base API
const API = env.URL_SEARCH_API

/**
 * Call API search
 */
function send(keyword) {
  keyword = _encodeGoogleUri(keyword)

  return fetch(`${API}/read/${keyword}`)
    .then(_responseAsText, _handleError);
}

/**
 * Wait http request & return response
 */
async function _responseAsText(res) {
  let response = await res

  return response.text()
}

/**
 * Handle fetch errors
 */
function _handleError(error) {
  console.error('An error occurred:', error);
  throw error;
}

/**
 * Encode only symbol and keedp UTF8 chars for best google search
 */
function _encodeGoogleUri(uri) {
  return uri.replace(/ /g, '+')
}

/* Export ApiService */
const SearchApi = { send };
export default SearchApi;