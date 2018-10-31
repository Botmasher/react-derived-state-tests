import React, { Component } from 'react';

class CopyPropsToState extends Component {
  state = {
    props: this.props
  };

  handleChange = event => this.setState({ props: event.target.value });

  componentWillReceiveProps(nextProps) {
    this.setState({ props: nextProps });
  }

  render () {
    return (
      <div>Antipattern #1: Copy props to state unconditionally</div>
      <input onChange={e => this.handleChange(e)} value={this.state.props} />
    );
  }
}

export default CopyPropsToState;
