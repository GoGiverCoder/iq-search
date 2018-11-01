import auth0 from 'auth0-js'
import * as env from '../../config/env'
import WebStorage from '../storage/WebStorage'

const PREFIX = 'auth.'
const KEY_TOKEN = PREFIX+'access_token'
const KEY_ID_TOKEN = PREFIX+'id_token'
const KEY_EXPIRE = PREFIX+'expires_at'
const KEY_USER = PREFIX+'user'

/**
 * Setup
 */
let auth = new auth0.WebAuth({
  domain: 'iq-search.auth0.com',
  clientID: 'ybjGDSXWcDHqjm3sEzSwtslEJxoq9tEi',
  redirectUri: env.URL_AUTH_CALLBACK,
  responseType: 'token id_token',
  scope: 'openid profile'
});

/**
 * Redirect to Auth0 login page
 */
function login() {
  auth.authorize();
}

/**
 * Clear Access Token and ID Token from storage
 */
function logout() {
  console.log('LOGOUT')
  WebStorage.remove(KEY_TOKEN);
  WebStorage.remove(KEY_ID_TOKEN);
  WebStorage.remove(KEY_EXPIRE);
  WebStorage.remove(KEY_USER);

  window.location.replace('/')
}

/**
 * Save token data
 */
function saveToken(authResult) {
  let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  WebStorage.set(KEY_TOKEN, authResult.accessToken);
  WebStorage.set(KEY_ID_TOKEN, authResult.idToken);
  WebStorage.set(KEY_EXPIRE, expiresAt);
}

/**
 * Save user data
 * @param string accessToken 
 * @param function callback 
 */
function saveUserInfo(accessToken, callback) {
  auth.client.userInfo(accessToken, (err, user) => {
    WebStorage.set(KEY_USER, JSON.stringify(user));
    callback(user)
  })
}

/**
 * Receive Auth0 callback and save login info
 */
function catchAuthAndSave(){
  return new Promise((resolve, reject) => {
    auth.parseHash((err, authResult) => {
      if (authResult) {
        saveToken(authResult)
        saveUserInfo(authResult.accessToken, (user) => {
          resolve(user)
        })
      }
      else {
        reject('FAILED_TO_LOGIN')
      }
    })
  })
}

/**
 * Check whether the current time is past the 
 */
function isAuthenticated() {
  let expiresAt = JSON.parse(WebStorage.get(KEY_EXPIRE));
  return new Date().getTime() < expiresAt;
}

/**
 * Has login data
 */
function isLoggedIn(){
  return !!getUserInfo() && isAuthenticated()
}

/**
 * Get FB info
 */
function getUserInfo() {
  return JSON.parse(WebStorage.get(KEY_USER))
}

export default {
  login,
  logout,
  getUserInfo,
  catchAuthAndSave,
  isLoggedIn,
}