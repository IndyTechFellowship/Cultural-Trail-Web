import React from 'react';
import classes from './IssueView.scss';

// components
import { Grid } from 'react-bootstrap';
import IssueTable  from 'components/Issue/IssueTable';

export const IssueView = () => (
  <div>
    <Grid fluid={true}>
        <IssueTable />
    </Grid>
  </div>
);

export default IssueView
