import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface IInputProps {
  key?: string | number;
  label: string;
  name?: string;
  className?: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

function Input({
  key,
  label,
  name,
  className = 'input',
  type = 'text',
  value = '',
  placeholder = 'Input value',
  required = false,
  onChange,
  onBlur,
  error,
  helperText,
  disabled
}: IInputProps): JSX.Element {
  return (
    <TextField
      key={key}
      label={label}
      name={name}
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      disabled={disabled}
    />
  );
}

export default Input;
