import React, { Component } from 'react';

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
    return (
      <div>Antipattern #2: Erase state when props change</div>
      <input onChange={handleChange} value={this.state.email} />
    );
  }
}

export default EraseStateOnPropsChange;
