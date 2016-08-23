import fetch from 'isomorphic-fetch'
import Lockr from 'lockr'
import _ from 'lodash'
import { push } from 'react-router-redux'
import apiRoute from '../../../util/ApiRoute'

const apiBaseRoute = apiRoute()

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const RECEIVE_LOGIN_RESPONSE = 'RECEIVE_LOGIN_RESPONSE'
export const RECEIVE_REGISTER_RESPONSE = 'RECEIVE_REGISTER_RESPONSE'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export function receiveLoginResponse(loginResponse) {
  return {
    type: RECEIVE_LOGIN_RESPONSE,
    payload: loginResponse
  }
}

export function receiveRegisterResponse(registerResponse) {
  return {
    type: RECEIVE_REGISTER_RESPONSE,
    payload: registerResponse
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const submitLogin = (loginFormData) => {
  const postBody = {
    user: {
      email:loginFormData.email,
      password: loginFormData.password
    }
  }
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  return (dispatch) => {

    return fetch(`${apiBaseRoute}/auth/login`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(postBody),
        headers: myHeaders
      })
     .then(response => response.json())
     .then(json => {
       const hasToken = _.has(json, 'data.token')
       const hasId = _.has(json, 'data.user_id')
       if(hasToken && hasId) {
         Lockr.set('token', json.data.token)
         Lockr.set('userId', json.data.user_id)
         dispatch(push('/'))
       }
       dispatch(receiveLoginResponse(json))
     })
  }
}

export const submitRegister = (RegisterFormData) => {
  const postBody = {
    user: {
      name: RegisterFormData.name,
      email: RegisterFormData.email,
      password: RegisterFormData.password
    }
  }
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  return (dispatch) => {

    return fetch(`${apiBaseRoute}/auth`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(postBody),
        headers: myHeaders
      })
     .then(response => response.json())
     .then(json => {
       dispatch(receiveRegisterResponse(json))
    })
  }
}

export const actions = {
  increment,
  doubleAsync,
  submitLogin,
  submitRegister
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_REGISTER_RESPONSE]: (state, action) => {
    return Object.assign({}, state, {registerData: action.payload})
  },

  [RECEIVE_LOGIN_RESPONSE]: (state, action) => Object.assign({}, state, {loginData: action.payload})


}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {

}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
