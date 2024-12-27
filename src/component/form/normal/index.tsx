import React, { useState } from 'react';
import FormField from '../base';

const FormNormal: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <FormField
        label="Normal Text Input"
        placeholder="Enter text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default FormNormal;
