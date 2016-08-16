import React from 'react'
import classes from './IssueRow.scss'

// components
import { } from 'react-bootstrap'

export const IssueRow = (props) => (
  <tr>
    <td>name</td>
    <td>priority</td>
    <td>open</td>
    <td>description</td>
    <td>image</td>
    <td>resolved date</td>
    <td>reported date</td>
    <td>reported by</td>
  </tr>
);

export default IssueRow
