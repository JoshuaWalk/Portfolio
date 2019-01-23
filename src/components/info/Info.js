import React, { Component } from "react";
import * as emailjs from 'emailjs-com'
class Info extends Component {
  
  sendEmail(e) {
    e.preventDefault(e)   
    emailjs.sendForm('myPortfolio', 'template_Xf3mHPO4', '#emailForm', 'user_wHv9AGj9VYkxnLx8fLuSZ')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  render() {
    return (
      <div class="container">
        <a
          href="https://www.linkedin.com/in/joshua-walker3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <h1> Contact Me </h1>
        <div>
            <form name="emailForm" id="emailForm" onSubmit={e => this.sendEmail(e)}>
                <label>First Name</label> {" "}
                <input type="text" id="fname" name="firstName" placeholder="First Name"/>
                <br/>
                <label>Last Name</label>
                <input type="text" id="lname" name="lastName" placeholder="Last Name"/>
                <br/>
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email"/>
                <br/>
                <label> Subject</label>
                <textarea id="subject" name="subject" placeholder="..."/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
      </div>
    );
  }
}

export default Info;
