import React from 'react'
import classes from './ActivityCard.scss'

// components
import { Panel, Image, Media, Glyphicon } from 'react-bootstrap'

export const ActivityCard = (props) => (
  <div>
    <Panel header={props.title}>
      <Media>
        <Media.Left>
          <Image src="https://placekitten.com/g/150/150" rounded />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Basic panel example</Media.Heading>
          <p>Basic panel example</p>
        </Media.Body>
      </Media>
    </Panel>
  </div>
)

export default ActivityCard
