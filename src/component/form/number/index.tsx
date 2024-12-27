import React, { useState } from 'react';
import FormField from '../base';

const FormNumber: React.FC = () => {
  const [number, setNumber] = useState<number | string>('');

  return (
    <div>
      <FormField
        label="Number Input"
        placeholder="Enter number"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
};

export default FormNumber;