import React from "react";
import  styled  from "styled-components"
import  {TextField}  from "@material-ui/core"
import './DatePicker.css'
export  interface DatePickerProps
{
    label: String, 
    variant: 'outlined' | 'filled' | 'standard'
    isFullSize: boolean
    defaultValue?:String 
}

export const DatePicker = ({
    isFullSize = false, 
    label,
    variant,
    defaultValue,
    ...props
}:DatePickerProps) => {
    const size = isFullSize ? 'storybook-button--Full' : '';
    return (<TextField
        id="date"
        label={label}
        type="date"
        variant={variant}
        defaultValue={defaultValue}
        className={size}
        InputLabelProps={{
          shrink: true,
        }}
      />)
}