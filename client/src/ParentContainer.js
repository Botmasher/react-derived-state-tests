import React, { Component } from 'react';
import CopyPropsToState from './Antipatterns/';
import EraseStateOnPropsChange from './Antipatterns/';
import ControlledComponent from './Solutions';

class ParentContainer extends Component {
  state = {
    email: ''
  };

  onChange = e => this.setState({ email: e.target.value });

  render () {
    return (
      <div>
        <CopyPropsToState email={this.state.email} />
        <EraseStateOnPropsChange email={this.state.email} />
        <ControlledComponent email={this.state.email} onChange={this.onChange} />
      </div>
    );
  }
}

export default ParentContainer;
