import React from 'react'

const SelectedColor = ({color}) => (
    <div class="picked-color" style={{background: color}}>{color}</div>

)

export default SelectedColor