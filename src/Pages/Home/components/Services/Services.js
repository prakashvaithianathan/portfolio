import React,{useEffect,useRef} from "react";
import style from "./Services.module.css";
import Box from "./components/Box";
import { Fade } from "react-reveal";

const Services = ({state}) => {
 
  const titleRef = useRef()
  useEffect(()=>{
  if(state==="Services"){
   titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  },[state])
  return (
    <div className={style.serviceContainer} ref={titleRef}>
      <Fade bottom>
        {" "}
        <strong className={style.services}>SERVICES</strong>
      </Fade>
      <Fade bottom>
        {" "}
        <h1 className={style.title}>
          Develop that solves problems,
          <br /> one product at a time<span className={style.dot}></span>
        </h1>
      </Fade>
      <div className={style.boxContainer}>
        <div>
          <Box
            image="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584362e74acfa6b75398_Group%2051.svg"
            title="What I can do for you"
            content="Faster, better products that your users love. Here's all the services! provide."
            list1="Blockchain Development"
            list2="Web Development"
            list3="App Development"
          ></Box>
        </div>
        <div>
          <Box
            image="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef5843b6409375f7c23f2b_Group%2017.svg"
            title="Language I'm fluent in"
            content="Every developer needs the right tools to do the perfect job. Thankfully, I'm multilingual"
            list1="React JS"
            list2="Node JS"
            list3="Mongo DB"
          ></Box>
        </div>
        <div>
          <Box
            image="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef58435ceaed068dde60ca_Group%2016.svg"
            title="What you can expect"
            content="I design products that are more than pretty. I make them shippable and usable."
            list1="Clean and functional"
            list2="Device and user friendly"
            list3="Efficient and maintable"
          ></Box>
        </div>
      </div>
    </div>
  );
};

export default Services;
