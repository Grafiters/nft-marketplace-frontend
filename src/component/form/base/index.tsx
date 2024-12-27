import React, { FC } from 'react';

interface FormProps {
  label: string;
  placeholder: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: JSX.Element;
}

const FormField: FC<FormProps> = ({ label, placeholder, type, value, onChange, icon }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>{label}</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={{ padding: '8px', borderRadius: '4px', flex: 1, border: '1px solid #ccc' }}
        />
      </div>
    </div>
  );
};

export default FormField;
