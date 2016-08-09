import React from 'react'
import classes from './DashboardView.scss'

// components
import { Grid, Row, Col, Panel, PageHeader } from 'react-bootstrap'
import ActivityCard from 'components/ActivityCard'

export const DashboardView = () => (
  <div>
    <Grid fluid={true}>
      <Row className="show-grid">
        <Col md={8}>
          <h4>Recent Activity</h4>
          <ActivityCard title="Issue Resolved"/>
          <ActivityCard title="Issue Reported"/>
          <ActivityCard title="Issue Modified"/>
        </Col>
        <Col md={4}>
          <h5>Statistics</h5>
          <Panel>
            Column 2
          </Panel>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default DashboardView
