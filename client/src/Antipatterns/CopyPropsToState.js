import React, { Component } from 'react';

class CopyPropsToState extends Component {
  state = {
    email: this.props.email
  };

  handleChange = event => this.setState({ email: event.target.value });

  componentWillReceiveProps(nextProps) {
    this.setState({ email: nextProps.email });
  }

  render () {
    return (
      <div>Antipattern #1: Copy props to state unconditionally</div>
      <input onChange={e => this.handleChange(e)} value={this.state.email} />
    );
  }
}

export default CopyPropsToState;
