import Helper from './Helper'

const API = 'http://localhost:3001/api'
const SERP_API = 'https://serpapi.com/search.json'
let params = {
  q: 'something',
  gl: 'vi',
  hl: 'vi',
}

function _getUrl(keyword) {
  keyword = _encodeGoogleUri(keyword)
  let queryParams = Object.assign({}, params, {q: keyword})
  let strParam = Helper.objectToQueryString(queryParams)

  return _encodeSerpUri(`${SERP_API}?${strParam}`)
}

function send(keyword) {
  keyword = _encodeGoogleUri(keyword)
  let url = _getUrl(keyword)

  return fetch(`${API}/read/${url}`)
    .then(_verifyResponse, _handleError);
}

/**
 * Verify that the fetched response is JSON
 */
function _verifyResponse(res) {
  let contentType = res.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return _parseResponse(res.json());
  } else {
    _handleError({ message: 'Response was not JSON'});
  }
}

/**
 * Handle fetch errors
 */
function _handleError(error) {
  console.error('An error occurred:', error);
  throw error;
}

/**
 * Resolve promise & parse response
 */
async function _parseResponse(resPromise)
{
  let response = await resPromise

  return _transformToResult(JSON.parse(response))
}

/**
 * Transform
 */
function _transformToResult(res){
  let filteredResults = {
    map: [],
    wiki: {},
    organic: []
  }

  if (typeof res.local_results !== 'undefined') {
    filteredResults.map = _parseMapResults(res.local_results)
  }

  if (typeof res.knowledge_graph !== 'undefined') {
    filteredResults.wiki = _parseWikiResult(res.knowledge_graph)
  }

  if (typeof res.organic_results !== 'undefined') {
    filteredResults.organic = _parseOrganicResults(res.organic_results)
  }

  return filteredResults
}

/**
 * Parse map resuls
 */
function _parseMapResults(data) {
  let result = []
  for (let row of data) {
    result.push({
      title: row.title,
      address: row.address || null,
      description: row.description || null,
      thumbnail: row.thumbnail || null
    })
  }

  return result
}

/**
 * Parse wiki results
 */
function _parseWikiResult(data) {
  return {
    description: data.description || null,
    image: data.image || null
  }
}

/**
 * Parse organic results
 */
function _parseOrganicResults(data) {
  let result = []
  for(let row of data) {
    result.push({
      title: row.title,
      snippet: row.snippet || null
    })
  }

  return result
}

/**
 * Encode only symbol and keedp UTF8 chars for best google search
 */
function _encodeGoogleUri(uri) {
  return uri.replace(/ /g, '+')
}

/**
 * Additional encode rule between client & server
 */
function _encodeSerpUri(uri) {
  return uri.replace(/\//g, '$').replace(/\?/g, '@')
}

// Export ApiService
const SearchApi = { send };
export default SearchApi;