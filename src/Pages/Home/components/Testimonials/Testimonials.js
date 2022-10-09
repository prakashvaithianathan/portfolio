import React, { useState } from "react";
import style from "./Testimonials.module.css";
import data from "./data.json";
import {Zoom,Fade} from 'react-reveal'

const Testimonials = () => {
  const [state, setState] = useState(0);

  const next=()=>{
      const num = data.map((item,i)=>i)
      if(state>=num.length-1){
        return setState(0)
      }
      setState(prev=>prev+1)
  }
  const prev=()=>{
    const num = data.map((item,i)=>i)
    if(state===0){
      return setState(num.length-1)
    }
    setState(prev=>prev-1)
  }
  return (
    <div className={style.container}>
      <Fade bottom><strong className={style.testimonials}>TESTIMONIALS</strong></Fade>
      <Fade bottom><h1 className={style.testimonialsTitle}>Word on the street</h1></Fade>
      <div>
      <img className={style.testimonialsImage} src={data[state].image} alt={data[state].name} />
      
        <Zoom>
        <h2 className={style.testimonialsDesc}>
        <img
        className={style.testimonialsIcon}
          src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg"
          alt="icon"
        />
            
            
            {data[state].description}</h2>
        </Zoom>
        <Zoom><h5 className={style.testimonialsName}>{data[state].name}</h5></Zoom>
       <Zoom> <p className={style.testimonialsWork}>{data[state].work}</p></Zoom>
        <div className={style.buttons}>
        <button onClick={prev} className={style.prev}>&lt;</button>
        <button onClick={next} className={style.next}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
