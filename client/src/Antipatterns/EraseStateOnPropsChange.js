import React, { Component } from 'react';
import DisplayOutput from '../DisplayOutput';

class EraseStateOnPropsChange extends Component {
  state = {
    email: this.props.email
  };

  handleChange = e => this.setState({ email: e.target.value });

  componentWillReceiveProps(nextProps) {
    if (nextProps.email !== this.props.email) {
      this.setState({ email: nextProps.email });
    }
  }

  render () {
    const { email } = this.state;
    return (
      <div>
        <p>Antipattern #2: Erase state when props change</p>
        <input onChange={this.handleChange} value={email} />
        <DisplayOutput output={email} />
      </div>
    );
  }
}

export default EraseStateOnPropsChange;
