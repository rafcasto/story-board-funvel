import React from "react";
import  styled  from "styled-components"
import  {TextField}  from "@material-ui/core"
import './TextBox.css'
const TextBoxStyled = styled(TextField); 

export interface TextBoxProps
{
    label: String, 
    backgroundColor?: String
    variant: 'outlined' | 'filled' | 'standard'
    isFullSize: boolean
}
export const TextBox = ({
    isFullSize = false,
    label,
    variant,
    ...props
}:TextBoxProps) => {
    const size = isFullSize ? 'storybook-button--Full' : '';
    return (<TextField label={label} variant={variant}
      className={size}
        {...props} />)
}
