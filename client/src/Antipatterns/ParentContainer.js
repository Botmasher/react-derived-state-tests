import React, { Component } from 'react';
import CopyPropsToState from './';
import EraseStateOnPropsChange from './';

class ParentContainer extends Component {
  state = {
    email: ''
  };

  render () {
    return (
      <div>
        <CopyPropsToState email={this.state.email} />
        <EraseStateOnPropsChange email={this.state.email} />
      </div>
    );
  }
}

export default ParentContainer;
