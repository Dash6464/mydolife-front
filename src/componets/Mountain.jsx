import React from 'react';
import Lottie from "lottie-react";
import * as animacion from './../lottie/montaña.json';

const Mountain = () => {
  return (
    <div style={{ zIndex: 10}}>
      <Lottie animationData={animacion} loop={true} autoPlay={true}/>
    </div>
  )
}

export default Mountain