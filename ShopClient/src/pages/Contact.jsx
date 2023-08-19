import React from 'react'
import Announcement from '../components/Announcement'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import './Contact.css'
//import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from '../components/Header'
const cookies = new Cookies();


const Contact = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");



  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + "" + email + "" + subject + "" + message);
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/contact/contact",
      data: {
        username: name,
        email: email,
        subject: subject,
        message: message,
      },
    };

    axios(configuration)
    .then((result) => {
      cookies.set("TOKEN", result.data.token, {
        path: "/",
      });
      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("email", result.data.email);

      history.push("/");
    })
      .catch((error) => {
        console.log(error);
  //       if (
  //         error.response &&
  //         error.response.status >= 400 &&
  //         error.response.status <= 500
  //       ) {
  //         setError(error.response.data.message);
  //       }
      });
  };




    return (
        <div>
            <Header/>
            <div className="formbold-main-wrapper">
 
  <div className="formbold-form-wrapper">
    <form onSubmit={handleSubmit}>
      <div className="formbold-mb-5">
        <label for="name" className="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="username"
          value={name} 
          onChange={handleName}
          id="username"
          placeholder="Full Name"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label for="email" className="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          value={email} 
          onChange={handleEmail}
          id="email"
          placeholder="Enter your email"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label for="subject" className="formbold-form-label"> Subject </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={handleSubject}
          id="subject"
          placeholder="Enter your subject"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label for="message" className="formbold-form-label"> Message </label>
        <textarea
          rows="6"
          name="message"
          value={message}
          onChange={handleMessage}
          id="message"
          placeholder="Type your message"
          className="formbold-form-input"
        ></textarea>
      </div>

      <div>
      {/* <span> className="formbold-btn">Submit</span> */}
      <div className='btn btn-primary'>hhhh</div>
      </div>
    </form>
  </div>
</div>
<style></style>
        </div>
    )
}

export default Contact
