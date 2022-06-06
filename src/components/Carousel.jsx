
import { useState } from 'react'

const Carousel = (props) => {
    const imgArray = props.images;
    const [ image, setImage ] = useState(1)

    const handlePrevious = () => {
        if(image!==0) setImage(image-1)
    }
    const handleNext = () => {
        if(image!==imgArray.length-1) setImage(image+1)
    }

  return (
    <div>
        <h1>Carousel</h1>
        <img src={imgArray[image]} alt="portrait" />
        <br />
        <button onClick={handlePrevious} >⬅️</button>
        <button onClick={handleNext}>➡️</button>
    </div>
  )
}

export default Carousel