import React from 'react'

const SingleColorPicker = (props) => {

    const color = props.color
    const value= props.value

  return (
    <div>
        <input onChange={props.onChange(value)} type="number" value={props.value} placeholder="0"/>
    </div>
  )
}

export default SingleColorPicker