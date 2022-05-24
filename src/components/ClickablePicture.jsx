import React, { useState } from 'react';
import img1 from './../assets/images/maxence.png'
import img2 from './../assets/images/maxence-glasses.png'

function ClickablePicture(props) {

  const [pic, togglePic] = useState(img1);
  const toggle = () => {
    if(pic === img1) togglePic(img2)
    if(pic === img2) togglePic(img1)
  }

  return (
    <div>
        <img src={pic} alt="" onClick={ toggle }/>
    </div>
  );
}
 
export default ClickablePicture;