import React from 'react'
import classes from './IssueRow.scss'

// components
import { Button } from 'react-bootstrap'

export const IssueRow = (props) => (
  <tr key={props.issue.id}>
    <td>{props.issue.name}</td>
    <td>{props.issue.priority > 0}</td>
    <td>{props.issue.open}</td>
    <td>{props.issue.description}</td>
    <td>image</td>
    <td>{props.issue.resolvedDate}</td>
    <td>{props.issue.reportedDate}</td>
    <td>{props.issue.reportedBy}</td>
    <td>
        <Button bsStyle="link" >view details</Button>
    </td>
  </tr>
);

export default IssueRow
