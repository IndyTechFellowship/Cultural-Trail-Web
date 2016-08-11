import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const RECEIVE_LOGIN_RESPONSE = 'RECEIVE_LOGIN_RESPONSE'

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

    return fetch(`http://localhost:4000/auth/login`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(postBody),
        headers: myHeaders
      })
     .then(response => response.json())
     .then(json =>
       console.log(json)
     )
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
