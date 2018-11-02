import React, { Component } from 'react';
import DisplayOutput from '../DisplayOutput';

class CopyPropsToState extends Component {
  state = {
    email: this.props.email
  };

  handleChange = event => this.setState({ email: event.target.value });

  componentWillReceiveProps(nextProps) {
    this.setState({ email: nextProps.email });
  }

  render () {
    const { email } = this.state;
    return (
      <div>
        <p>Antipattern #1: Copy props to state unconditionally</p>
        <input onChange={e => this.handleChange(e)} value={email} />
        <DisplayOutput output={email} />
      </div>
    );
  }
}

export default CopyPropsToState;
