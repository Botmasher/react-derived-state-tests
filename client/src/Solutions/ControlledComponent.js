import React from 'react';
import DisplayOutput from '../DisplayOutput';

const ControlledComponent = ({ email, onChange }) => (
  <div>
    <p>Solution #1: Fully Controlled Component</p>
    <input onChange={onChange} value={email} />
    <DisplayOutput output={email} />
  </div>
);

export default ControlledComponent;
