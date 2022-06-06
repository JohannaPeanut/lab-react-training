import { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'

const RGBColorPicker = () => {

    const [ rValue, setRvalue] = useState(0)
    const [ gValue, setGvalue] = useState(0)
    const [ bValue, setBvalue] = useState(0)

  return (
    <div>
        <div>R: <SingleColorPicker color='r' value={rValue} onChange={ (r) => { setRvalue(r) }  }/></div>
        <div>G: <SingleColorPicker color='g' value={gValue} onChange={ (g) => { setGvalue(g) }  }/></div>
        <div>B: <SingleColorPicker color='b' value={bValue} onChange={ (b) => { setBvalue(b) }  }/></div>
        <div className="rgbContainer">
            <div className="square" style={{'backgroundColor': `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
            <div>rgb({rValue}, {gValue}, {bValue})</div>
         
        </div>
    </div>
  )
}

export default RGBColorPicker