import React, { useState } from 'react';
import img from './../assets/images/dice-empty.png'
import img1 from './../assets/images/dice1.png'
import img2 from './../assets/images/dice2.png'
import img3 from './../assets/images/dice3.png'
import img4 from './../assets/images/dice4.png'
import img5 from './../assets/images/dice5.png'
import img6 from './../assets/images/dice6.png'

function Dice() {

  const [dice, setDice ] = useState(img);
  const newDice = () => {
      setDice(img)
    let randomNo = Math.floor(Math.random() * 6) + 1;
    console.log(randomNo)
    setTimeout(() => {
        switch(randomNo) {
        case 1:
            setDice(img1)
          break;
        case 2:
            setDice(img2)
          break;
          case 3:
            setDice(img3)
          break;
          case 4:
            setDice(img4)
          break;
          case 5:
            setDice(img5)
          break;
          case 6:
            setDice(img6)
          break;
        default:
            setDice(img)
      } 
    }, 1000)
    
  }

  return (
    <div>
        <img className="dice" src={dice} alt="" onClick={ newDice }/>
    </div>
  );
}
 
export default Dice;