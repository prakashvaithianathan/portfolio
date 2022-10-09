import React from "react";
import style from "./Education.module.css";
import data from "./data.json";
import { Icon } from "semantic-ui-react";
import { Fade } from "react-reveal";
const Education = () => {
  return (
    <div className={style.container}>
      <div className={style.educationContainer}>
        <div className={style.educationBox}>
         <Fade> <h2 className={style.educationTitle}>📚 &nbsp; Education</h2></Fade>
          {data[0].education.map(({ name, course, duration }, index) => {
            return (
              <Fade bottom key={index}>
                <div key={index} className={style.education}>
                  <span className={style.arrow}>
                    <Icon className="arrow right"></Icon>
                  </span>
                  <h5 className={style.educationName}>{name}</h5>
                  <p className={style.educationCourse}>{course}</p>
                  <span className={style.educationDuration}><span className={style.dot}></span>{duration}</span>
                </div>
              </Fade>
            );
          })}
        </div>
        <div className={style.techBox}>
          <Fade bottom>
          <h2 className={style.techTitle}>
            <span>
              <Icon className="desktop icon" color="pink"></Icon>
            </span>{" "}
            &nbsp; Experiences
          </h2>
          </Fade>
          {data[1].techCourses.map(({ name, course, duration }, index) => {
            return (
              <Fade bottom key={index}>
                <div key={index} className={style.technology}>
                  <span className={style.arrow}>
                    <Icon className="arrow right"></Icon>
                  </span>
                  <h5 className={style.techName}>{name}</h5>
                  <p className={style.techCourse}>{course}</p>
                  <span className={style.techDuration}><span className={style.dot}></span>{duration}</span>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
