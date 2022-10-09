import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import Home from "./Pages/Home/Home";
import { Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Mockup, Javascript, Laptop, AwsBlog, Bootstrap,Nft,Blockchain,Exchange } from "./Pages/Blog";


const App = () => {
 


  const [loading, setLoading] = useState(false);
  const [top, setTop] = useState("");
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
  

    
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  
  }, []);

  const scrollTop = () => {
    setTop("About");
    setTimeout(() => {
      setTop("");
    }, 1000);
  };
  const handleScroll = (e) => {
    setTimeout(() => {
      setScroll(true);
    }, 1000);
  };
  return (
    <Router>
      <div className={style.container} onScrollCapture={handleScroll}>
        {loading ? (
         
         <h1 className={style.titleFont}>
            Prakash <br />
            &nbsp;&nbsp;&nbsp;Sparkz<span className={style.dot}></span>
          </h1>
         
        ) : (
          <Route exact path="/" component={Home}>
            <Home top={top}></Home>
          </Route>
        )}
        {scroll ? (
          <div className={style.arrow} style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClick={scrollTop}>
            
            <p style={{transform:'rotate(270deg)',width:'300px',height:'100%',fontWeight:'700',letterSpacing:'12px'}}>BACK TO TOP 
            &nbsp;&nbsp;
            <Icon
              className="arrow  right"
              // size="medium"
              
              color="black"

            ></Icon></p>
            
          </div>
        ) : null}
      </div>
      <Switch>
      <Route
          exact
          path="/blog/top-10-nft"
          component={Nft}
        ></Route>
        <Route
          exact
          path="/blog/what-is-blockchain-technology"
          component={Blockchain}
        ></Route>
        <Route
          exact
          path="/blog/what-is-crypto-exchange"
          component={Exchange}
        ></Route>
        <Route
          exact
          path="/blog/top-6-free-website-mockup-tools-2021"
          component={Mockup}
        ></Route>
        <Route
          exact
          path="/blog/what-is-javascript-the-dynamic-programming-language-for-website"
          component={Javascript}
        ></Route>
        <Route
          path="/blog/best-laptop-for-programming-in-2021"
          exact
          component={Laptop}
        ></Route>
        <Route
          path="/blog/what-is-amazon-web-services"
          exact
          component={AwsBlog}
        ></Route>
        <Route path="/blog/bootstrap" exact component={Bootstrap}></Route>
      </Switch>
      
    </Router>
  );
};

export default App;
