import React from 'react';
import classes from './IssueTable.scss';
import _ from 'lodash'

// components
import { Table } from 'react-bootstrap';
import IssueRow from './IssueRow';

const renderIssueRow = (props) => {
  const hasData = _.has(props, 'issues')
  if(hasData && props.issues !== undefined){
    return props.issues.map((issue) => {
      return <IssueRow issue={issue} key={issue.id}/>
    })
  } else {
    return(null)
  }
}

export const IssueTable = (props) => (
  <div>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>name</th>
          <th>priority</th>
          <th>open</th>
          <th>description</th>
          <th>image</th>
          <th>resolved date</th>
          <th>reported date</th>
          <th>reported by</th>
          <th>view details</th>
        </tr>
      </thead>
      <tbody>
        {renderIssueRow(props)}
      </tbody>
    </Table>
  </div>
);



export default IssueTable
