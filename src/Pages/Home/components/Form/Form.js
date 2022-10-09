import React, { useState, useEffect,useRef } from "react";
import style from "./Form.module.css";
import { Form as Forms, Button } from "semantic-ui-react";
import { send } from "emailjs-com";
import validator from "validator";
import "react-responsive-modal/styles.css";

import { init } from "emailjs-com";
init("user_6jhlhZUyZghcPzpSHueGS");

const Form = ({state}) => {
  const titleRef = useRef()
  useEffect(()=>{
    if(state==="Book a call" ||state==="Let's get on a call."){
     titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    },[state])

  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [emptyName, setEmptyName] = useState("");
  const [emptyEmail, setEmptyEmail] = useState("");
  const [emptyMessage, setEmptyMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleChange = (e) => {
    setEmptyName("");
    setEmptyMessage("");
    setEmptyEmail("");
    setEmailError("");

    setData((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  function sendEmail(e) {
    e.preventDefault();

    if (data.name.trim() === "") {
      return setEmptyName("!Please enter a name");
    }
    if (data.email.trim() === "") {
      return setEmptyEmail("!Please enter a message");
    }
    if (data.message.trim() === "") {
      return setEmptyMessage("!Please enter a message");
    }

    if (validator.isEmail(data.email)) {
      setData({
        name: "",
        email: "",
        message: "",
      });

      send(
        "service_w0vxwic",
        "template_rqn3t4o",
        data,
        "user_6jhlhZUyZghcPzpSHueGS"
      ).then(
        (result) => {
          setMessage("Mail sended successfully");
          setTimeout(() =>{
            setMessage("")
          },2000)
        },
        (error) => {
          
          setMessage("Error in sending a Mail");
          setTimeout(() =>{
            setMessage("")
          },2000)
        }

      );
      setData({
        name: "",

        email: "",
        message: "",
      });
    } else {
      setEmailError("!Enter the valid Email Address");
    }
  }


  return (
    <div className={style.form} ref={titleRef}>
      <h1 className={style.title}>BOOK A CALL</h1>
      <Forms className={style.mainForm}>
        <Forms.Field>
          <label className={style.inputLabel}>Name</label>
          <input
            placeholder="Enter your Name"
            className={style.input}
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <p className={style.warning}>{emptyName ? emptyName : null}</p>
        </Forms.Field>
        <Forms.Field>
          <label className={style.inputLabel}>Email</label>
          <input
            placeholder="Enter your Email"
            className={style.input}
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <p className={style.warning}>
            {emptyEmail ? emptyEmail : null}
            {emailError ? emailError : null}
          </p>
        </Forms.Field>
        <Forms.Field>
          <label className={style.inputLabel}>Message</label>
          <textarea
            placeholder="Enter your Query"
            className={style.input}
            name="message"
            value={data.message}
            onChange={handleChange}
          />
          <p className={style.warning}>{emptyMessage ? emptyMessage : null}</p>
        </Forms.Field>
        <Button type="submit" className={style.submit} onClick={sendEmail}>
          Submit
        </Button>
        {message ? (
         
         <h2 className={style.modal}>
           {message}
         </h2>
        
       ) : null}
      </Forms>
      <div>
       
      </div>
    </div>
  );
};

export default Form;
