import React, { useState, useEffect, useRef } from "react";
import style from "./Main.module.css";
import { Icon } from "semantic-ui-react";
import { Fade } from "react-reveal";

import Typed from "react-typed";
import prakashCard from '../../../../assets/prakashCard.png'


const Main = ({ state, handleBackClick }) => {
  const titleRef = useRef();
  useEffect(() => {
    if (state === "About") {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);
  const [arrow, setArrow] = useState(false);
  const handleEnter = () => {
    setArrow(true);
  };
  const handleLeave = () => {
    setArrow(false);
  };

  // const textLines = [
  //   "HTML",
  //   "CSS",
  //   "JAVASCRIPT",
  //   "REACT JS",
  //   "NODE JS",
  //   "MONGO DB",
  //   "ADOBE XD",
  //   "AWS",
  //   "GITHUB"
  // ];

  const textLines = ["Full-Stack Developer", "Web3 Developer","App Developer","Blockchain Developer"];


  return (
    <div className={style.container} ref={titleRef}>
      <div className={style.flexContainerMain}>
      <div className={style.titleContainer}>
        <Fade bottom>
          <div className={style.title}>
            <h1>
              <strong className={style.colorTitle}>I design products</strong>{" "}
              <br /> that delight and <br />
              inspire people <span className={style.dot}></span>
            </h1>
          </div>
        </Fade>
        <Fade bottom>
          <div className={style.about}>
            <p>
              Hi! I'm Prakash, a web developer based in India. I create <br />{" "}
              user-friendly interfaces for fast-growing startups.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className={style.hireMe}>
            <div>
              <button className={style.bookCall} onClick={handleBackClick}>
                Book a call
              </button>
              <span className={style.linearGradientBox}></span>
            </div>
            <div>
              <p
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className={style.download}

                id="content"
              >
                <a
                  href="https://drive.google.com/file/d/18aKBiDFxhwICIDYsE_-gtNqi_BHq2owG/view?usp=sharing"
                  download rel="noopener noreferrer"
                  target="_blank"
                >


                  Download CV
                  <span
                    className={`${arrow ? style.arrowRight : style.arrowLeft}`}
                  >
                    <Icon className="arrow right"> </Icon>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* <div className={style.photo}> */}
        {/* <img src={mainImage} alt="mainImage" /> */}
        <div>
  <img src={prakashCard} alt="Prakash" className={style.photoContainer}/>
   </div>
   </div>
      {/* </div> */}

      {/* <div className={style.trustedBox}>
        <Fade bottom>
          <p>Trusted by</p>
        </Fade>
        <Fade bottom>
          <div className={style.images}>
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078b0c235209438ffca029b_Group%20336.png"
              alt="firstLogo"
            />
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078b0c238e88c2e55fe84cf_Group%20335.png"
              alt="secondLogo"
            />
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078b0ccdbeafadf1a24d34a_Group%20333.png"
              alt="thirdLogo"
            />
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078b0cd748b8581836fddf5_Group%20334.png"
              alt="fourthLogo"
            />
          </div>
        </Fade>
      </div> */}
      <h1 className={style.typeFont}>
        I'm Prakash. <br /> I'm a &nbsp;
        <span className={style.typeColor}>
          <Typed strings={textLines} typeSpeed={60} backSpeed={50} loop></Typed>
        </span>
      </h1>
    </div>
  );
};

export default Main;
