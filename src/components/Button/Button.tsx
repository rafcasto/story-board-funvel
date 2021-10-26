import React from 'react';
import './button.css';
import  {Button}  from "@material-ui/core"
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  variant?: 'text' | 'contained' | 'outlined';

  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
 export const IButton = ({
  primary = false,
  variant = 'contained',
  backgroundColor,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <Button
      color={mode}
      variant={variant}
      size = {size}
    
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};
