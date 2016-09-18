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
      return <IssueRow issue={issue} key={issue.id} selected={issue.id === props.selected} onSelect={props.onSelect}/>
    })
  } else {
    return(null)
  }
}

export const IssueTable = (props) => (
  <div>
    <Table responsive>
      <thead>
        <tr>
          <th className="col-md-1">Status</th>
          <th className="col-md-4">Issue</th>
          <th className="col-md-3">Reported Date</th>
          <th className="col-md-3">Resolved Date</th>
          <th className="col-md-1">Responsible</th>
        </tr>
      </thead>
      <tbody>
        {renderIssueRow(props)}
      </tbody>
    </Table>
  </div>
);

export default IssueTable
