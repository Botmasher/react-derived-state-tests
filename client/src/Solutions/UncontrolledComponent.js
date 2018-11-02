import React, { Component } from 'react';
import DisplayOutput from '../DisplayOutput';

class UncontrolledComponent extends Component{
  state = { email: this.props.defaultEmail };

  handleChange = e => this.setState({ email: e.target.value });

  render() {
    const { email } = this.state;
    return (
      <div>
        <p>Solution #2: Fully Uncontrolled Component with Key</p>
        <input onChange={this.handleChange} value={email} />
        <DisplayOutput output={email} />
      </div>
    );
  }
}

export default UncontrolledComponent;
