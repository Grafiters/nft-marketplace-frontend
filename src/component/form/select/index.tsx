import React, { FC } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
}

const FormSelect: FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Please select...',
  icon,
  iconPosition = 'left',
}) => {
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

        <select
          value={value}
          onChange={onChange}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {icon && iconPosition === 'right' && <span style={{ marginLeft: '8px' }}>{icon}</span>}
      </div>
    </div>
  );
};

export default FormSelect;
