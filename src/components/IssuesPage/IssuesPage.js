import React from 'react'
import classes from './IssuesPage.scss'

// components
import Button from 'react-bootstrap/lib/Button';
import IssueTable from 'components/IssueTable'

export default class IssuesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = <div>Nothing to show</div>;
    if(this.props.getIssuesResponse) {
      content = <IssueTable issues={this.props.getIssuesResponse.data} />;
    } else {
      this.props.getIssues();
    }
    return (
      <div>
        <h1>Issues</h1>
        {content}
      </div>
    );
  }
}

IssuesPage.propTypes = {
  getIssuesResponse: React.PropTypes.object,
  getIssues: React.PropTypes.func.isRequired
}
