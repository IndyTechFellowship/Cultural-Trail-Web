import React from 'react'
import classes from './IssueRow.scss'
import moment from 'moment'

// components
import { Button, Glyphicon } from 'react-bootstrap'

const isResolved = (open) => (
  open ? <Glyphicon glyph="remove" className={classes.removeIcon} /> : <Glyphicon glyph="ok" className={classes.okIcon} />
)

const renderDate = (date) => {
  const d = moment(date);
  return d.isValid() ? d.format("MMM DD, YYYY") : "N/A";
}

export const IssueRow = (props) => (
  <tr key={props.issue.id} className={props.selected ? classes.selected : classes["not-selected"]} onClick={props.onSelect.bind(this, props.issue.id)}>
    <td className={classes.resolved}>{isResolved(props.issue.open)}</td>
    <td>{props.issue.name}</td>
    <td>{renderDate(props.issue.reportedDate)}</td>
    <td>{renderDate(props.issue.resolvedDate)}</td>
    <td>CT</td>
  </tr>
);

export default IssueRow
