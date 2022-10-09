import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { Icon } from "semantic-ui-react";

const Navbar = ({ handleBackClick }) => {
  const [arrow, setArrow] = useState(false);
  const [responsive, setResponsive] = useState("");
  const [drop, setDrop] = useState(false);
  const [totalDrop, setTotalDrop] = useState(false);
  const handleEnter = () => {
    setArrow(true);
  };
  const handleLeave = () => {
    setArrow(false);
  };
  const checkForResponsive = () => {
    if (x.matches) {
      setResponsive(false);
      setTotalDrop(false);
      setDrop(false);
    } else {
      setResponsive(true);
      setTotalDrop(false);
      setDrop(true);
    }
  };

  const x = window.matchMedia("(max-width:1000px)");
  x.addEventListener("change", checkForResponsive);

  useEffect(() => {
    const x = window.matchMedia("(max-width:1000px)");
    setTotalDrop(false);
    if (x.matches) {
      setResponsive(false);
    } else {
      setResponsive(true);
    }
  }, []);

  const handleDropDown = (e) => {
    if (drop) {
      setDrop(false);
      // setDropList(false)
      setTotalDrop(true);
    } else {
      setDrop(true);
      // setDropList(true);
      setTotalDrop(true);
    }
  };
  const dropUp = () => {
    setDrop(false);
    setTotalDrop(false);
  };

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        {/* {drop ? <div><h1>asf</h1></div> : null} */}
        <div>
          <h2 className={style.logo_font}>
            Prakash Sparkz<span className={style.dot}></span>
          </h2>
        </div>
        {responsive ? (
          <div className={style.list}>
            <li className={style.about} onClick={handleBackClick}>
              <p> About</p>
            </li>
            <li className={style.services} onClick={handleBackClick}>
              Services
            </li>
            <li className={style.projects} onClick={handleBackClick}>
              Projects
            </li>
            {/* <Link  to='projects'><li>Projects</li></Link> */}
            <li className={style.blog} onClick={handleBackClick}>
              Blog
            </li>
            <li
            onClick={handleBackClick}
              className={style.book}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              Book a call
            </li>
            <span
              className={`${arrow ? style.arrowRightTop : style.arrowLeftTop}`}
            >
              <Icon className="arrow right"></Icon>
            </span>
          </div>
        ) : (
          <div className={style.sideBar}>
            <Icon className="sidebar" size="large" onClick={handleDropDown}>
              {" "}
            </Icon>
          </div>
        )}
      </div>

      {totalDrop ? (
        <div
          className={drop ? style.dropList : style.dropListUp}
          onClick={dropUp}
        >
          <li onClick={handleBackClick}>About</li>
          <li onClick={handleBackClick}>Services</li>
          <li onClick={handleBackClick}>Projects</li>
          <li onClick={handleBackClick}>Blog</li>
          <div className={style.bookBox} onClick={handleBackClick}>
            <li
              className={style.book}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              Book a call
            </li>
            <span className={`${arrow ? style.arrowRight : style.arrowLeft}`}>
              <Icon className="arrow right"></Icon>
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
