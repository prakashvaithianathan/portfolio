import React, { useState,useRef,useEffect } from "react";
import style from "./Projects.module.css";
import data from "./data.json";
import { Icon } from "semantic-ui-react";
import { Fade,Flip } from "react-reveal";


const Projects = ({state}) => {
  const [projectLink, setProjectLink] = useState('')
  const titleRef = useRef()
 useEffect(()=>{
 if(state==="Projects"){
  titleRef.current.scrollIntoView({ behavior: 'smooth' })
 }
 },[state])
  const [move, setMove] = useState(100);
  const previous = () => {
    if (move > 50) {
      return setMove(-3100);
    }
    setMove((prev) => prev + 200);
  };
  const next = () => {
    if (move < -3100) {
      return setMove(100);
    }
    setMove((prev) => prev - 200);
  };
 
  const redirect=(link)=>{
    setProjectLink(link)
  }
  return (
   
    <div className={style.container} ref={titleRef}>
       {/* {projectLink?
       ():null} */}
      <Fade bottom>
        <h5 className={style.projects}>PROJECTS</h5>
      </Fade>

      <h1 className={style.title}>
        I bring results<span className={style.dot1}></span> <br />
        My clients are proof<span className={style.dot2}></span>
      </h1>

      <Fade bottom>
        <div className={style.viewProjectBox}>
          <button className={style.viewProject}>View Projects</button>
          <span className={style.linearGradientBox}></span>
        </div>
      </Fade>
      

        <div className={style.listBox}>
          {data.map(({ image, name, title,link },index) => {
            return (
             
              <div
              onClick={()=>redirect(link)}
                 key={index}
                className={style.listInsideBox}
                style={{ transform: `translateX(${move}px)` }}
              >
                 <a href={projectLink} target='_blank' rel='noreferrer'>
                 
                <div className={style.projectImageBox}>
                <img className={style.projectImage} src={image} alt="name" />
                </div>
                
                <Flip top>
                   <div className={style.listText}> 
                   <p className={style.projectName}>{name}</p>
                   <h4 className={style.projectTitle}>{title}</h4>
                   <p className={style.projectView}>View Project <Icon className="arrow right"> </Icon></p>
                   </div>
                   </Flip> 
                   </a>
                {/* <Card image={image} header={name} description={title}></Card> */}
               
              </div>
              
            );
          })}
        </div>
        
      <div className={style.blackBackGround}>
        
      </div>

      <div className={style.buttons}>
        <button onClick={previous} className={style.prev}>
          &lt;{" "}
        </button>
        <button onClick={next} className={style.next}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
