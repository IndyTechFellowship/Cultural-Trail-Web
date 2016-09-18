import React from 'react'
import classes from './IssuesPage.scss'

// components
import IssueTable from 'components/IssueTable'
import IssueDetails from 'components/IssueDetails'
import _ from 'lodash'

import { Grid, Row, Col } from 'react-bootstrap'

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
      content = (
        <Grid fluid={true} className={classes.container}>
          <Row className="show-grid" className={classes.row}>
            <Col md={7} className={classes.main}>
              <IssueTable issues={this.props.getIssuesResponse.data} selected={this.props.getSelectedIssue} onSelect={this.props.selectIssue}/>
            </Col>
            <Col md={5} className={classes.sidebar}>
              <IssueDetails issue={
                  _.find(
                    this.props.getIssuesResponse.data,
                    (issue) => (issue.id == this.props.getSelectedIssue)
                  )} />
            </Col>
          </Row>
        </Grid>)
    } else {
      this.props.getIssues()
    }
    return (
      <div>
        <h3>Issues</h3>
        {content}
      </div>
    )
  }
}

IssuesPage.propTypes = {
  getIssuesResponse: React.PropTypes.object,
  getIssues: React.PropTypes.func.isRequired,
  resetGetIssuesResponse: React.PropTypes.func.isRequired,
  selectIssue: React.PropTypes.func.isRequired,
  getSelectedIssue: React.PropTypes.number.isRequired,
}
