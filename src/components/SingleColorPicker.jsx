import { useState } from 'react'

const SingleColorPicker = (props) => {

    const handleOnChange = (event) => {
      const value = event.target.value
      props.onChange(value)
    }

  return (
    <div>
        <span>{props.color.toUpperCase()}</span>
        <input onChange={handleOnChange} type="number" min="0" max="255" value={props.value} placeholder="0"/>
    </div>
  )
}

export default SingleColorPicker