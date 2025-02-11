import React, { useEffect, useRef, useState } from 'react'
import video from "./video.mp4";

const RefExample = () => {
    const [play , setPlay] = useState(true);
    const eleRef = useRef();
    let videoRef = useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style.color="crimson";
        eleRef.current.innerText="React Ref"
    })

    let PlayORpause=()=>{
        if(play === true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>
      <h1 ref={eleRef}>RefExample</h1>
      <video src={video} ref={videoRef} onClick={PlayORpause}></video>
    </div>
  )
}

export default RefExample
