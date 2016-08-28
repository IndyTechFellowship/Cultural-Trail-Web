import { injectReducer } from '../../store/reducers'
import {requireAuthentication} from '../../components/AuthenticatedComponent';

export default (store) => ({
  path: '/issues',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const IssuesPage = require('./containers/IssuesContainer').default
      const reducer = require('./modules/issues').default
      const AuthenticatedIssuesPage = requireAuthentication(IssuesPage)

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'issuesPage', reducer })

      /*  Return getComponent   */
      cb(null, AuthenticatedIssuesPage)

    /* Webpack named bundle   */
  }, 'issues')
  }
})
