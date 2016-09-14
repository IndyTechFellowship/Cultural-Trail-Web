import React from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux'
import Lockr from 'lockr'

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        constructor(props){
          super(props)

        }

        componentWillMount() {
          const token = Lockr.get('token')
          this.state = {
            token: token
          }
            this.checkAuth();
        }

        checkAuth() {
            if (this.state.token === undefined) {
                this.props.goToLogin()
            }
        }

        render() {
            return (
                <div>
                    {this.state.token !== null
                        ? <Component {...this.props} children={this.props.children}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
    });

    const mapDispatchToProps = (dispatch, props) => {
      return {
        goToLogin: () => {
          dispatch(push("/login"))
        }
      }
    }

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);

}
