import React, { FC } from 'react';

interface FormProps {
  label: string;
  placeholder: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
}

const FormWithIcon: FC<FormProps> = ({ label, placeholder, type, value, onChange, icon, iconPosition = 'left' }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>{label}</label>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '8px',
        }}
      >
        {icon && iconPosition === 'left' && <span style={{ marginRight: '8px' }}>{icon}</span>}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
          }}
        />

        {icon && iconPosition === 'right' && <span style={{ marginLeft: '8px' }}>{icon}</span>}
      </div>
    </div>
  );
};

export default FormWithIcon;
