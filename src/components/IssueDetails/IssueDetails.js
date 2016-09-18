import React from 'react';
import classes from './IssueDetails.scss';
import _ from 'lodash'
import moment from 'moment'

import  { Image, Glyphicon } from 'react-bootstrap'

const isResolved = (open) => (
  open ? <Glyphicon glyph="remove" className={classes.removeIcon} /> : <Glyphicon glyph="ok" className={classes.okIcon} />
)

const renderDate = (date) => {
  const d = moment(date);
  return d.isValid() ? d.format("MMM DD, YYYY") : "N/A";
}

export const IssueDetails = (props) => (
  <div className={classes.container}>
    <Image src={props.issue.imageUrl} className={classes.image} />
    <h3>{props.issue.name}</h3>
    {props.issue.description}
    <div className={classes.property}>
      <span className={classes.label}><Glyphicon glyph="map-marker" /> </span>
      <span>{`(${props.issue.lat}, ${props.issue.lng})`}</span>
    </div>
    <div className={classes.property}>
      <span className={classes.label}>Status: </span>
      <span>{isResolved(props.issue.open)}</span>
    </div>
    <div className={classes.property}>
      <span className={classes.label}>Reported Date: </span>
      <span>{renderDate(props.issue.reportedDate)}</span>
    </div>
    <div className={classes.property}>
      <span className={classes.label}>Resolved Date: </span>
      <span>{renderDate(props.issue.resolvedDate)}</span>
    </div>
    <div className={classes.property}>
      <span className={classes.label}>Responsible: </span>
      <span>CT</span>
    </div>
  </div>
);

export default IssueDetails
