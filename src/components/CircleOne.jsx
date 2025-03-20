import React from 'react'
import circleAnimation from '../assets/animations/circleTwo.json'
import Lottie from 'lottie-react'
const CircleOne = () =>{
    return(
        <>
        <Lottie animationData = {circleAnimation} loop={true}/>
        </>
    )
}
export default CircleOne;