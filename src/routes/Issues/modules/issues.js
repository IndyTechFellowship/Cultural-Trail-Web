import fetch from 'isomorphic-fetch'
import apiRoute from '../../../util/ApiRoute'

const apiBaseRoute = apiRoute()
const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5fQ.EKs8HFo98bpBKcnuHrPCJxnAWf1Riv4HocWXE9bPk8U'

// ------------------------------------
// Constants
// ------------------------------------
export const RECEIVE_GET_ISSUES_RESPONSE = 'RECEIVE_GET_ISSUES_RESPONSE'

// ------------------------------------
// Actions
// ------------------------------------
export function receiveGetIssuesResponse(getIssuesResponse) {
  return {
    type: RECEIVE_GET_ISSUES_RESPONSE,
    payload: getIssuesResponse
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const getIssues = () => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('api-token', `Token: ${apiToken}`)
  return (dispatch) => {

    return fetch(`${apiBaseRoute}/api/issues`,
      {
        method: 'GET',
        mode: 'cors',
        headers: myHeaders
      })
     .then(response => response.json())
     .then(json =>
       dispatch(receiveGetIssuesResponse(json))
     )
  }
}

export const actions = {
  getIssues
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_GET_ISSUES_RESPONSE]: (state, action) => {
    return Object.assign({}, state, {issuesData: action.payload})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {

}
export default function issuesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
