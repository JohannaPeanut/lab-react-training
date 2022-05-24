import React, { useState } from 'react';

const colorArray = ['purple','blue','green','yellow','orange','red']

const LikeButton = () => {
    const [likes, likeUpdate] = useState(0)
    const [color, colorChange] = useState(0)

    const changes = () => {
        likeUpdate(likes+1)
        if(color >= colorArray.length-1) {
            colorChange(0)
        } else {
            colorChange(color+1)
        }
    }

    return (
      <div>
        <button style={{backgroundColor: colorArray[color]}} onClick={ changes }>{likes} Likes</button>
      </div>
    );
  };
  
  export default LikeButton;