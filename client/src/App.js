import React, { Component } from 'react';
import CopyPropsToState from './Antipatterns/CopyPropsToState';
import EraseStateOnPropsChange from './Antipatterns/EraseStateOnPropsChange';
import ControlledComponent from './Solutions/ControlledComponent';
import UncontrolledComponent from './Solutions/UncontrolledComponent';
import Header from './Header';
import './App.css';

class App extends Component {
  state = {
    email: ''
  };

  // method for controlled component
  onChange = e => this.setState({ email: e.target.value });

  render () {
    return (
      <div className="app">
        <Header />
        <CopyPropsToState email={this.state.email} />
        <EraseStateOnPropsChange email={this.state.email} />
        <ControlledComponent email={this.state.email} onChange={this.onChange} />
        <UncontrolledComponent defaultEmail={this.state.email} />
      </div>
    );
  }
}

export default App;
