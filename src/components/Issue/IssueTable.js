import React from 'react';
import classes from './IssueTable.scss';

// components
import { Table } from 'react-bootstrap';
import IssueRow from 'components/Issue/IssueRow';

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
        </tr>
      </thead>
      <tbody>
        <IssueRow/>
        <IssueRow/>
        <IssueRow/>
      </tbody>
    </Table>
  </div>
);

export default IssueTable
