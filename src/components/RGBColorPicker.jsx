import { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'

const RGBColorPicker = () => {

    const [ rValue, setRvalue] = useState(255)
    const [ gValue, setGvalue] = useState(40)
    const [ bValue, setBvalue] = useState(0)

  return (
    <div>
      <h1>RGB Color Picker</h1>
        <div><SingleColorPicker color='r' value={rValue} onChange={ (r) => { setRvalue(r) }  }/></div>
        <div><SingleColorPicker color='g' value={gValue} onChange={ (g) => { setGvalue(g) }  }/></div>
        <div><SingleColorPicker color='b' value={bValue} onChange={ (b) => { setBvalue(b) }  }/></div>
        <div className="rgbContainer">
            <div className="square" style={{'backgroundColor': `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
            <div>rgb({rValue}, {gValue}, {bValue})</div>
         
        </div>
    </div>
  )
}

export default RGBColorPicker