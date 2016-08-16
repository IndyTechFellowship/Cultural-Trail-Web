import React from 'react'
import classes from './IssuesPage.scss'

// components
import Button from 'react-bootstrap/lib/Button';

export const IssuesPage = (props) => (
  <div>
    <p>Note: this still shows the counter control that came with the template, but it should show a table of issues in the future</p>
    <ul>
      {
        props.getIssuesResponse ? props.getIssuesResponse.data.map(
          function(listValue){
            return <li key={listValue.id}>{listValue.name}</li>;
          }
        ) :
          (function() {
            props.getIssues()
            return <li>nothing</li>;
          })()
      }
    </ul>
  </div>
)

IssuesPage.propTypes = {
  getIssuesResponse: React.PropTypes.object,
  getIssues: React.PropTypes.func.isRequired
}

export default IssuesPage
