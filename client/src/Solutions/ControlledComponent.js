import React from 'react';

const EmailInput = ({ email, onChange }) => (
  <input onChange={onChange} value={email} />
);

export default EmailInput;
