import React from 'react'
import classes from './IssuesPage.scss'

// components
import Button from 'react-bootstrap/lib/Button';
import IssueTable from 'components/IssueTable'
import _ from 'lodash'


export default class IssuesPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let content = <div>Nothing to show</div>
    if(this.props.getIssuesResponse) {
      const hasError = _.has(this.props.getIssuesResponse, 'error')
      if(hasError && this.props.getIssuesResponse.error === 'Unauthorized') {
        this.props.resetGetIssuesResponse()
      }
      content = <IssueTable issues={this.props.getIssuesResponse.data} />
    } else {
      this.props.getIssues()
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

IssuesPage.propTypes = {
  getIssuesResponse: React.PropTypes.object,
  getIssues: React.PropTypes.func.isRequired,
  resetGetIssuesResponse: React.PropTypes.func.isRequired
}
