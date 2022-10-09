import React, { useState,useEffect,useRef } from "react";
import style from "./Blogs.module.css";
import { Icon } from "semantic-ui-react";
import data from "./data.json";
import {Fade} from 'react-reveal'
import {Link} from 'react-router-dom'

const Blogs = ({state}) => {
  const titleRef = useRef()
  useEffect(()=>{
  if(state==="Blog"){
   titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  },[state])
  const [arrow, setArrow] = useState(false);
  const handleEnter = () => {
    setArrow(true);
  };
  const handleLeave = () => {
    setArrow(false);
  };
  const [link, setLink] = useState('')
  const handleClick=(title,link)=>{
      setLink(link);
  }
  
  return (
    <div>
      {/* {state?<Redirect to={link}></Redirect>:null} */}
      <div className={style.container} ref={titleRef}>
        <div className={style.textContainer} onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}>
          <Fade bottom><strong className={style.blogs}>BLOGS</strong></Fade>
         <Fade bottom> <h1 className={style.latestBlog}>Latest Blogs</h1></Fade>
         <Fade bottom>
         <p className={style.projectView}>
            View all<span
                    className={`${arrow ? style.arrowRight : style.arrowLeft}`}
                  >
                    <Icon className="arrow right"> </Icon>
                  </span>
          </p>
         </Fade>
        </div>
        <div className={style.blogListBox}>
          {data.map(({ title,link,date }, index) => {
            return (
             <Fade bottom key={index}>
               <Link to={link} target='_blank' key={index} rel='noreferrer'> <div
                key={index}
                className={style.blogList}
                
                onClick={()=>handleClick(title,link)}
              >
                <span>{date}</span>
                <h2>{title}</h2>
                
                <p>
                  Read the article{" "}
                  
                    <Icon className="arrow right"> </Icon>
                  
                </p>
                <div className={style.line}></div>
              </div>
              </Link>
             </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
