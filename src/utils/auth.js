import Cookies from 'js-cookie'

const TokenKey = 'token';
const AuthKey = 'auth';
const SocketKey = 'socket';

const sessionStore = {
  'prefix': 'authSessionStore-',
  'set'(name, value) {
    sessionStorage.setItem(this.prefix + name, value)
  },
  'get'(name) {
    return sessionStorage.getItem(this.prefix + name)
  },
  'remove'(name) {
    sessionStorage.removeItem(this.prefix + name)
  }
}

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  // const expires = new Date(new Date().getTime() + 12 * 60 * 60 * 1000)
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  sessionStorage.removeItem(TokenKey)
}

export function getAuth() {
  return sessionStore.get(AuthKey)
}

export function setAuth(auth) {
  return sessionStore.set(AuthKey, auth)
}

export function removeAuth() {
  return sessionStore.remove(AuthKey)
}

export function getSocket() {
  return sessionStore.get(SocketKey)
}

export function setSocket(socket) {
  return sessionStore.set(SocketKey, socket)
}

export function removeSocket() {
  return sessionStore.remove(SocketKey)
}
