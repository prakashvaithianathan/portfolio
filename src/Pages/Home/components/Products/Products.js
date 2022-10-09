import React from "react";
import style from "./Products.module.css";
import {Fade} from 'react-reveal'

const Products = () => {
  
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <div className={style.firstBox}>
        <Fade bottom>  <strong className={style.productDesigner}>WEB DEVELOPER</strong></Fade>
         <Fade bottom> <h1>That's me!</h1></Fade>
        </div>
       
        <div className={style.descriptionBox}>
        <Fade bottom>
          <p className={style.description}>
            I've worked with a diverse range of clients,
            from startups to Fortune companies. I love crafting interfaces
            the delight users and help businesses grow.
          </p>
          </Fade>
        </div>
       
      </div>
      <Fade bottom>
      <div className={style.productImage}>
  
      <div className={style.testImage1}></div>
        <div className={style.testImage2}></div>
        <div className={style.testImage3}></div>
        <div className={style.testImage4}></div>
      </div>
      
      </Fade>
    </div>
  );
};

export default Products;
