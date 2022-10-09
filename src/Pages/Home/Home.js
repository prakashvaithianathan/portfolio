import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import Products from "./components/Products/Products";
import Education from "./components/Education/Education";
// import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Technology from "./components/Technology/Technology";
import Form from "./components/Form/Form";

import { Icon } from "semantic-ui-react";

const Home = ({ top }) => {
  const [active, setActive] = useState("");
  const [state, setState] = useState("");

  function handleBackClick(e) {
   
      setState(e.target.innerHTML);
   
      setTimeout(() => {
        setState("");
      }, 1000);
    
  
  }
  useEffect(() => {
    
    setState(top);
    // window.location.pathname='/'
    
  }, [top]);


  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Navbar handleBackClick={handleBackClick}></Navbar>
      </div>

      <div className={style.main}>
        <Main state={state} handleBackClick={handleBackClick}></Main>
      </div>
      <div className={style.technology}>
        <Technology></Technology>
      </div>
      <div className={style.services}>
        <Services state={state}></Services>
      </div>
      <div className={style.projects}>
        <Projects state={state}></Projects>
      </div>
      <div className={style.blogs}>
        <Blogs state={state}></Blogs>
      </div>
      <div className={style.band}>
        <h1 className={style.title}>LINKS</h1>
        <div className={style.links}>
          <div
            className={active === "github" ? style.active : null}
            onMouseEnter={() => setActive("github")}
            onMouseLeave={() => setActive("")}
            onClick={() =>window.open("https://github.com/prakashvaithianathan",'_blank')}
          >
            <Icon className="github" color="grey" size="huge">
              {" "}
            </Icon>{" "}
            <h2
              href="https://github.com/prakashvaithianathan"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </h2>
          </div>
          <div
            className={active === "linkedIn" ? style.active : null}
            onMouseEnter={() => setActive("linkedIn")}
            onMouseLeave={() => setActive("")}
            onClick={() =>window.open("https://www.linkedin.com/in/prakash-vaithinathan-8484a3154/",'_blank')}
          >
            <Icon className="linkedin" color="purple" size="huge">
              {" "}
            </Icon>
            <h2
              href="https://www.linkedin.com/in/prakash-vaithinathan-8484a3154/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </h2>
          </div>
          <div
            className={active === "twitter" ? style.active : null}
            onMouseEnter={() => setActive("twitter")}
            onMouseLeave={() => setActive("")}
            onClick={() =>window.open("https://twitter.com/SparkzPrakash",'_blank')}

          >
            <Icon className="twitter" color="teal" size="huge">
              {" "}
            </Icon>
            <h2
              href="https://twitter.com/SparkzPrakash"
              target="_blank"
              rel="noreferrer"
              
            >
              Twitter
            </h2>
          </div>
          <div
            className={active === "facebook" ? style.active : null}
            onMouseEnter={() => setActive("facebook")}
            onMouseLeave={() => setActive("")}
            onClick={() =>window.open("https://www.facebook.com/profile.php?id=100072068212829",'_blank')}
          >
            <Icon className="facebook" color="blue" size="huge">
              {" "}
            </Icon>
            <h2
              href="https://www.facebook.com/profile.php?id=100072068212829"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </h2>
          </div>
        </div>
        <div>lorem*10</div>
      </div>
      <div className={style.products}>
        <Products></Products>
      </div>
      <div className={style.education}>
        <Education></Education>
      </div>
      {/* <div className={style.testimonials}>
        <Testimonials></Testimonials>
      </div> */}
      <div className={style.form}>
        <Form state={state}></Form>
      </div>
      <div className={style.footer}>
        <Footer handleBackClick={handleBackClick}></Footer>
      </div>
    </div>
  );
};

export default Home;
