import React, { Component } from 'react';

class EraseStateOnPropsChange extends Component {
  state = {
    props: this.props
  };

  handleChange = e => this.setState({ props: e.target.value });

  componentWillReceiveProps() {
    if (nextProps !== this.props) {
      this.setState({ props: nextProps });
    }
  }

  render () {
    return (
      <div>Antipattern #2: Erase state when props change</div>
      <input onChange={handleChange} value={this.state.props} />
    );
  }
}

export default EraseStateOnPropsChange;
