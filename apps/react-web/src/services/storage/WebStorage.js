const ENGINE_LOCAL_STORAGE = 'localStorage'
const ENGINE = ENGINE_LOCAL_STORAGE;

let LocalStorage = {
  get: (key) => {
    return localStorage.getItem(key)
  },
  set: (key, value) => {
    return localStorage.setItem(key, value)
  },
  remove: (key) => {
    return localStorage.removeItem(key)
  }
}

let WebStorage;

switch(ENGINE) {
  case ENGINE_LOCAL_STORAGE:
  default:
    WebStorage = LocalStorage;
}

export default WebStorage;