import React from "react";
import style from "./Footer.module.css";

const Footer = ({ handleBackClick }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.title}>Ready to make something kickass?</h1>
          <strong className={style.colorTitle} onClick={handleBackClick}>Let's get on a call.</strong>
        </div>
        <div className={style.list}>
          <p onClick={handleBackClick}>About</p>
          <p onClick={handleBackClick}>Services</p>
          <p onClick={handleBackClick}>Projects</p>
          <p onClick={handleBackClick}>Blog</p>
        </div>
        <p className={style.copyright}>
          © All rights reserved. Created by Prakash Sparkz
        </p>
      </div>
    </div>
  );
};

export default Footer;
