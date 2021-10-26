import React from "react";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'

export interface GenderOptionsProps {
    legend: String
    isRow: Boolean
}
const VerticalRadioGroup =
    <RadioGroup

        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
    >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>

const HorizontalRadioGroup = <RadioGroup
    row
    aria-label="gender"
    defaultValue="female"
    name="radio-buttons-group"
>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
</RadioGroup>

export const GenderOptions = ({
    legend,
    isRow,
    ...props
}: GenderOptionsProps) => {

    const content = isRow ? HorizontalRadioGroup
    : VerticalRadioGroup

    return (
        <FormControl component="fieldset" variant="outlined">
            <FormLabel component="legend"  >{legend}</FormLabel>
            {content}
        </FormControl>
    )
}