import React from 'react';

const DisplayOutput = ({ output }) => (
  <div className="display-output">{output ? output : "(output)"}</div>
);

export default DisplayOutput;
