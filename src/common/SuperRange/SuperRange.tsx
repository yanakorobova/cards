import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '147px',
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    color: "#8B8B8B",
                },
                '& .MuiSlider-thumb': {
                    color: '#fff',

                    border: '2px solid #00CC22',
                },
                '& .MuiSlider-thumb:after': {
                    width: '6px',
                    height: '6px',
                    top: '50%',
                    left: '50%',
                    backgroundColor: '#00CC22',
                }
            }}
            step={1}
            min={1}
            max={100}
            getAriaLabel={() => 'Temperature range'}
            {...props}
        />
    )
}

export default SuperRange
